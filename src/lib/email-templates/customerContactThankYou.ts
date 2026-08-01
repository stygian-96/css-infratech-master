// lib/email-templates/customerContactThankYou.ts

interface CustomerContactThankYouProps {
  name: string;
  email: string;
  phone: string;
  project: string;
  type: string;
  investment: string;
  currentTime: string;
}

export default function customerContactThankYou({
  name,
  email,
  phone,
  project,
  type,
  investment,
  currentTime,
}: CustomerContactThankYouProps): string {
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
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"><!--<![endif]-->
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
      line-height: inherit
    }

    .desktop_hide,
    .desktop_hide table {
      mso-hide: all;
      display: none;
      max-height: 0px;
      overflow: hidden;
    }

    .image_block img+div {
      display: none;
    }

    sup,
    sub {
      font-size: 75%;
      line-height: 0;
    }

    .button:hover {
      background-color: #e2b17a !important;
      border-bottom: 0 solid transparent !important;
      border-left: 0 solid transparent !important;
      border-right: 0px solid transparent !important;
      border-top: 0 solid transparent !important;
      color: #ffffff !important;
    }

    @media (max-width:645px) {

      .desktop_hide table.icons-inner,
      .social_block.desktop_hide .social-table {
        display: inline-block !important;
      }

      .icons-inner {
        text-align: center;
      }

      .icons-inner td {
        margin: 0 auto;
      }

      .image_block div.fullWidth {
        max-width: 100% !important;
      }

      .mobile_hide {
        display: none;
      }

      .row-content {
        width: 100% !important;
      }

      .stack .column {
        width: 100%;
        display: block;
      }

      .mobile_hide {
        min-height: 0;
        max-height: 0;
        max-width: 0;
        overflow: hidden;
        font-size: 0px;
      }

      .desktop_hide,
      .desktop_hide table {
        display: table !important;
        max-height: none !important;
      }

      .row-1 .column-1 .block-1.heading_block h1 {
        font-size: 55px !important;
      }

      .row-2 .column-1 .block-1.heading_block h1 {
        font-size: 26px !important;
      }
    }
  </style><!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
</head>

