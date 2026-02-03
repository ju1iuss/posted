import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, goal, contentApproach, tiktokExperience } = body;

    // Calculate send times
    const scheduledAt5min = new Date(Date.now() + 5 * 60 * 1000).toISOString();
    const scheduledAt1day = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

    // Send welcome email to user 5 minutes after signup
    await resend.emails.send({
      from: 'CEO Posted AI <julius@tasy.ai>',
      to: email,
      subject: 'Willkommen bei Posted AI!',
      scheduledAt: scheduledAt5min,
      html: `
        <div style="font-family: Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; line-height: 1.6;">
          <p>Hey ${name},</p>
          
          <p>Willkommen an Board! Dein Zugang zu Posted AI ist jetzt freigeschaltet.</p>
          
          <p>Aktuell erreichen Accounts wie <a href="https://www.tiktok.com/@lenaannehoffmann" style="color: #000; text-decoration: underline;">@lenaannehoffmann</a> mit automatisch erstellten Posts monatlich über 2 Millionen Views.</p>
          
          <p>Du kannst direkt loslegen und deinen ersten Content erstellen. Hier ist was dich erwartet:</p>
          
          <ul style="margin: 15px 0; padding-left: 20px;">
            <li style="margin: 8px 0;">Unlimited Exports von erstellten TikTok-Carousels</li>
            <li style="margin: 8px 0;">3 Tage kostenloser Trial, danach nur 200€ mtl.</li>
            <li style="margin: 8px 0;">Learning Material & Case Studies</li>
            <li style="margin: 8px 0;">Fertige Content-Templates die du direkt nutzen kannst</li>
          </ul>

          <p>Klicke hier um direkt zu starten: <a href="https://app.posted.dev" style="color: #000; font-weight: bold; text-decoration: underline;">app.posted.dev</a></p>
          
          <p>Freue mich auf deinen Content.</p>
          
          <p>Beste Grüße,<br/>Julius<br/>Posted AI</p>
        </div>
      `,
    });

    // Send follow-up email 1 day after signup
    await resend.emails.send({
      from: 'Julius <julius@tasy.ai>',
      to: email,
      subject: 'Kurze Frage',
      scheduledAt: scheduledAt1day,
      html: `
        <div style="font-family: Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; line-height: 1.6;">
          <p>Hey ${name}!</p>
          
          <p>Kurze Frage: Konntest du dich schon bei <a href="https://app.posted.dev" style="color: #000; text-decoration: underline;">app.posted.dev</a> einloggen?</p>
          
          <p>In den letzten 3 Tagen hatten wir 4 Brand-Posts mit über 1,2 Millionen Impressions.</p>
          
          <p>Als Posted-Nutzer bekommst du unlimited Access zu unserem AI-Carousel-Creator für TikTok für nur 200€ im Monat (nach deinem 3-Tage Trial).</p>
          
          <p>Lass mich wissen, falls du Hilfe beim Setup brauchst.</p>
          
          <p>Beste Grüße,<br/>Julius</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to process signup' },
      { status: 500 }
    );
  }
}
