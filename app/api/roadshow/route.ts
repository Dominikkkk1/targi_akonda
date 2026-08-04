import { Resend } from "resend";

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
    const rawCity = body.city;
    const rawMessage = body.message;

    if (!rawName || !rawEmail || !rawCompany || !rawPhone || !rawCity) {
      return Response.json(
        { error: "Imię, email, firma, telefon i miasto są wymagane." },
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
    const phone = escapeHtml(rawPhone);
    const city = escapeHtml(rawCity);
    const message = rawMessage ? escapeHtml(rawMessage) : "";

    // Mail potwierdzający do klienta
    await resend.emails.send({
      from: "Akonda Multigraf <targi@lp.akonda.pl>",
      replyTo: "kontakt@akonda.pl",
      to: rawEmail,
      subject: "Potwierdzenie zgłoszenia – Roadshow Multigraf CF375 Xpro",
      html: `
        <div style="font-family: Montserrat, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #1f356a; padding: 32px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 800;">AKONDA</h1>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; margin: 8px 0 0; letter-spacing: 1.5px; text-transform: uppercase;">Oficjalny partner Multigraf w Polsce</p>
          </div>
          <div style="padding: 32px;">
            <h2 style="color: #1f356a; font-size: 20px; margin: 0 0 16px;">Dziękujemy za zgłoszenie, ${name}!</h2>
            <p style="color: #5a647a; font-size: 14px; line-height: 1.6;">
              Potwierdzamy Twoje zainteresowanie prezentacją Multigraf Touchline CF375 Xpro.
            </p>
            <div style="background: #f7f8fc; border-radius: 10px; padding: 24px; margin: 24px 0;">
              <p style="margin: 0 0 8px; font-size: 13px;"><strong style="color: #1f356a;">Co dalej?</strong> <span style="color: #5a647a;">Nasz konsultant skontaktuje się z Tobą, żeby umówić termin i miejsce prezentacji.</span></p>
              <p style="margin: 0 0 8px; font-size: 13px;"><strong style="color: #1f356a;">Lokalizacja:</strong> <span style="color: #5a647a;">${city} - przyjedziemy do Ciebie z maszyną</span></p>
              <p style="margin: 0; font-size: 13px;"><strong style="color: #1f356a;">Maszyna:</strong> <span style="color: #5a647a;">Multigraf Touchline CF375 Xpro - multifinisher (bigowanie, perforacja, falcowanie, numeracja)</span></p>
            </div>
            <p style="color: #5a647a; font-size: 14px; line-height: 1.6; margin-top: 24px;">
              Pozdrawiamy,<br/>
              <strong style="color: #1f356a;">Zespół Akonda</strong>
            </p>
          </div>
          <div style="background: #f7f8fc; padding: 20px; text-align: center; border-top: 1px solid #e2e6ef;">
            <p style="color: #9aa3b8; font-size: 11px; margin: 0;">Akonda Sp. z o.o. | Oficjalny partner Multigraf w Polsce | akonda.pl</p>
          </div>
        </div>
      `,
    });

    // Mail do Akonda - lead roadshow
    await resend.emails.send({
      from: "Akonda Multigraf <targi@lp.akonda.pl>",
      to: ["kontakt@akonda.pl", "sales@akonda.pl", "dominik.papaj@key2print.com"],
      subject: `Roadshow CF375 Xpro – ${name} (${company}, ${city})`,
      html: `
        <div style="font-family: Montserrat, Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1f356a; padding: 24px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 800;">Roadshow CF375 Xpro - nowy lead</h1>
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
                <td style="padding: 8px 0; font-size: 13px; color: #0d0d0d; font-weight: 600;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #9aa3b8;">Miasto:</td>
                <td style="padding: 8px 0; font-size: 13px; color: #0d0d0d; font-weight: 600;">${city}</td>
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

    return Response.json({ success: true });
  } catch (error) {
    console.error("Roadshow registration error:", error);
    return Response.json(
      { error: "Wystąpił błąd podczas wysyłania zgłoszenia. Spróbuj ponownie." },
      { status: 500 }
    );
  }
}
