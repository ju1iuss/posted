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

    // Send qualification email to user 5 minutes after signup
    await resend.emails.send({
      from: 'CEO Posted AI <julius@tasy.ai>',
      to: email,
      subject: 'Einladung zu Posted AI',
      scheduledAt: scheduledAt5min,
      html: `
        <div style="font-family: Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; line-height: 1.6;">
          <p>Hey ${name},</p>
          
          <p>Cool dass du an Posted AI interessiert bist.</p>
          
          <p>Aktuell erreichen Accounts wie <a href="https://www.tiktok.com/@lenaannehoffmann" style="color: #000; text-decoration: underline;">@lenaannehoffmann</a> mit automatisch erstellten Posts monatlich über 2 Millionen Views.</p>
          
          <p>Wir entwickeln das Tool weiter und öffnen den Beta-Zugang nur für ausgewählte Nutzer. Als Beta-Nutzer bekommst du:</p>
          
          <ul style="margin: 15px 0; padding-left: 20px;">
            <li style="margin: 8px 0;">Unlimited Exports von erstellten TikTok-Carousels</li>
            <li style="margin: 8px 0;">1-on-1 Meetings für Strategie & Support</li>
            <li style="margin: 8px 0;">Learning Material & Case Studies</li>
            <li style="margin: 8px 0;">Fertige Content-Templates die du direkt nutzen kannst</li><br/>
          </ul> Um zu prüfen, ob wir zusammenpassen, beantworte bitte kurz:</p>
          
          <div style="background: #f5f5f4; border-left: 3px solid #000; padding: 15px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>1. Volumen:</strong> Wie viele TikTok-Carousels möchtest du pro Woche erstellen? (1-5, 5-10, 10-20, 20+)</p>
            
            <p style="margin: 10px 0;"><strong>2. Start:</strong> Wann möchtest Du starten? (ASAP, Dieser Monat, Nächste 3 Monate)</p>
            
            <p style="margin: 10px 0;"><strong>3. Budget:</strong> Was ist dein monatliches Marketing-Budget für Content-Erstellung? (<200€, 200-500€, 500-1000€, 1000€+)</p>
            
            
          </div>
          
      
          
          <p><strong>Bitte antworte direkt auf diese E-Mail mit deinen Antworten.</strong> Wenn es passt, schicke ich dir einen Link für ein Onboarding-Call.</p>
          
          <p>Freue mich auf deine Antwort.</p>
          
          <p>Beste Grüße,<br/>Julius<br/>Posted AI</p>
        </div>
      `,
    });

    // Send follow-up email 1 day after signup
    await resend.emails.send({
      from: 'Julius <julius@tasy.ai>',
      to: email,
      subject: 'Was denkst du?',
      scheduledAt: scheduledAt1day,
      html: `
        <div style="font-family: Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; line-height: 1.6;">
          <p>Hey ${name}!</p>
          
          <p>In den letzten 3 Tagen hatten wir 4 Brand-Posts mit über 1,2 Millionen Impressions.</p>
          
          <p>Als Posted-Nutzer bekommst du unlimited Access zu unserem AI-Carousel-Creator für TikTok.</p>
          
          <p>Hast du schon mal Carousels für deine Brand getestet? Und betreust du mehrere Accounts?</p>
          
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
