// lib/email-templates/adminContactNotification.ts

interface AdminContactNotificationProps {
  name: string;
  email: string;
  phone: string;
  project: string;
  type: string;
  investment: string;
  currentTime: string;
}

export default function adminContactNotification({
  name,
  email,
  phone,
  project,
  type,
  investment,
  currentTime,
}: AdminContactNotificationProps): string {
  return `
<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]>
<xml><w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word"><w:DontUseAdvancedTypographyReadingMail/></w:WordDocument>
<o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml>
<![endif]--><!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: inherit !important;
    }

    #MessageViewBody a {
      color: inherit;
      text-decoration: none;
    }

    p {
      line-height: inherit;
      margin: 0;
    }

    @media (max-width:620px) {
      .row-content {
        width: 100% !important;
      }
      .column {
        width: 100% !important;
        display: block !important;
      }
      .mobile-padding {
        padding: 20px !important;
      }
      .button-row td {
        display: block !important;
        width: 100% !important;
        padding: 5px 0 !important;
      }
    }
  </style>
</head>

<body style="background-color: #f5f5f5; margin: 0; padding: 0;">
  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #f5f5f5;">
    <tbody>
      <tr>
        <td align="center" style="padding: 40px 20px;">
          
          <!-- Main Container -->
          <table width="600" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #ffffff; max-width: 600px; width: 100%; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <tbody>
              
              <!-- Header -->
              <tr>
                <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, #c89b66, #a8865c); border-radius: 8px 8px 0 0;">
                  <h1 style="margin: 0; color: #ffffff; font-family: 'Open Sans', Arial, sans-serif; font-size: 28px; font-weight: 700; line-height: 1.2;">
                    🎯 New Contact Enquiry
                  </h1>
                  <p style="margin: 8px 0 0; color: #ffffff; font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; opacity: 0.95;">
                    CCS Infratech - ${project}
                  </p>
                </td>
              </tr>

              <!-- Urgent Alert -->
              <tr>
                <td style="padding: 30px 40px 20px;">
                  <table width="100%" border="0" cellpadding="20" cellspacing="0" style="background: linear-gradient(135deg, #ff6b6b, #ee5a52); border-radius: 8px;">
                    <tr>
                      <td style="text-align: center;">
                        <p style="color: #ffffff; font-family: 'Open Sans', Arial, sans-serif; font-size: 16px; font-weight: 700; margin: 0;">
                          ⚡ ACTION REQUIRED
                        </p>
                        <p style="color: #ffffff; font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; margin: 8px 0 0;">
                          Contact within 2 minutes!
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Lead Details -->
              <tr>
                <td class="mobile-padding" style="padding: 20px 40px;">
                  
                  <!-- Name -->
                  <table width="100%" border="0" cellpadding="15" cellspacing="0" style="background: #f9f9f9; border-left: 4px solid #c89b66; border-radius: 6px; margin-bottom: 15px;">
                    <tr>
                      <td>
                        <p style="font-family: 'Open Sans', Arial, sans-serif; font-size: 11px; font-weight: 700; color: #c89b66; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 5px;">
                          👤 Full Name
                        </p>
                        <p style="font-family: 'Open Sans', Arial, sans-serif; font-size: 16px; color: #333333; font-weight: 600; margin: 0;">
                          ${name}
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Phone -->
                  <table width="100%" border="0" cellpadding="15" cellspacing="0" style="background: #f9f9f9; border-left: 4px solid #c89b66; border-radius: 6px; margin-bottom: 15px;">
                    <tr>
                      <td>
                        <p style="font-family: 'Open Sans', Arial, sans-serif; font-size: 11px; font-weight: 700; color: #c89b66; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 5px;">
                          📱 Phone Number
                        </p>
                        <p style="font-family: 'Open Sans', Arial, sans-serif; font-size: 16px; color: #333333; font-weight: 600; margin: 0;">
                          <a href="tel:${phone}" style="color: #c89b66; text-decoration: none; font-weight: 700;">${phone}</a>
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Email -->
                  <table width="100%" border="0" cellpadding="15" cellspacing="0" style="background: #f9f9f9; border-left: 4px solid #c89b66; border-radius: 6px; margin-bottom: 15px;">
                    <tr>
                      <td>
                        <p style="font-family: 'Open Sans', Arial, sans-serif; font-size: 11px; font-weight: 700; color: #c89b66; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 5px;">
                          ✉️ Email Address
                        </p>
                        <p style="font-family: 'Open Sans', Arial, sans-serif; font-size: 16px; color: #333333; font-weight: 600; margin: 0; word-break: break-all;">
                          <a href="mailto:${email}" style="color: #c89b66; text-decoration: none; font-weight: 700;">${email}</a>
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Project Type -->
                  <table width="100%" border="0" cellpadding="15" cellspacing="0" style="background: #f9f9f9; border-left: 4px solid #c89b66; border-radius: 6px; margin-bottom: 15px;">
                    <tr>
                      <td>
                        <p style="font-family: 'Open Sans', Arial, sans-serif; font-size: 11px; font-weight: 700; color: #c89b66; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 5px;">
                          🏗️ Property Type
                        </p>
                        <p style="font-family: 'Open Sans', Arial, sans-serif; font-size: 16px; color: #333333; font-weight: 600; margin: 0;">
                          ${type}
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Budget -->
                  <table width="100%" border="0" cellpadding="15" cellspacing="0" style="background: #f9f9f9; border-left: 4px solid #c89b66; border-radius: 6px;">
                    <tr>
                      <td>
                        <p style="font-family: 'Open Sans', Arial, sans-serif; font-size: 11px; font-weight: 700; color: #c89b66; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 5px;">
                          💰 Investment Budget
                        </p>
                        <p style="font-family: 'Open Sans', Arial, sans-serif; font-size: 16px; color: #333333; font-weight: 600; margin: 0;">
                          ${investment}
                        </p>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Action Buttons -->
              <tr>
                <td class="mobile-padding" style="padding: 20px 40px 40px;">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" class="button-row">
                    <tr>
                      <td width="48%" style="padding-right: 2%;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="text-align: center; background: #25D366; border-radius: 6px; padding: 14px 20px;">
                              <a href="tel:${phone}" style="color: #ffffff; text-decoration: none; font-family: 'Open Sans', Arial, sans-serif; font-size: 15px; font-weight: 700; display: block;">
                                📞 Call Now
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td width="48%" style="padding-left: 2%;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="text-align: center; background: #0088cc; border-radius: 6px; padding: 14px 20px;">
                              <a href="mailto:${email}" style="color: #ffffff; text-decoration: none; font-family: 'Open Sans', Arial, sans-serif; font-size: 15px; font-weight: 700; display: block;">
                                📧 Send Email
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 25px 40px; text-align: center; background: #2c2c2c; border-radius: 0 0 8px 8px;">
                  <p style="font-family: 'Open Sans', Arial, sans-serif; font-size: 12px; color: #ffffff; opacity: 0.8; margin: 0;">
                    Received on: ${currentTime}
                  </p>
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
