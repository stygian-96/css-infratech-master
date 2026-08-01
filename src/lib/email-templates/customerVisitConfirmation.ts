interface CustomerVisitConfirmationProps {
  fullName: string;
  phone: string;
  email: string;
  visitDate: string;
  visitTime: string;
  currentTime: string;
}

export default function customerVisitConfirmation({
  fullName,
  phone,
  email,
  visitDate,
  visitTime,
  currentTime,
}: CustomerVisitConfirmationProps): string {
  return `
<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
  <title>Visit Confirmation</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css">
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; }
    a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; }
    #MessageViewBody a { color: inherit; text-decoration: none; }
    p { line-height: inherit }
    .desktop_hide, .desktop_hide table { mso-hide: all; display: none; max-height: 0px; overflow: hidden; }
    @media (max-width:645px) {
      .row-content { width: 100% !important; }
      .stack .column { width: 100%; display: block; }
      .mobile_hide { display: none; min-height: 0; max-height: 0; max-width: 0; overflow: hidden; font-size: 0px; }
      .desktop_hide, .desktop_hide table { display: table !important; max-height: none !important; }
      .row-1 .column-1 .block-1.heading_block h1 { font-size: 55px !important; }
      .row-2 .column-1 .block-1.heading_block h1 { font-size: 26px !important; }
    }
  </style>
</head>

<body class="body" style="background-color: #f0eee9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f0eee9;">
    <tbody>
      <tr>
        <td>
          <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; width: 625px; margin: 0 auto;" width="625">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%" style="padding-top:20px; padding-bottom:20px;">
                          <h1 style="margin: 0; color: #000000; font-family: Open Sans, Arial, sans-serif; font-size: 64px; font-weight: 700; text-align: center; line-height: 1.2;">CCS Infratech</h1>
                          <div style="color:#666666; font-family:Open Sans, Arial, sans-serif; font-size:14px; text-align:center; margin-top:5px;">Premium Villas | Lucknow</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #ffffff; width: 625px; margin: 0 auto;" width="625">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%" style="padding-bottom: 20px; padding-top: 5px;">
                          <div style="padding: 50px 60px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #c89b66; font-family: 'Playfair Display', Georgia, serif; font-size: 35px; font-weight: 400; line-height: 1.2;">Site Visit Confirmed!</h1>
                          </div>
                          <div style="padding: 10px 60px; text-align: center;">
                            <h2 style="margin: 0; color: #000000; font-family: Open Sans, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5;">
                              Dear <strong>${fullName}</strong>,<br><br>Your site visit to <strong>CCS Infratech</strong> has been scheduled. We look forward to showing you our premium villa project and discussing your future home.
                            </h2>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #ffffff; padding: 30px; width: 625px; margin: 0 auto;" width="625">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%" style="padding: 5px 0;">
                          <table width="100%" border="0" cellpadding="20" cellspacing="0" style="background: linear-gradient(135deg, #fff8f0, #fef5e7); border-left: 4px solid #c89b66; border-radius: 8px;">
                            <tr>
                              <td>
                                <h3 style="margin: 0 0 10px 0; color: #c89b66; font-family: 'Open Sans', Arial, sans-serif; font-size: 18px; font-weight: 600;">📍 Appointment Details</h3>
                                <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6; font-family: 'Open Sans', Arial, sans-serif;">
                                  <strong>Date:</strong> ${visitDate}<br>
                                  <strong>Time:</strong> ${visitTime}<br>
                                  <strong>Location:</strong> CCS Infratech Site Office, Lucknow
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #ffffff; padding: 0 30px 30px; width: 625px; margin: 0 auto;" width="625">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%">
                          <h2 style="margin: 0 0 15px 10px; color: #c89b66; font-family: Open Sans, Arial, sans-serif; font-size: 20px; font-weight: 600;">Visitor Information:</h2>
                          <table style="border-collapse: collapse; width: 100%; background-color: #f9f9f9; font-family: Open Sans, Arial, sans-serif; border-radius: 8px;">
                            <tbody style="font-size: 14px; color: #333333;">
                              <tr>
                                <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #666; width: 30%;">Name:</td>
                                <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${fullName}</td>
                              </tr>
                              <tr>
                                <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #666;">Phone:</td>
                                <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${phone}</td>
                              </tr>
                              <tr>
                                <td style="padding: 12px; font-weight: 600; color: #666;">Email:</td>
                                <td style="padding: 12px;">${email}</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #2c2c2c; color: #ffffff; padding: 30px; width: 625px; margin: 0 auto;" width="625">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%" style="text-align: center; font-family: Open Sans, Arial, sans-serif;">
                          <div style="font-size: 16px; font-weight: 700; margin-bottom: 5px;">CCS Infratech</div>
                          <div style="font-size: 14px; opacity: 0.8;">
                            Premium Villas | Lucknow<br>
                            Confirmed on: ${currentTime}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

        </td>
      </tr>
    </tbody>
  </table>
</body>

</html>
  `;
}
