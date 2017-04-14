"use latest"
import Mailgun from 'mailgun-js'

const createMessage = (handle) => {
  return `
  <!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

  <head>
    <title></title>
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style type="text/css">
      #outlook a {
        padding: 0;
      }

      .ReadMsgBody {
        width: 100%;
      }

      .ExternalClass {
        width: 100%;
      }

      .ExternalClass * {
        line-height: 100%;
      }

      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }

      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if !mso]><!-->
    <style type="text/css">
      @media only screen and (max-width:480px) {
        @-ms-viewport {
          width: 320px;
        }
        @viewport {
          width: 320px;
        }
      }
    </style>
    <!--<![endif]-->
    <!--[if mso]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
    <!--[if lte mso 11]>
  <style type="text/css">
    .outlook-group-fix {
      width:100% !important;
    }
  </style>
  <![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 {
          width: 100%!important;
        }
      }
    </style>
  </head>

  <body>
    <div>
      <!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0">
          <tbody>
            <tr>
              <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px;">
                <!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
        <![endif]-->
                <div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                      <tr>
                        <td style="word-break:break-word;font-size:0px;padding:10px 25px;" align="center">
                          <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0">
                            <tbody>
                              <tr>
                                <td style="width:100px;"><img alt="" title="" height="auto" src="https://test.bouncetribe.com/logo.png" style="border:none;border-radius:0px;display:block;outline:none;text-decoration:none;width:100%;height:auto;" width="100"></td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="word-break:break-word;font-size:0px;padding:10px 25px;">
                          <p style="font-size:1px;margin:0px auto;border-top:4px solid #9575cd;width:100%;"></p>
                          <!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:4px solid #9575cd;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]-->
                        </td>
                      </tr>
                      <tr>
                        <td style="word-break:break-word;font-size:0px;padding:10px 25px;" align="left">
                          <div class="" style="cursor:auto;color:#555555;font-family:helvetica;font-size:20px;line-height:22px;text-align:left;">Hello! You received a friend request from ${handle}.</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]>
        </td></tr></table>
        <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
        </td></tr></table>
        <![endif]-->
    </div>
  </body>

  </html>
  `
}

const btEmail = (ctx, done) => {
  const domain = 'sandboxebfadedf15494984b8b9cd072d2bd594.mailgun.org'
  const {apiKey} = ctx.data
  const mailgun = new Mailgun({apiKey, domain})

  let {actor, recipient} = data.body.createdNode


  mailgun.messages().send({
     from: "cpeaslee@gmail.com",
     to: recipient.email,
     html: createMessage(actor.handle),
     subject: "New Friend Request"
   }, (error, body) => {
    console.log('error body', error, body)
  })


}

export default btEmail
