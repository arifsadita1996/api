const nodemailer = require('nodemailer');

const sendmain = (request,response) => {
    

var {email,name} = request.body





var data = {
  from: 'example@from.com',
  to: email,
  subject: 'Pixel Craft Agency',
  html:  `<!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <![endif]-->
    <style>
      table, td, div, h1, p {font-family: Arial, sans-serif;}
    </style>
  </head>
  <body style="margin:0;padding:0;">
    <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
      <tr>
        <td align="center" style="padding:0;">
          <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
            <tr>
              <td align="center" style="padding:40px 0 30px 0;background:#6f42c1;">
              <img src="https://firebasestorage.googleapis.com/v0/b/craftpixel-agency.appspot.com/o/png-clipart-computer-icons-envelope-mail-envelope-miscellaneous-angle-removebg-preview.png?alt=media&token=2b9640d4-453c-45eb-a5e6-dcbd234a56c6" alt="" width="300" style="height:auto;display:block;" />
              <h1 style='color:#ffffff'>Email</h1>
              <h1 style='color:#ffffff'>Pixel Craft Agency</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:36px 30px 42px 30px;">
                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                  <tr>
                    <td style="padding:0 0 36px 0;color:#153643;">
                      <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;text-transform: capitalize;">Halo ${name} Saya Arif Admin Pixel Craft Agency Pekanbaru</h1>
                      <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;text-transform: capitalize;">Terima Kasih ${name} Telah Menjadi Bagian Dari Pixel Craft Dan Dapatkan Kabar Terbaru Dari Kami Dengan Mengikuti Sosial Media Kami</p>
                      <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0;">
                      <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                        <tr>
                          <td style="width:260px;padding:0;vertical-align:top;color:#153643;">
                            <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><img src="https://assets.codepen.io/210284/left.gif" alt="" width="260" style="height:auto;display:block;" /></p>
                            <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Silahkan Kunjungi Website Kami</p>
                            <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="https://pixelcraft-agency.web.app/" style="color:#ee4c50;text-decoration:underline;">Lebih Lanjut</a></p>
                          </td>
                          <td style="width:20px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
                          <td style="width:260px;padding:0;vertical-align:top;color:#153643;">
                            <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><img src="https://assets.codepen.io/210284/right.gif" alt="" width="260" style="height:auto;display:block;" /></p>
                            <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Silakan Chat Kami Melalui Whatsapp kami dan silahkan Tanya-tanya </p>
                            <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="https://wa.me/6282286362102" style="color:#ee4c50;text-decoration:underline;">Lebih Lanjut</a></p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:30px;background:#6f42c1;">
                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                  <tr>
                    <td style="padding:0;width:50%;" align="left">
                      <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                        &reg; Pixal Craft Agency, Indonesia,Riau,Pekanbaru 2023<br/>
                      </p>
                    </td>
                    <td style="padding:0;width:50%;" align="right">
                      <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                        <tr>
                          <td style="padding:0 0 0 10px;width:38px;">
                            <a href="http://www.twitter.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/tw_1.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                          </td>
                          <td style="padding:0 0 0 10px;width:38px;">
                            <a href="http://www.facebook.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`,
}    


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.pass
    }
  });


  
  transporter.sendMail(data, function(error, info){
    if (error) {
      console.log(error);
    } else {
      response.status(200).json({
        success:{
            message:info.response,
            code:200
        }
      })
    }
  }); 


}


module.exports = {
    sendmain
}