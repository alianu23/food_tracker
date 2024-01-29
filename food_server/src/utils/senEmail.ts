import nodemailer from "nodemailer";
import "dotenv/config";

const transport = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (email: string, otp: string, name: string) => {
  const info = await transport.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to: email, // list of receivers
    subject: "Verify Account for Food platform", // Subject line
    text: "Hello world?", // plain text body
    html: generateTemplate(email, name, otp), // html body
  });
};

const generateTemplate = (email: string, name: string, otp: string) => {
  return `
  <body
  style="
    width: 100%;
    font-family: arial, 'helvetica neue', helvetica, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    padding: 4;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  "
>
  <div
    dir="ltr"
    class="es-wrapper-color"
    lang="en"
    style="background-color: #f6f6f6"
  >
    <table
      class="es-wrapper"
      width="100%"
      cellspacing="0"
      cellpadding="0"
      role="none"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse;
        border-spacing: 0px;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-repeat: repeat;
        background-position: center top;
        background-color: #f6f6f6;
      "
    >
      <tr>
        <td valign="top" style="padding: 0; margin: 0">
          <table
            class="es-header"
            cellspacing="0"
            cellpadding="0"
            align="center"
            role="none"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              border-collapse: collapse;
              border-spacing: 0px;
              table-layout: fixed !important;
              width: 100%;
              background-color: transparent;
              background-repeat: repeat;
              background-position: center top;
            "
          >
            <tr>
              <td align="center" style="padding: 0; margin: 0">
                <table
                  class="es-header-body"
                  cellspacing="0"
                  cellpadding="0"
                  bgcolor="#ffffff"
                  align="center"
                  role="none"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    background-color: #ffffff;
                    width: 600px;
                  "
                >
                  <tr>
                    <td
                      align="left"
                      style="
                        padding: 0;
                        margin: 0;
                        padding-top: 20px;
                        padding-left: 20px;
                        padding-right: 20px;
                      "
                    >
                      <table
                        class="es-left"
                        cellspacing="0"
                        cellpadding="0"
                        align="left"
                        role="none"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          float: left;
                        "
                      >
                        <tr>
                          <td
                            class="es-m-p0r es-m-p20b"
                            valign="top"
                            align="center"
                            style="padding: 0; margin: 0; width: 180px"
                          >
                            <table
                              width="100%"
                              cellspacing="0"
                              cellpadding="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="center"
                                  style="
                                    padding: 0;
                                    margin: 0;
                                    font-size: 0px;
                                  "
                                >
                                  <img
                                    class="adapt-img"
                                    src="https://eebwpio.stripocdn.email/content/guids/CABINET_184fde7404b22764a65892e2e5b5204ee20e877590067d18a760b792247a1750/images/logo.png"
                                    alt
                                    style="
                                      display: block;
                                      border: 0;
                                      outline: none;
                                      text-decoration: none;
                                      -ms-interpolation-mode: bicubic;
                                    "
                                    width="98"
                                    height="98"
                                  />
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <table
                        class="es-right"
                        cellspacing="0"
                        cellpadding="0"
                        align="right"
                        role="none"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          float: right;
                        "
                      >
                        <tr>
                          <td
                            align="left"
                            style="padding: 0; margin: 0; width: 360px"
                          >
                            <table
                              width="100%"
                              cellspacing="0"
                              cellpadding="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="left"
                                  style="padding: 0; margin: 0"
                                >
                                  <p
                                    style="
                                      margin: 0;
                                      -webkit-text-size-adjust: none;
                                      -ms-text-size-adjust: none;
                                      mso-line-height-rule: exactly;
                                      font-family: arial, 'helvetica neue',
                                        helvetica, sans-serif;
                                      line-height: 38px;
                                      margin-top: 20px;
                                      color: #333333;
                                      font-size: 25px;
                                    "
                                  >
                                    <strong>Hello ${name}</strong>
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table
            class="es-content"
            cellspacing="0"
            cellpadding="0"
            align="center"
            role="none"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              border-collapse: collapse;
              border-spacing: 0px;
              table-layout: fixed !important;
              width: 100%;
            "
          >
            <tr>
              <td align="center" style="padding: 0; margin: 0">
                <table
                  class="es-content-body"
                  cellspacing="0"
                  cellpadding="0"
                  bgcolor="#ffffff"
                  align="center"
                  role="none"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    background-color: #ffffff;
                    width: 600px;
                  "
                >
                  <tr>
                    <td
                      align="left"
                      style="
                        padding: 0;
                        margin: 0;
                        padding-top: 20px;
                        padding-left: 20px;
                        padding-right: 20px;
                      "
                    >
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        role="none"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                        "
                      >
                        <tr>
                          <td
                            valign="top"
                            align="center"
                            style="padding: 0; margin: 0; width: 560px"
                          >
                            <table
                              width="100%"
                              cellspacing="0"
                              cellpadding="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="left"
                                  style="padding: 0; margin: 0"
                                >
                                  <p
                                    style="
                                      margin: 0;
                                      -webkit-text-size-adjust: none;
                                      -ms-text-size-adjust: none;
                                      mso-line-height-rule: exactly;
                                      font-family: arial, 'helvetica neue',
                                        helvetica, sans-serif;
                                      line-height: 21px;
                                      color: #333333;
                                      font-size: 14px;
                                    "
                                  >
                                    Welcome to 
                                    <span style="color: #18fa51">
                                    Pinecone Food Delivery </span>
                                    Platform ${email}
                                  </p>
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
          <table
            class="es-footer"
            cellspacing="0"
            cellpadding="0"
            align="center"
            role="none"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              border-collapse: collapse;
              border-spacing: 0px;
              table-layout: fixed !important;
              width: 100%;
              background-color: transparent;
              background-repeat: repeat;
              background-position: center top;
            "
          >
            <tr>
              <td align="center" style="padding: 0; margin: 0">
                <table
                  class="es-footer-body"
                  cellspacing="0"
                  cellpadding="0"
                  bgcolor="#ffffff"
                  align="center"
                  role="none"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    background-color: #ffffff;
                    width: 600px;
                  "
                >
                  <tr>
                    <td
                      align="left"
                      style="
                        margin: 0;
                        padding-top: 20px;
                        padding-bottom: 20px;
                        padding-left: 20px;
                        padding-right: 20px;
                      "
                    >
                      <table
                        class="es-left"
                        cellspacing="0"
                        cellpadding="0"
                        align="left"
                        role="none"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          float: left;
                        "
                      >
                        <tr>
                          <td
                            class="es-m-p20b"
                            align="left"
                            style="padding: 0; margin: 0; width: 270px"
                          >
                            <table
                              width="100%"
                              cellspacing="0"
                              cellpadding="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="left"
                                  style="padding: 0; margin: 0"
                                >
                                  <p
                                    style="
                                      margin: 0;
                                      -webkit-text-size-adjust: none;
                                      -ms-text-size-adjust: none;
                                      mso-line-height-rule: exactly;
                                      font-family: arial, 'helvetica neue',
                                        helvetica, sans-serif;
                                      line-height: 21px;
                                      color: #333333;
                                      font-size: 14px;
                                    "
                                  >
                                    You'r verification code is : ${otp}
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso]></td><td style="width:20px"></td>
<td style="width:270px" valign="top"><![endif]-->
                      <table
                        class="es-right"
                        cellspacing="0"
                        cellpadding="0"
                        align="right"
                        role="none"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          float: right;
                        "
                      >
                        <tr>
                          <td
                            align="left"
                            style="padding: 0; margin: 0; width: 270px"
                          >
                            <table
                              width="100%"
                              cellspacing="0"
                              cellpadding="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="center"
                                  style="padding: 0; margin: 0; font-size: 0"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="es-table-not-adapt es-social"
                                    dir="ltr"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-collapse: collapse;
                                      border-spacing: 0px;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        valign="top"
                                        style="
                                          padding: 0;
                                          margin: 0;
                                          padding-right: 10px;
                                        "
                                      >
                                        <img
                                          src="https://eebwpio.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png"
                                          alt="Fb"
                                          title="Facebook"
                                          width="32"
                                          height="32"
                                          style="
                                            display: block;
                                            border: 0;
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                          "
                                        />
                                      </td>
                                      <td
                                        align="center"
                                        valign="top"
                                        style="
                                          padding: 0;
                                          margin: 0;
                                          padding-right: 10px;
                                          margin-top:5px;
                                        "
                                      >
                                        <img
                                          src="https://eebwpio.stripocdn.email/content/assets/img/social-icons/circle-colored/instagram-circle-colored.png"
                                          alt="Ig"
                                          title="Instagram"
                                          width="32"
                                          height="32"
                                          style="
                                            display: block;
                                            border: 0;
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                          "
                                        />
                                      </td>
                                      <td
                                        align="center"
                                        valign="top"
                                        style="padding: 0; margin: 0"
                                      >
                                        <img
                                          src="https://eebwpio.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png"
                                          alt="Yt"
                                          title="Youtube"
                                          width="32"
                                          height="32"
                                          style="
                                            display: block;
                                            border: 0;
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                          "
                                        />
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>
    `;
};
