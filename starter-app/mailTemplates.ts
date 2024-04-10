
const mailTemplates = {
    ROI_SUBMIT_SUB: "Fraktion: Your Registration Form has been submitted Please Verify",
    ROI_SUBMIT_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
      <table cellpadding="0" cellspacing="0"
          style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
          <tr>
              <td style="vertical-align:top;">
                  <h3
                      style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
                      Registration Form has been Submitted
                  </h3>
                  <br />
                  <p
                      style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                      Dear {{name}},</p>
                  <p
                      style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                      Your registration form has been submitted to join the Fraktion. </p>
                  <p
                      style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                      You have been named as the registered contact person for {{companyName}} and will receive email
                      updates to your nominated email address, <a
                      href="mailto:{{email}}"
                      style="color:#3498db;text-decoration:underline;">{{email}}</a>.
                  </p>
  
                  <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word " href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:215px" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
                     <a href="{{{appUrl}}}" style="text-decoration:none;">                     
                     <div bgcolor="#153447"
                         style="display:inline-block;width:215px;font-weight:bold;margin:0;text-decoration:none;padding: 10px 30px 10px 30px;background-color:#153447;border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                         <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">Verify Email</span>
                     </div>
                 </a>
                <!--[if mso]> </v:roundrect> <![endif]-->
  
                  <p
                      style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                      For any additional enquiries, please contact us via the email below.
                  </p>
  
              </td>
          </tr>
      </table>
  </td>`,

  ROI_SUBMIT_ADMIN_EMAIL_SUB: "Fraktion: A New Registration Request has been received",
  ROI_SUBMIT_ADMIN_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
                New Registration of Interest Received
                </h3>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                    Dear Fraktion Admin,</p>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:30px;">
                    A new Registration of Interest has been submitted and is awaiting review.</p>
          
                
         
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                    Registration details</p>
               
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                    User Type : {person}</p>

                    //[If natural person]//

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:15px;">
                    First Name : {{companyName}}
                </p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:15px;">
                Last Name : {{companyName}}
                </p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:15px;">
                    Email : {{companyType}}
                </p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:15px;">
                    Password : {{companyCountry}}
                </p>


                //[If legal person]//

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:15px;">
                    Corporate Name : {{companyName}}
                </p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:15px;">
                Corporate Form : {{companyName}}
                </p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:15px;">
                    Email : {{companyType}}
                </p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:15px;">
                    Password : {{companyCountry}}
                </p>


                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    Please log into the platform to <b> Approve </b> or <b> Reject</b> the application via the link
                    below.
                </p>

                <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word " href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:215px" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
                     <a href="{{{appUrl}}}" style="text-decoration:none;">                     
                     <div bgcolor="#153447"
                         style="display:inline-block;width:215px;font-weight:bold;margin:0;text-decoration:none;padding: 10px 30px 10px 30px;background-color:#153447;border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                         <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">Review Registration of Interest</span>
                     </div>
                 </a>
                <!--[if mso]> </v:roundrect> <![endif]-->
                

            </td>
        </tr>
    </table>
</td>`,
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
                    style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                    Dear {{name}},</p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                Thank you for <b>{{companyName}}'s</b> registration of interest to join the Fraktion.</p>

                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                Your email has now been verified and we invite you to proceed with the next steps to set up
                    your account. You can save your progress at any stage throughout the set-up process and return at a
                    latertime to complete it.</p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                Please ensure that you have digital copies of the following documents in one of the following
                    formats: .pdf, .jpeg or .tif. Proof of address documents should be dated within the last 12 months.
                </p>

                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    The documents uploaded will be viewed strictly by Fraktion senior management and
                    will not be shared with other parties. You control your data and information on the Fraktion platform and
                    can decide with whom you would like to share it. In the future you may be asked to share documents
                    to access our integrated service providers (including shipping services, insurance cover and
                    inspection services), although you decide whether to share these documents or not.
                </p>
                <p 
                    style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:600;margin:0;line-height: 22px;Margin-bottom:20px;">
                    Documents required: </p>
            <ol>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">Itsme</li>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">Proof of identity of Ultimate Beneficial Owner (official government-issued photo ID)</li>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">EID</li>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">Photo of ID-Card + Photo of Face</li>

           </ol>

                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    All companies are required to appoint a <b>Company Administrator</b> to manage how other employees access and
                    use the platform. Large companies may choose to appoint an employee of their company to act as the
                    administrator on the platform, while sole traders may assign themselves as the administrator.
                </p>

                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    In all cases we require an authorisation on company letterhead with an authorised signature and/or
                    corporate seal indicating the nominated administrator. Please follow the link to take you to the
                    appropriate template: <a href="{{{appUrl}}}/public/Company-Admin-Authorisation.docx" style="color:#3498db;text-decoration:underline;">English</a>
                </p>

                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    During the registration process you will be asked to agree to our Terms and Conditions. Should you
                    wish to have a copy of these please request them via the email listed below.
                </p>

                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    Please proceed with the company registration by following the button below.
                </p>

                
            <p
            style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
            To activate your account, please login using the temporary password provided below. Once logged in you will be
                prompted to create a new password and verify your account to ensure its security.
            </p>

            <br />

            <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:300px;text-align:center;" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
                     <a href="{{{appUrl}}}" style="text-decoration:none;">
                     <div bgcolor="#153447"
                         style="display:inline-block;width:230px;font-weight:bold;margin:0;text-decoration:none;padding: 10px 30px 10px 30px;background-color:#153447;border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                         <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">Proceed to Complete KYC</span>
                     </div>
                 </a>
            <!--[if mso]> </v:roundrect> <![endif]-->
                <br /> <br />

             
            </td>
        </tr>
    </table>
</td>`,

REQUEST_REJECTED_EMAIL_SUB: "Fraktion: As a Sophisticated Investor Rejected",
  REQUEST_REJECTED_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
            As a Sophisticated Investor Rejected
                </h3>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                    Dear {{name}},</p>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    Thank you for <b>{{companyName}}'s</b> request for Sophisticated Investor.</p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px; line-height:22px; color:#737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    We appreciate your desire to join as a Sophisticated Investor, however upon qualification as your a Sophisticated Investor
                    request, we regret to inform you that your application has been rejected due to insufficient proof. However you can continue
                    as a Non-Sophisticated Investor to continue creating your account.</p>

                    <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:300px;text-align:center;" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
                    <a href="{{{appUrl}}}" style="text-decoration:none;">
                    <div bgcolor="#153447"
                        style="display:inline-block;width:120px;font-weight:bold;margin:0;text-decoration:none;padding: 10px 30px 10px 30px;background-color:#153447;border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                        <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">Create your Account</span>
                    </div>
                </a>
               <!--[if mso]> </v:roundrect> <![endif]-->
            </td>
        </tr>
    </table>
</td>`,

REQUEST_APPROVED_EMAIL_SUB: "Fraktion: As a Sophisticated Investor Rejected",
  REQUEST_APPROVED_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
            As a Sophisticated Investor Approved
                </h3>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                    Dear {{name}},</p>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    Thank you for <b>{{companyName}}'s</b> request for Sophisticated Investor.</p>
                    // If legal person
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
              

                Please indicate which of the following criteria you meet:
                    </p>
                <ol>
                    <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">Own funds of at least EUR 100 000;</li>
                    <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">Net turnover of at least EUR 2 000 000;</li>
                    <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">Balance Sheet of at least EUR 1 000 000.</li>
                </ol>
                
                // If Natural person

                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
          
                Please indicate which of the following criteria you meet (at least two):
                </p>
                <ol>
                <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">I have a personal gross income of at least EUR 60 000 per fiscal year, or I own a financial instruments portfolio defined as including cash deposits and financial assets that exceeds EUR 100 000;</li>
                <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">☐
                I work or have worked in the financial sector for at least one year in a professional position which requires knowledge of the transactions or services engaged, or I have held an executive position for at least twelve (12) months in a legal person that meats at least one of the following criteria:
                    <ol>
                        <li>own funds of at least EUR 100 000;</li>
                        <li>net turnover of at least EUR 2 000 000;</li>
                        <li>balance sheet of at least EUR 1 000 000.</li>
                    </ol>
                </li>
                <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">I have carried out transactions of a significant size on the capital markets at an average frequency of ten (10) per quarter, over the previous four (4) quarters. A transaction of significant size is defined as follows:
                   <ol>
                        <li>Shares, including shares and units of investment funds: EUR 50 000 per transaction;</li>
                        <li>Bonds, real estate certificates and other debt instruments: EUR 200 000 per transaction;</li>
                        <li>Derivative contracts: EUR 1 000 000 per transaction.</li>
                    </ol>
                </li>
            </ol>
            <p
            style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
      
            Please upload one or more supporting documents:
            </p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px; line-height:22px; color:#737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    We appreciate your desire to join as a Sophisticated Investor, however upon qualification as your a Sophisticated Investor
                    request, we happy to inform you that your application has been approved.</p>

                    <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:300px;text-align:center;" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
                    <a href="{{{appUrl}}}" style="text-decoration:none;">
                    <div bgcolor="#153447"
                        style="display:inline-block;width:120px;font-weight:bold;margin:0;text-decoration:none;padding: 10px 30px 10px 30px;background-color:#153447;border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                        <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">Create your Account</span>
                    </div>
                </a>
               <!--[if mso]> </v:roundrect> <![endif]-->
            </td>
        </tr>
    </table>
</td>`,


NEW_USER_EMAIL_ADMIN_SUB: "Fraktion: New Sophisticated User Received - Action Required: Please Review",
NEW_USER_EMAIL_ADMIN: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
  <table cellpadding="0" cellspacing="0"
      style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
      <tr>
          <td style="vertical-align:top;">
          <h3
          style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
          A New Sophisticated User Received
              </h3>
              <p
              style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
              Dear Fraktion Admin,</p>
              <p
              style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
              You have received a New Sophisticated User which is pending review. </p>
              <p
              style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
              Please log into the platform to review and approve or reject the submission.
              </p>
              <br />
              <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word " href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:210px" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
              <a href="{{{appUrl}}}" style="text-decoration:none;">
              <div bgcolor="#153447"
                  style="display:inline-block;width:210px;font-weight:bold;margin:0;text-decoration:none;text-transform:capitalize;padding: 10px 30px 10px 30px;background-color:#153447;border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                  <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">
                     Review Sophisticated User
                  </span>
              </div>
          </a>
         <!--[if mso]> </v:roundrect> <![endif]-->
          </td>
      </tr>
  </table>
</td>
`,

TEST_FAIL_EMAIL_SUB: "Fraktion: As a Sophisticated Investor Rejected",
  TEST_FAIL_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
            You Failed your Investor Knowledge Test.  
                </h3>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                    Dear {{name}},</p>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    Thank you for <b>{{companyName}}'s</b> completing Investor Knowledge Test.</p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px; line-height:22px; color:#737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    We appreciate your desire to join our Fraktion Platform, however your Investor Knowledge Test, we regret to inform you that your results is fail due to which you are unable to invest or buy fraktion. However you can redo the test.
                </p>

                    <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:300px;text-align:center;" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
                    <a href="{{{appUrl}}}" style="text-decoration:none;">
                    <div bgcolor="#153447"
                        style="display:inline-block;width:120px;font-weight:bold;margin:0;text-decoration:none;padding: 10px 30px 10px 30px;background-color:#153447;border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                        <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">Retry Test</span>
                    </div>
                </a>
               <!--[if mso]> </v:roundrect> <![endif]-->
            </td>
        </tr>
    </table>
</td>`,

TEST_PASS_EMAIL_SUB: "Fraktion: As a Sophisticated Investor Rejected",
  TEST_PASS_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
            You have sucessfully Passed your Investor Knowledge Test.  
                </h3>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                    Dear {{name}},</p>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    Thank you for <b>{{companyName}}'s</b> completing Investor Knowledge Test.</p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px; line-height:22px; color:#737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    We appreciate your desire to join our Fraktion Platform, however your Investor Knowledge Test, we happy to inform you that your results is pass due to which you are to invest or buy fraktion. However this test is valid for 2 years, after which the user needs to re-enter the test.
                </p>

                <p
                style="font-family:Arial, sans-serif;font-size:14px; line-height:22px; color:#737373;font-weight: 500;margin:0;margin-bottom:20px;">
                You also needs to simulate his ability to bear loss - this is a simulation in Excel which will be provided to the user after completing the "Investor Knowledge test".
            </p>
            <p
            style="font-family:Arial, sans-serif;font-size:14px; line-height:22px; color:#737373;font-weight: 500;margin:0;margin-bottom:20px;">
            When investing more than 1.000 EURO or more than 5% of net worth ,You will need to receive a risk warning AND provide explicit consent.
        </p>

      

                    <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:300px;text-align:center;" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
                    <a href="{{{appUrl}}}" style="text-decoration:none;">
                    <div bgcolor="#153447"
                        style="display:inline-block;width:120px;font-weight:bold;margin:0;text-decoration:none;padding: 10px 30px 10px 30px;background-color:#153447;border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                        <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">Invest / Buy Fraktion </span>
                    </div>
                </a>
               <!--[if mso]> </v:roundrect> <![endif]-->

               <p
               style="font-family:Arial, sans-serif;font-size:14px; line-height:22px; color:#737373;font-weight: 500;margin:0;margin-bottom:20px;">
               Fraktion will inform the relevant prospective Non-Sophisticated Investor that the services offered on the Platform may be inappropriate for you. The prospective Non-Sophisticated Investor will be clearly warned by Fraktion that he risks losing the entirety of the money invested, and the relevant prospective Non-Sophisticated Investor must expressly acknowledge that he has received and understood this warning. 
           </p>
            </td>
        </tr>
    </table>
</td>`,

ADMIN_CREATE_ASSET_EMAIL_SUB: "Fraktion: New Asset is created on the platform",
ADMIN_CREATE_ASSET_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
<table cellpadding="0" cellspacing="0"
  style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
  <tr>
      <td style="vertical-align:top;">
      <h3
      style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
      New Asset Created
          </h3>
          <p
          style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
          Hello,</p>
          <p
          style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
          New asset <b>{{name}}</b> is created on the Fraktion platform. 
          </p>
          <p
          style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
          If you have received this email in error, please notify us as quickly as possible.
          </p>
      </td>
  </tr>
</table>
</td>
`,
ADMIN_BID_PAYMENT_CONFIRM_SELLER_EMAIL_SUB: "Fraktion: Bid payment is confirmed by seller",
ADMIN_BID_PAYMENT_CONFIRM_SELLER_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
<table cellpadding="0" cellspacing="0"
  style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
  <tr>
      <td style="vertical-align:top;">
      <h3
      style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
      Bid payment is confirmed
          </h3>
          <p
          style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
          Hello,</p>
          <p
          style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
          Seller has confirmed payment for bid for asset <b>{{name}}</b>. Please transfer fraktions to buyer.
          </p>
          <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:300px;text-align:center;" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
                     <a href="{{{appUrl}}}" style="text-decoration:none;">
                     <div bgcolor="#153447"
                         style="display:inline-block;width:120px;font-weight:bold;margin:0;text-decoration:none;padding: 10px 30px 10px 30px;background-color:#153447;border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                         <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">Review </span>
                     </div>
                 </a>
                <!--[if mso]> </v:roundrect> <![endif]-->
      </td>
  </tr>
</table>
</td>
`,
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
