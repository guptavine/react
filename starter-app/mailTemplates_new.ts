
const mailTemplates = {
    
REQUEST_KYC_EMAIL_SUB: "Fraktion: Please Continue KYC Setup",
  REQUEST_KYC_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
           Email Verified
                </h3>
                
                <p 
                    style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:600;margin:0;line-height: 22px;Margin-bottom:20px;">
                    Please indicate which of the following criteria you meet (at least two): </p>
            <ul>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">I have a personal gross income of at least EUR 60 000 per fiscal year, or I own a financial instruments portfolio defined as including cash deposits and financial assets that exceeds EUR 100 000.</li>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">I work or have worked in the financial sector for at least one year in a professional position which requires knowledge of the transactions or services engaged, or I have held an executive position for at least twelve (12) months in a legal person that meats at least one of the following criteria:(a) own funds of at least EUR 100 000;(b) net turnover of at least EUR 2 000 000;(c) balance sheet of at least EUR 1 000 000.</li>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">I have carried out transactions of a significant size on the capital markets at an average frequency of ten (10) per quarter, over the previous four (4) quarters. A transaction of significant size is defined as follows:(a) shares, including shares and units of investment funds: EUR 50 000 per transaction;(b) bonds, real estate certificates and other debt instruments: EUR 200 000 per transaction;(c) derivative contracts: EUR 1 000 000 per transaction.</li>
            </ul>

               
                
         

            <br /> 
            
           <!--Approve Button -->
            <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:300px;text-align:center;" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
            <a href="{{{appUrl}}}" style="text-decoration:none;">
               <div bgcolor="#153447"
                   style="display:inline-block;width:230px;font-weight:bold;margin:0;text-decoration:none;padding: 10px 30px 10px 30px;background: rgb(45,220,159);
                   background: -moz-linear-gradient(90deg, rgba(45,220,159,1) 0%, rgba(29,198,175,1) 100%);
                   background: -webkit-linear-gradient(90deg, rgba(45,220,159,1) 0%, rgba(29,198,175,1) 100%);
                   background: linear-gradient(90deg, rgba(45,220,159,1) 0%, rgba(29,198,175,1) 100%);
                   filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2ddc9f",endColorstr="#1dc6af",GradientType=1);border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                   <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">Approve</span>
               </div>
           </a>
       <!--[if mso]> </v:roundrect> <![endif]-->
          <br /> <br />
 <!--Reject Button -->
            <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:300px;text-align:center;" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
            <a href="{{{appUrl}}}" style="text-decoration:none;">
                     <div bgcolor="#153447"
                         style="display:inline-block;width:230px;font-weight:bold;margin:0;text-decoration:none;padding: 10px 30px 10px 30px;background: rgb(255,103,103);
                         background: -moz-linear-gradient(90deg, rgba(255,103,103,1) 0%, rgba(211,45,67,1) 100%);
                         background: -webkit-linear-gradient(90deg, rgba(255,103,103,1) 0%, rgba(211,45,67,1) 100%);
                         background: linear-gradient(90deg, rgba(255,103,103,1) 0%, rgba(211,45,67,1) 100%);
                         filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6767",endColorstr="#d32d43",GradientType=1); border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                         <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">Reject</span>
                     </div>
                 </a>
            <!--[if mso]> </v:roundrect> <![endif]-->
                <br /> <br />
    
             
            </td>
        </tr>
    </table>
</td>`,

}

export function getEmailTemplate(content, appUrl) {
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta name="viewport" content="width=device-width">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Simple Transactional Email</title>
        <style type="text/css">
            .size {
                width: 620px;
                max-width: 620px;
                display: block;
                Margin: 0;
                padding: 0px;
            }
    
            @media only screen and (max-width: 620px) {
                table[class=body] h1 {
                    font-size: 28px !important;
                    margin-bottom: 10px !important
                }
    
                table[class=body] p,
                table[class=body] ul,
                table[class=body] ol,
                table[class=body] td,
                table[class=body] span,
                table[class=body] a {
                    font-size: 16px !important
                }
    
                table[class=body] .wrapper,
                table[class=body] .article {
                    padding: 10px !important
                }
    
                table[class=body] .content {
                    padding: 0 !important
                }
    
                table[class=body] .container {
                    padding: 0 !important;
                    width: 100% !important
                }
    
                table[class=body] .main {
                    border-left-width: 0 !important;
                    border-radius: 0 !important;
                    border-right-width: 0 !important
                }
    
                table[class=body] .btn table {
                    width: 100% !important
                }
    
                table[class=body] .btn a {
                    width: 100% !important
                }
    
                table[class=body] .img-responsive {
                    height: auto !important;
                    max-width: 100% !important;
                    width: auto !important
                }
            }
    
            @media all {
                .ExternalClass {
                    width: 100%
                }
    
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td,
                .ExternalClass div {
                    line-height: 100%
                }
    
                .apple-link a {
                    color: inherit !important;
                    font-family: inherit !important;
                    font-size: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                    text-decoration: none !important
                }
    
                .btn-primary table td:hover {
                    background-color: #34495e !important
                }
    
                .btn-primary a:hover {
                    background-color: #34495e !important;
                    border-color: #34495e !important
                }
            }
    
            @media only screen and (max-width: 640px) {
                body[yahoo] .deviceWidth {
                    width: 440px !important;
                    padding: 0 4px;
                }
    
                body[yahoo] .center {
                    text-align: center !important;
                }
            }
    
            @media only screen and (max-width: 479px) {
                body[yahoo] .deviceWidth {
                    width: 280px !important;
                    padding: 0 4px;
                }
    
                body[yahoo] .center {
                    text-align: center !important;
                }
            }
    
            @media only screen and (max-device-width: 640px) {
    
                /* mobile-specific CSS styles go here */
                .tablescale {
                    width: 440px !important;
                    margin:
                }
    
                .imgscale {
                    width: 100% !important;
                }
            }
    
            @media only screen and (max-device-width: 479px) {
    
                /* mobile-specific CSS styles go here */
                .tablescale {
                    width: 325px !important;
                    margin: 0 !important;
                }
    
                .imgscale {
                    width: 100% !important;
                    height: auto !important;
                    margin: auto !important;
                }
            }
        </style>
        <!--[if mso]>
      <style type="text/css">
        .outlookwith {
            width: 620px;
        }
      </style>
    <![endif]-->
    </head>
    
    <body
        style="background-color:#ffffff;font-family:sans-serif;-webkit-font-smoothing:antialiased;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;">
        <span
            style="color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;"></span>
        <center>
            <!--[if mso]><center><table><tr><td width="620"><![endif]-->
            <table cellpadding="0" cellspacing="0" class="outlookwith"
                style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;max-width:620px;Margin:0 auto;">
                <tr>
                    <td>&nbsp;</td>
                    <td style="font-family:Arial,sans-serif;display:block;padding:30px;" valign="top">
                        <div>
                            <!-- style="box-sizing:border-box;display:block;Margin:0 auto;padding:0px;box-sizing:border-box;display:block;"> -->
                            <!-- <span
                                style="color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;">FRAK</span> -->
                            <!--[if mso]> <center><table><tr><td width="620"><![endif]-->
                            <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                                <tr>
                                    <td valign="top">
                                        <table
                                            style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;padding:25px;background-color:#ffffff;">
                                            <tr>
                                                <td style="vertical-align:top;">
                                                <img alt="Fraktion" width="620" height="180" border="0"
                                                        style="border:none;-ms-interpolation-mode:bicubic;max-width:100%;"
                                                        src="${appUrl}/images/banner.png">
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top">
                                        <table
                                            style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#ffffff;width:100%;"
                                            border="0">
                                            <tr>${content}</tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="background-color:#ffffff;clear:both;width:100%;box-sizing:border-box;border:0;"
                                        valign="top">
                                        <div style="background-color:#ffffff;clear:both;width:100%;box-sizing:border-box;">
<table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff"
    style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;">
    <tr>
        <td
            style="font-family:Arial,sans-serif;vertical-align:top;padding:20px;color:#737373;font-size:14px;text-align:left;">
            Yours sincerely,<br /><br />
            <img alt="Fraktion" width="140" height="50" border="0"
                                                        style="border:none;-ms-interpolation-mode:bicubic;max-width:100%;"
                                                        src="${appUrl}/images/logo.png">
            <br /><br />
            Fraktion Support Services<br /><br />
            Email: <a href="mailto:admin@fraktion.com"
                style="color:#3498db;text-decoration:underline;">admin@fraktion.com</a> <br />

        </td>
    </tr>

</table>
</div>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top">
    
                                        <table>
                                            <tr>
                                                <td
                                                    style="font-family:Arial,sans-serif;color:#a2a2a2;font-size:12px; padding:20px;">
    
                                                    <p
                                                        style="font-family:Arial, sans-serif;font-size:12px;color: #a2a2aa;font-weight: 500;margin-bottom: 20px;">
                                                        This email was sent from a notification email address that cannot accept incoming mail. 
                                                        Please do not reply to this message.</p>
                                                   Copyright &copy; 2022 Fraktion Limited.
                                                   
                                                </td>
                                            </tr>
                                        </table>
    
                                    </td>
                                </tr>
                            </table>
                            <!--[if mso]></td></tr></table></center><![endif]-->
                        </div>
                    </td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        </center>
        <!--[if mso]></td></tr></table></center><![endif]-->
    </body>
    
    </html>`;
}

export { mailTemplates };
