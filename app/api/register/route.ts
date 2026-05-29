import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    if (!name || !email || !company) {
      return Response.json(
        { error: "Imię, email i firma są wymagane." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Nieprawidłowy adres email." },
        { status: 400 }
      );
    }

    // Mail potwierdzający do osoby zapisującej się
    await resend.emails.send({
      from: "Akonda Targi <targi@akonda.pl>",
      to: email,
      subject: "Potwierdzenie zapisu – Wystawa Maszyn Akonda, Siemianowice Śląskie",
      html: `
        <div style="font-family: Montserrat, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #1f356a; padding: 32px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 800;">AKONDA</h1>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; margin: 8px 0 0; letter-spacing: 1.5px; text-transform: uppercase;">Wystawa Maszyn 2026</p>
          </div>
          <div style="padding: 32px;">
            <h2 style="color: #1f356a; font-size: 20px; margin: 0 0 16px;">Dziękujemy za rejestrację, ${name}!</h2>
            <p style="color: #5a647a; font-size: 14px; line-height: 1.6;">
              Potwierdzamy Twój zapis na Wystawę Maszyn Akonda w Siemianowicach Śląskich.
            </p>
            <div style="background: #f7f8fc; border-radius: 10px; padding: 24px; margin: 24px 0;">
              <p style="margin: 0 0 8px; font-size: 13px;"><strong style="color: #1f356a;">Data:</strong> <span style="color: #5a647a;">25–28 czerwca 2026</span></p>
              <p style="margin: 0 0 8px; font-size: 13px;"><strong style="color: #1f356a;">Miejsce:</strong> <span style="color: #5a647a;">Hotel Diament Vacanza, Siemianowice Śląskie</span></p>
              <p style="margin: 0; font-size: 13px;"><strong style="color: #1f356a;">Na wystawie:</strong> <span style="color: #5a647a;">Maszyny introligatorskie, iEcho PK, premiera BK4 na Śląsku</span></p>
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
            <p style="color: #9aa3b8; font-size: 11px; margin: 0;">Akonda Sp. z o.o. | akonda.pl | info@akonda.pl</p>
          </div>
        </div>
      `,
    });

    // Mail powiadomienie do Akonda
    await resend.emails.send({
      from: "Akonda Targi <targi@akonda.pl>",
      to: "info@akonda.pl",
      subject: `Nowy zapis na targi – ${name} (${company})`,
      html: `
        <div style="font-family: Montserrat, Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1f356a; padding: 24px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 800;">Nowy zapis na wystawę</h1>
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

    return Response.json({ success: true });
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json(
      { error: "Wystąpił błąd podczas rejestracji. Spróbuj ponownie." },
      { status: 500 }
    );
  }
}
