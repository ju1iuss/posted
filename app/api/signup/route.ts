import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, niche, experience } = body;

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
            <p style="margin: 10px 0;"><strong>Niche:</strong> ${niche}</p>
            <p style="margin: 10px 0;"><strong>Follower Count:</strong> ${experience}</p>
          </div>
          
          <p style="font-size: 14px; color: #666;">This is an automated notification from Posted.</p>
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
