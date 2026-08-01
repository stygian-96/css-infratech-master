interface AdminVisitNotificationProps {
  fullName: string;
  phone: string;
  email: string;
  visitDate: string;
  visitTime: string;
  currentTime: string;
}

export default function adminVisitNotification({
  fullName,
  phone,
  email,
  visitDate,
  visitTime,
  currentTime,
}: AdminVisitNotificationProps): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Site Visit Notification</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); padding: 40px 20px; text-align: center; color: #ffffff; }
          .brand { font-size: 24px; font-weight: 800; letter-spacing: 2px; color: #c89b66; margin-bottom: 8px; text-transform: uppercase; }
          .badge { display: inline-block; background: rgba(200, 155, 102, 0.2); color: #c89b66; padding: 6px 16px; border-radius: 50px; font-size: 12px; font-weight: bold; border: 1px solid #c89b66; margin-top: 10px; }
          .content { padding: 40px 30px; color: #333333; }
          .section-title { font-size: 18px; font-weight: 700; margin-bottom: 20px; color: #1a1a1a; border-left: 4px solid #c89b66; padding-left: 12px; }
          .info-grid { background-color: #f9f9f9; border-radius: 12px; padding: 20px; margin-bottom: 30px; border: 1px solid #eeeeee; }
          .info-row { display: flex; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
          .info-row:last-child { margin-bottom: 0; border-bottom: none; }
          .label { width: 120px; font-size: 13px; color: #888888; text-transform: uppercase; font-weight: 600; }
          .value { font-size: 15px; color: #1a1a1a; font-weight: 600; }
          .footer { background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #888888; }
          .btn { display: inline-block; padding: 14px 30px; background: #c89b66; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; margin-top: 20px; transition: 0.3s; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="brand">CCS INFRATECH</div>
            <div style="font-size: 16px; opacity: 0.9;">New Site Visit Lead</div>
            <div class="badge">URGENT ACTION REQUIRED</div>
          </div>
          
          <div class="content">
            <div class="section-title">Lead Details</div>
            <div class="info-grid">
              <div class="info-row">
                <div class="label">Full Name</div>
                <div class="value">${fullName}</div>
              </div>
              <div class="info-row">
                <div class="label">Phone</div>
                <div class="value">${phone}</div>
              </div>
              <div class="info-row">
                <div class="label">Email</div>
                <div class="value">${email}</div>
              </div>
            </div>

            <div class="section-title">Schedule Information</div>
            <div class="info-grid" style="border-top: 3px solid #c89b66;">
              <div class="info-row">
                <div class="label">Visit Date</div>
                <div class="value" style="color: #c89b66;">${visitDate}</div>
              </div>
              <div class="info-row">
                <div class="label">Visit Time</div>
                <div class="value" style="color: #c89b66;">${visitTime}</div>
              </div>
              <div class="info-row">
                <div class="label">Submitted At</div>
                <div class="value">${currentTime}</div>
              </div>
            </div>

            <div style="text-align: center;">
              <a href="tel:${phone}" class="btn">Call Lead Immediately</a>
            </div>
          </div>

          <div class="footer">
            © 2026 CCS INFRATECH CRM System<br>
            This is an automated notification for site visits.
          </div>
        </div>
      </body>
    </html>
  `;
}
