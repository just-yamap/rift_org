import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);

  // This function is triggered by an entity automation on EarlyBirdSignup create.
  // Use service role to read the entity payload.
  const { data } = await req.json();
  const { name, email, quantity, location } = data || {};

  if (!email || !name) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const emailBody = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0A;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#141414;border:1px solid #292929;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background:#0A0A0A;padding:32px 40px;border-bottom:1px solid #292929;text-align:center;">
            <img src="https://media.base44.com/images/public/69bce5cb012b9c997937b65e/d6fd69fe3_image.png" width="120" alt="RIFT" style="display:block;margin:0 auto;" />
            <p style="margin:8px 0 0;color:#808080;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;">Rapid Integrated Fiat Terminal</p>
          </td>
        </tr>
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 8px;color:#808080;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;">Early Bird Confirmed</p>
            <h1 style="margin:0 0 24px;color:#F5F5F5;font-size:28px;font-weight:700;">You're on the list, ${name}.</h1>
            <p style="margin:0 0 24px;color:#808080;font-size:15px;line-height:1.7;">Thank you for joining the RIFT Early Bird waitlist. You've locked in your <strong style="color:#F5F5F5;">25% discount</strong> — reserved exclusively for founding members.</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0A;border:1px solid #292929;border-radius:8px;margin-bottom:24px;">
              <tr><td style="padding:24px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="color:#808080;font-size:13px;padding-bottom:10px;">Machines reserved</td>
                    <td align="right" style="color:#F5F5F5;font-size:13px;font-weight:600;padding-bottom:10px;">${quantity}</td>
                  </tr>
                  <tr>
                    <td style="color:#808080;font-size:13px;padding-bottom:10px;">Planned location</td>
                    <td align="right" style="color:#F5F5F5;font-size:13px;font-weight:600;padding-bottom:10px;">${location || '—'}</td>
                  </tr>
                  <tr>
                    <td style="color:#808080;font-size:13px;">Early bird discount</td>
                    <td align="right" style="color:#F5F5F5;font-size:13px;font-weight:600;">25% OFF</td>
                  </tr>
                </table>
              </td></tr>
            </table>
            <p style="margin:0 0 32px;color:#808080;font-size:14px;line-height:1.7;">We'll email you the moment pre-orders open. The world's first Solana-native ATM is almost here.</p>
            <a href="https://x.com/riftatm" style="display:inline-block;background:#F5F5F5;color:#0A0A0A;font-size:13px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:6px;letter-spacing:0.05em;">FOLLOW US ON X →</a>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 40px;border-top:1px solid #292929;text-align:center;">
            <p style="margin:0 0 4px;color:#808080;font-size:12px;">Questions? <a href="mailto:atmrift@gmail.com" style="color:#F5F5F5;">atmrift@gmail.com</a></p>
            <p style="margin:0;color:#3d3d3d;font-size:11px;">© 2026 RIFT. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await base44.asServiceRole.integrations.Core.SendEmail({
    to: email,
    subject: "You're on the RIFT Early Bird list ✓",
    body: emailBody
  });

  return Response.json({ success: true });
});