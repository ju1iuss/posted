import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, goal, contentApproach, tiktokExperience } = body;

    // Send email notification to julius@tasy.ai
    await resend.emails.send({
      from: 'Posted <onboarding@resend.dev>', // Update this with your verified domain
      to: 'julius@tasy.ai',
      subject: '🎉 New Signup on Posted Waitlist',
      html: `
        <div style="font-family: Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">New Signup Alert</h1>
          
          <p style="font-size: 16px; margin-bottom: 20px;">Someone just signed up for the Posted waitlist!</p>
          
          <div style="background: #f5f5f4; border: 2px solid #000; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 15px;">Signup Details:</h2>
            
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>
            <p style="margin: 10px 0;"><strong>Goal:</strong> ${goal}</p>
            <p style="margin: 10px 0;"><strong>Content Approach:</strong> ${contentApproach}</p>
            <p style="margin: 10px 0;"><strong>TikTok Experience:</strong> ${tiktokExperience}</p>
          </div>
          
          <p style="font-size: 14px; color: #666;">This is an automated notification from Posted.</p>
        </div>
      `,
    });

    // Calculate send time (5 minutes from now)
    const scheduledAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();

    // Send qualification email to user 5 minutes after signup
    await resend.emails.send({
      from: 'CEO Posted AI <julius@tasy.ai>',
      to: email,
      subject: 'Einladung zu Posted AI',
      scheduledAt: scheduledAt,
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

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to process signup' },
      { status: 500 }
    );
  }
}