<body class="body" style="background-color: #f0eee9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f0eee9;">
    <tbody>
      <tr>
        <td>
          <!-- Row 1: Header with Logo -->
          <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 625px; margin: 0 auto;" width="625">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
                          <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tr>
                              <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:20px;text-align:center;width:100%;">
                                <h1 style="margin: 0; color: #000000; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 64px; font-weight: 700; letter-spacing: normal; line-height: 1.2; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 77px;"><span style="word-break: break-word;">CCS Infratech</span></h1>
                              </td>
                            </tr>
                          </table>
                          <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                            <tr>
                              <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:5px;">
                                <div style="color:#666666;direction:ltr;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:17px;">
                                  <p style="margin: 0;">Building Dreams, Creating Landmarks</p>
                                </div>
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

          <!-- Row 2: Thank You Hero Section -->
          <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 625px; margin: 0 auto;" width="625">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-top: 5px; vertical-align: top;">
                          <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tr>
                              <td class="pad" style="padding-bottom:30px;padding-left:60px;padding-right:60px;padding-top:50px;text-align:center;width:100%;">
                                <h1 style="margin: 0; color: #c89b66; direction: ltr; font-family: 'Playfair Display', Georgia, serif; font-size: 35px; font-weight: 400; letter-spacing: normal; line-height: 1.2; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 42px;"><span style="word-break: break-word;">Thank You for Reaching Out!</span></h1>
                              </td>
                            </tr>
                          </table>
                          <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tr>
                              <td class="pad" style="padding-bottom:10px;padding-left:60px;padding-right:60px;padding-top:10px;text-align:center;width:100%;">
                                <h2 style="margin: 0; color: #000000; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; letter-spacing: normal; line-height: 1.5; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 24px;">
                                  <span style="word-break: break-word;">Dear <strong>${name}</strong>,<br><br>Thank you for contacting <strong>CCS Infratech</strong>. We have received your enquiry and our dedicated team is reviewing your requirements.</span>
                                </h2>
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

          <!-- Row 3: What Happens Next Box -->
          <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; padding: 30px; width: 625px; margin: 0 auto;" width="625">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
                          <table width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: linear-gradient(135deg, #fff8f0, #fef5e7); border-left: 4px solid #c89b66; border-radius: 8px;">
                            <tr>
                              <td>
                                <h3 style="margin: 0 0 10px 0; color: #c89b66; font-family: 'Open Sans', Arial, sans-serif; font-size: 18px; font-weight: 600;">⚡ What Happens Next?</h3>
                                <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6; font-family: 'Open Sans', Arial, sans-serif;">Our team will contact you within <strong>24 hours</strong> to discuss your requirements and provide personalized property recommendations.</p>
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

          <!-- Row 4: Inquiry Details Table -->
          <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; padding: 0 30px 30px; width: 625px; margin: 0 auto;" width="625">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
                          <table class="heading_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tr>
                              <td class="pad">
                                <h2 style="margin: 0; color: #c89b66; direction: ltr; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 600; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0;"><span style="word-break: break-word;">Your Enquiry Details:</span></h2>
                              </td>
                            </tr>
                          </table>
                          <table class="table_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tr>
                              <td class="pad">
                                <table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; width: 100%; table-layout: fixed; background-color: #f9f9f9; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; color: #333333; text-align: left; border-radius: 8px;" width="100%">
                                  <tbody style="vertical-align: top; font-size: 14px; line-height: 1.5;">
                                    <tr>
                                      <td width="35%" style="padding: 12px; word-break: break-word; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #666;">Name:</td>
                                      <td width="65%" style="padding: 12px; word-break: break-word; border-bottom: 1px solid #e0e0e0;">${name}</td>
                                    </tr>
                                    <tr>
                                      <td width="35%" style="padding: 12px; word-break: break-word; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #666;">Phone:</td>
                                      <td width="65%" style="padding: 12px; word-break: break-word; border-bottom: 1px solid #e0e0e0;">${phone}</td>
                                    </tr>
                                    <tr>
                                      <td width="35%" style="padding: 12px; word-break: break-word; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #666;">Email:</td>
                                      <td width="65%" style="padding: 12px; word-break: break-word; border-bottom: 1px solid #e0e0e0;">${email}</td>
                                    </tr>
                                    <tr>
                                      <td width="35%" style="padding: 12px; word-break: break-word; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #666;">Project:</td>
                                      <td width="65%" style="padding: 12px; word-break: break-word; border-bottom: 1px solid #e0e0e0;">${project}</td>
                                    </tr>
                                    <tr>
                                      <td width="35%" style="padding: 12px; word-break: break-word; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #666;">Property Type:</td>
                                      <td width="65%" style="padding: 12px; word-break: break-word; border-bottom: 1px solid #e0e0e0;">${type}</td>
                                    </tr>
                                    <tr>
                                      <td width="35%" style="padding: 12px; word-break: break-word; font-weight: 600; color: #666;">Budget Range:</td>
                                      <td width="65%" style="padding: 12px; word-break: break-word;">${investment}</td>
                                    </tr>
                                  </tbody>
                                </table>
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

          <!-- Row 5: Contact Info Box -->
          <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; padding: 0 30px 30px; width: 625px; margin: 0 auto;" width="625">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
                          <table width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9; border-radius: 8px;">
                            <tr>
                              <td style="text-align: center;">
                                <h3 style="margin: 0 0 12px 0; color: #666; font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; font-weight: 600;">Need immediate assistance?</h3>
                                <p style="margin: 8px 0 0 0; color: #111827; font-size: 14px; font-family: 'Open Sans', Arial, sans-serif;">
                                  ✉️ Email: <a href="mailto:info@ccsinfratech.com" style="color: #c89b66; text-decoration: none;">info@ccsinfratech.com</a>
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

          <!-- Row 6: Disclaimer -->
          <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; padding: 20px 30px; width: 625px; margin: 0 auto;" width="625">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
                          <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                            <tr>
                              <td class="pad">
                                <div style="color:#999999;direction:ltr;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:12px;font-weight:400;line-height:1.5;text-align:center;mso-line-height-alt:18px;">
                                  <p style="margin: 0;">This is an automated confirmation email. Please do not reply to this email.</p>
                                </div>
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

          <!-- Row 7: Footer -->
          <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #2c2c2c; border-radius: 0; color: #ffffff; padding: 30px; width: 625px; margin: 0 auto;" width="625">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
                          <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                            <tr>
                              <td class="pad">
                                <div style="color:#ffffff;direction:ltr;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:16px;font-weight:700;line-height:1.2;text-align:center;mso-line-height-alt:19px;">
                                  <p style="margin: 0;">CCS Infratech</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table class="paragraph_block block-2" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                            <tr>
                              <td class="pad">
                                <div style="color:#ffffff;direction:ltr;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:1.5;text-align:center;opacity:0.8;mso-line-height-alt:21px;">
                                  <p style="margin: 0;">Sarai Sheikh, Satrikh Road, Chinhat<br>Lucknow, Uttar Pradesh - 226010</p>
                                  <p style="margin: 10px 0 0 0;">Enquiry submitted on: ${currentTime}</p>
                                  <p style="margin: 10px 0 0 0;">© ${new Date().getFullYear()} CCS INFRATECH. All rights reserved.</p>
                                </div>
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

        </td>
      </tr>
    </tbody>
  </table>
</body>

</html>
  `;
}
