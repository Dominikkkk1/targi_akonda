import { Resend } from "resend";
import crypto from "crypto";

async function sendCapiEvent(email: string, name: string, phone: string) {
  const token = process.env.META_CAPI_TOKEN;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!token || !pixelId) return;

  const hashSha256 = (v: string) =>
    crypto.createHash("sha256").update(v.trim().toLowerCase()).digest("hex");

  const nameParts = name.trim().split(/\s+/);

  const body = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        user_data: {
          em: [hashSha256(email)],
          fn: [hashSha256(nameParts[0] || "")],
          ...(nameParts.length > 1 && { ln: [hashSha256(nameParts[nameParts.length - 1])] }),
          ...(phone && { ph: [hashSha256(phone.replace(/\D/g, ""))] }),
        },
      },
    ],
  };

  try {
    await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  } catch {
    console.error("CAPI event failed");
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const rawName = body.name;
    const rawEmail = body.email;
    const rawCompany = body.company;
    const rawPhone = body.phone;
    const rawMessage = body.message;

    if (!rawName || !rawEmail || !rawCompany || !rawPhone) {
      return Response.json(
        { error: "Imię, email, firma i telefon są wymagane." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(rawEmail)) {
      return Response.json(
        { error: "Nieprawidłowy adres email." },
        { status: 400 }
      );
    }

    const name = escapeHtml(rawName);
    const email = rawEmail;
    const company = escapeHtml(rawCompany);
    const phone = rawPhone ? escapeHtml(rawPhone) : "";
    const message = rawMessage ? escapeHtml(rawMessage) : "";

    // Mail potwierdzający do osoby zapisującej się
    await resend.emails.send({
      from: "Akonda Targi <targi@lp.akonda.pl>",
      replyTo: "kontakt@akonda.pl",
      to: rawEmail,
      subject: "Potwierdzenie rejestracji – Dni Otwarte Akonda, 27–28 sierpnia, Warszawa",
      html: `
        <div style="font-family: Montserrat, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #1f356a; padding: 32px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 800;">AKONDA</h1>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; margin: 8px 0 0; letter-spacing: 1.5px; text-transform: uppercase;">Dni Otwarte 2026</p>
          </div>
          <div style="padding: 32px;">
            <h2 style="color: #1f356a; font-size: 20px; margin: 0 0 16px;">Dziękujemy za rejestrację, ${name}!</h2>
            <p style="color: #5a647a; font-size: 14px; line-height: 1.6;">
              Potwierdzamy Twój zapis na Dni Otwarte Akonda u Market Print Global w Warszawie.
            </p>
            <div style="background: #f7f8fc; border-radius: 10px; padding: 24px; margin: 24px 0;">
              <p style="margin: 0 0 8px; font-size: 13px;"><strong style="color: #1f356a;">Data:</strong> <span style="color: #5a647a;">27–28 sierpnia 2026 (czwartek – piątek)</span></p>
              <p style="margin: 0 0 8px; font-size: 13px;"><strong style="color: #1f356a;">Miejsce:</strong> <span style="color: #5a647a;">Market Print Global, ul. Fortuny 3A, Warszawa</span></p>
              <p style="margin: 0; font-size: 13px;"><strong style="color: #1f356a;">Na wystawie:</strong> <span style="color: #5a647a;">Nowy Multigraf CF375, 365bind, oklejarki, foliarki, linie broszurujące i więcej</span></p>
            </div>
            <p style="color: #5a647a; font-size: 14px; line-height: 1.6;">
              Wkrótce skontaktujemy się z Tobą z dodatkowymi informacjami.
            </p>
            <p style="color: #5a647a; font-size: 14px; line-height: 1.6; margin-top: 24px;">
              Pozdrawiamy,<br/>
              <strong style="color: #1f356a;">Zespół Akonda</strong>
            </p>
          </div>
          <div style="background: #f7f8fc; padding: 20px; text-align: center; border-top: 1px solid #e2e6ef;">
            <p style="color: #9aa3b8; font-size: 11px; margin: 0;">Akonda Sp. z o.o. | akonda.pl | kontakt@akonda.pl</p>
          </div>
        </div>
      `,
    });

    // Mail powiadomienie do Akonda - nowy lead z eventu do obsłużenia
    await resend.emails.send({
      from: "Akonda Targi <targi@lp.akonda.pl>",
      to: ["kontakt@akonda.pl", "sales@akonda.pl", "dominik.papaj@key2print.com"],
      subject: `Nowy lead z eventu MPG – ${name} (${company})`,
      html: `
        <div style="font-family: Montserrat, Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1f356a; padding: 24px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 800;">Nowy lead z eventu MPG</h1>
          </div>
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #9aa3b8; width: 100px;">Imię:</td>
                <td style="padding: 8px 0; font-size: 13px; color: #0d0d0d; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #9aa3b8;">Email:</td>
                <td style="padding: 8px 0; font-size: 13px; color: #0d0d0d; font-weight: 600;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #9aa3b8;">Firma:</td>
                <td style="padding: 8px 0; font-size: 13px; color: #0d0d0d; font-weight: 600;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #9aa3b8;">Telefon:</td>
                <td style="padding: 8px 0; font-size: 13px; color: #0d0d0d; font-weight: 600;">${phone || "Nie podano"}</td>
              </tr>
              ${
                message
                  ? `<tr>
                <td style="padding: 8px 0; font-size: 13px; color: #9aa3b8; vertical-align: top;">Wiadomość:</td>
                <td style="padding: 8px 0; font-size: 13px; color: #0d0d0d;">${message}</td>
              </tr>`
                  : ""
              }
            </table>
          </div>
        </div>
      `,
    });

    // Meta Conversions API - server-side Lead (backup dla ad blockerów)
    sendCapiEvent(rawEmail, rawName, rawPhone);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json(
      { error: "Wystąpił błąd podczas rejestracji. Spróbuj ponownie." },
      { status: 500 }
    );
  }
}
