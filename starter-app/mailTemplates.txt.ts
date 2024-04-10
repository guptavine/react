
const mailTemplates = {
  ROI_SUBMIT_SUB: "BWX: Your Registration of Interest has been submitted",
  ROI_SUBMIT_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
                <h3
                    style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
                    Registration of Interest Submitted
                </h3>
                <br />
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                    Dear {{name}},</p>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    Your registration of interest to join the Botanical Water Exchange has now been submitted for
                    {{companyName}}.</p>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    You have been named as the registered contact person for {{companyName}} and will receive email
                    updates to your nominated email address, <a
                    href="mailto:{{email}}"
                    style="color:#3498db;text-decoration:underline;">{{email}}</a>.
                </p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    Once your request has been approved, we will notify you via email as soon as you can proceed.
                </p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    For any additional enquiries, please contact us via the email below.
                </p>

            </td>
        </tr>
    </table>
</td>`,

  ROI_SUBMIT_ADMIN_EMAIL_SUB: "BWX: A New Registration Request has been received",
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
                    Dear BWX Admin,</p>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:30px;">
                    A new Registration of Interest has been submitted and is awaiting review.</p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                    Company details</p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:15px;">
                    Company Name : {{companyName}}
                </p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:15px;">
                    Company Type : {{companyType}}
                </p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:15px;">
                    Company Country : {{companyCountry}}
                </p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:30px;">
                    Company Website : {{companyWebsite}}
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

  REQUEST_REJECTED_EMAIL_SUB: "BWX: Registration Rejected",
  REQUEST_REJECTED_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
          Registration Rejected
                </h3>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                    Dear {{name}},</p>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    Thank you for <b>{{companyName}}'s</b> registration of interest.</p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px; line-height:22px; color:#737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    We appreciate your desire to join the Botanical Water Exchange, however upon reviewing your
                    registration request, we regret to inform you that your application has been rejected.</p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    Please refer to our FAQs on our website to clarify why your registration was not accepted at this time.
                </p>

                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    For any additional enquiries, please contact us via the email below.
                </p>
            </td>
        </tr>
    </table>
</td>`,

  REQUEST_APPROVED_EMAIL_SUB: "BWX: Registration Approved--Please Proceed with Company Setup",
  REQUEST_APPROVED_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
           Registration Approved
                </h3>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                    Dear {{name}},</p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                Thank you for <b>{{companyName}}'s</b> registration of interest to join the Botanical Water Exchange
                    (BWX).</p>

                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                Your registration has now been approved and we invite you to proceed with the next steps to set up
                    your account. You can save your progress at any stage throughout the set-up process and return at a
                    latertime to complete it.</p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                Please ensure that you have digital copies of the following documents in one of the following
                    formats: .pdf, .jpeg or .tif. Proof of address documents should be dated within the last 12 months.
                </p>

                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    The documents uploaded will be viewed strictly by Botanical Water Exchange senior management and
                    will not be shared with other parties. You control your data and information on the BWX platform and
                    can decide with whom you would like to share it. In the future you may be asked to share documents
                    to access our integrated service providers (including shipping services, insurance cover and
                    inspection services), although you decide whether to share these documents or not.
                </p>
                <p 
                    style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:600;margin:0;line-height: 22px;Margin-bottom:20px;">
                    Documents required: </p>
            <ol>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">Proof of corporate address (electricity, gas or water bill, bank statement)</li>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">Proof of identity of Ultimate Beneficial Owner (official government-issued photo ID)</li>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">Proof of address of senior manager/company director (if different from owner)</li>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">Proof of identity of senior manager/company director</li>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">Proof of address of authorised administrator (if different from owner)</li>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;" >Proof of identity of authorised administrator</li>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">Corporate document authorising appointment of administrator (link below)</li>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:10px;">Articles of Incorporation of your company</li>
               <li style="font-family:Arial,sans-serif;color:#737373;font-size:14px;font-weight:500;margin:0;line-height: 18px;Margin-bottom:30px;">Certificate of Incorporation of your company</li>
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

            <table
                style="font-family:Arial,sans-serif; vertical-align: middle; font-size:14px; color:#737373; font-weight:500; margin:0; margin-bottom:20px">
                <tr>
                    <td>
                    </td>
                    <td style="font-family:Arial,sans-serif; font-size:14px; color:#737373; font-weight:500; margin:0; ">
                    <img width="16" height="16" alt="info text" title="temporary password information" border="0" src="{{{appUrl}}}/public/info.png" style="vertical-align: middle;" />
                            Your temporary password:
                        <b>{{password}}</b>
                    </td>
                </tr>
            </table>
            <br />

            <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:300px;text-align:center;" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
                     <a href="{{{appUrl}}}" style="text-decoration:none;">
                     <div bgcolor="#153447"
                         style="display:inline-block;width:230px;font-weight:bold;margin:0;text-decoration:none;padding: 10px 30px 10px 30px;background-color:#153447;border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                         <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">Proceed to Company Registration</span>
                     </div>
                 </a>
                <!--[if mso]> </v:roundrect> <![endif]-->
                <br /> <br />

                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    We look forward to welcoming you to the Botanical Water Exchange and thank you in advance for
                    positively impacting the world.
                </p>

                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    For any questions regarding the registration process or any other enquiries, please contact us via <a
                        href="mailto:admin@botanicalwaterx.com"
                        style="color:#3498db;text-decoration:underline;">admin@botanicalwaterx.com</a>
                </p>
            </td>
        </tr>
    </table>
</td>`,

  KYC_DRAFT_EMAIL_SUB: "BWX: Your Company Registration has been saved as draft",
  KYC_DRAFT_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0 " cellspacing="0 "
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
                <h3 style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
                    Registration Received
                </h3>
                <p style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                    Dear {{name}},</p>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    Your application to join Botanical Water Exchange has been saved. It will not be reviewed until it is complete and has been submitted. 
                </p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    You can return to your application by login in to application
                </p>
                <center>
                    <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word " href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:170px;text-align:center;" arcsize="8%" stroke="f" fillcolor="#7DAF43"> <w:anchorlock/> <![endif]-->
                    <center>
                        <a href="{{{appUrl}}}" style="text-decoration:none;">
                            <div bgcolor="#7DAF43"
                                style="display:inline-block;font-weight:bold;width:170px;margin:0;text-decoration:none;text-transform:capitalize;padding: 10px 30px 10px 30px;background-color:#7DAF43;border:solid 1px #6C973A;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                                <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:13px;">
                                    Login Now
                                </span>
                            </div>
                        </a>
                    </center>
                    <!--[if mso]> </v:roundrect> <![endif]-->
                </center>
                <br/>  <br/>
                 <p style="font-family:Arial,sans-serif;color:#354052;font-size:13px;font-weight:normal;margin:0;line-height: 22px;Margin-bottom:15px;">
                 If you have any questions or need assistance please contact us on the email address below. 
                </p>
            </td>
        </tr>
    </table>
</td>`,

  KYC_SUBMIT_EMAIL_SUB: "BWX: Your Company Registration has been received",
  KYC_SUBMIT_CONFIRM_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
              Registration Received
                </h3>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                Dear {{name}},</p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                We acknowledge receipt of <b>{{companyName}}'s</b> Registration to join the Botanical Water Exchange.
                </p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                Thank you for taking the time to complete the registration process and for your continued interest in the Botanical Water Exchange.  
                </p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                We will contact you as soon as possible with any updates.
                </p>
            </td>
        </tr>
    </table>
</td>
`,

  NEW_KYC_EMAIL_ADMIN_SUB: "BWX: New Company Registration Received - Action Required: Please Review",
  NEW_KYC_EMAIL_ADMIN: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
            A New Company Registration Received
                </h3>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                Dear Botanical Water Exchange Admin,</p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                You have received a Company Registration submission which is pending review. </p>
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
                       Review Company Registration
                    </span>
                </div>
            </a>
           <!--[if mso]> </v:roundrect> <![endif]-->
            </td>
        </tr>
    </table>
</td>
`,

  KYC_REMINDER_EMAIL_SUB: "BWX: Please complete company registration",
  KYC_REMINDER_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
                <p 
                style="font-family:Arial, sans-serif;font-size:14px;color:#0065AB;font-weight:600;margin:0;Margin-bottom:15px;">
                    Dear {{name}},</p>
                <p style="font-family:Arial,sans-serif;color:#354052;font-size:13px;font-weight:normal;margin:0;line-height: 22px;Margin-bottom:15px;">
                    Your application to join Botanical Water Exchange is still saved. It will not be reviewed until it is complete and has been submitted.  
                </p>
                <p style="font-family:Arial,sans-serif;color:#354052;font-size:13px;font-weight:normal;margin:0;line-height: 22px;Margin-bottom:15px;">
                You can return to your application by clicking the link below.
                </p>
                <center>
                <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word " href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:170px;text-align:center;" arcsize="8%" stroke="f" fillcolor="#7DAF43"> <w:anchorlock/> <![endif]-->
                <center>
                    <a href="{{{appUrl}}}" style="text-decoration:none;">
                        <div bgcolor="#7DAF43"
                            style="display:inline-block;font-weight:bold;width:170px;margin:0;text-decoration:none;text-transform:capitalize;padding: 10px 30px 10px 30px;background-color:#7DAF43;border:solid 1px #6C973A;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                            <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:13px;">
                                Complete Registration 
                            </span>
                        </div>
                    </a>
                </center>
                <!--[if mso]> </v:roundrect> <![endif]-->
            </center>
            <br/>  <br/>
             <p style="font-family:Arial,sans-serif;color:#354052;font-size:13px;font-weight:normal;margin:0;line-height: 22px;Margin-bottom:15px;">
             If you have any questions or need assistance please contact us on the email address below. 
            </p>
            </td>
        </tr>
    </table>
</td>
`,

  KYC_REJECTED_EMAIL_SUB: "BWX: Company Registration Rejected",
  KYC_REJECTED_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
            Your Company's Registration has been Rejected
                </h3>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                Dear {{name}},</p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                Thank you for submitting your Company Registration. </p>
                    <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    We appreciate your desire to join the Botanical Water Exchange, however upon review your registration has been rejected.
                    </p>
                    <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                Please refer to our FAQs on our website to clarify why your registration was not accepted at this time. 
                </p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                For any additional enquiries, please contact us via the email below.
                </p>
            </td>
        </tr>
    </table>
</td>
`,

  KYC_RESUBMIT_EMAIL_SUB: "BWX: Please update your Registration",
  KYC_RESUBMIT_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
                <h3
                style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
                    Update Your Company's Registration
                </h3>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                Dear {{name}},</p>
                <p
                    style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                        Thank you for the information you have provided. We would be grateful if you could update your registration with the following items:
                </p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                    <i>{{reason}}</i>
                </p>
                <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word " href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:150px" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
                <a href="{{{appUrl}}}" style="text-decoration:none;">
                <div bgcolor="#153447"
                    style="display:inline-block;width:150px;font-weight:bold;margin:0;text-decoration:none;text-transform:capitalize;padding: 10px 30px 10px 30px;background-color:#153447;border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                    <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">
                       Update Registration
                    </span>
                </div>
            </a>
           <!--[if mso]> </v:roundrect> <![endif]-->
           <br/> <br/>
            </td>
        </tr>
    </table>
</td>
`,

  KYC_APPROVED_EMAIL_SUB: "BWX: Your Company Registration is complete",
  KYC_APPROVED_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
              Your Company's Registration is Approved
                </h3>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                Dear {{name}},</p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                Congratulations and welcome to the Botanical Water Exchange.</p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                An invite has been sent to your Company Administrator {{adminName}}, copied above, who may now log on, update their profile and begin using the platform.
                    The administrator may also activate your account and invite other users from your organisation to join the platform.
                </p>
                <br />
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                For training and support information, please visit
                    <a href="https://botanicalwaterx.com/support" target= "_blank" style="color:#3498db;text-decoration:underline;">https://botanicalwaterx.com/support</a>
                    or email our team at <a href="mailto:admin@botanicalwaterx.com"
                        style="color:#3498db;text-decoration:underline;">admin@botanicalwaterx.com</a>.
                </p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                Please let us know if there is anything else we can do to help you get started. </p>
            </td>
       </tr>
    </table>
</td>
`,
  ADMIN_INVITE_EMAIL_SUB: "BWX: You have been nominated as Company Administrator",
  ADMIN_INVITE_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
<table cellpadding="0" cellspacing="0"
    style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
    <tr>
        <td style="vertical-align:top;">
        <h3
        style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
        Company Administrator Nomination
            </h3>
            <p
            style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
            Dear {{name}},</p>
            <p
            style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
            You have been nominated by {{contactName}} to be the company administrator for <b>{{companyName}}</b> on the Botanical Water Exchange. 
            </p>
           
            <p
            style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
            To activate your account, please login using the temporary password provided below. Once logged in you will be
                prompted to create a new password and verify your account to ensure its security.
            </p>

            <p
            style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
            Your temporary password:<b>{{password}}</b>
            </p>
                <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word " href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:130px" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
                 <a href="{{{appUrl}}}" style="text-decoration:none;">
                 <div bgcolor="#153447"
                     style="display:inline-block;width:130px;font-weight:bold;margin:0;text-decoration:none;padding: 10px 30px 10px 30px;background-color:#153447;border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                     <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">
                        Proceed to Login
                     </span>
                 </div>
             </a>
            <!--[if mso]> </v:roundrect> <![endif]-->
            <br />  <br />
            <p
            style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
            If you have received this email in error, please notify us as quickly as possible.
            </p>
        </td>
    </tr>
</table>
</td>
`,

  EMPLOYEE_INVITE_EMAIL_SUB: "BWX: You have been invited to join BWX",
  EMPLOYEE_INVITE_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
<table cellpadding="0" cellspacing="0"
    style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
    <tr>
        <td style="vertical-align:top;">
        <h3
        style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
        Join BWX
            </h3>
            <p
            style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
            Dear {{name}},</p>
            <p
            style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
            You have been invited by the administrator of <b>{{companyName}}</b> to join their Botanical Water Exchange account. 
            </p>
            <p
            style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
            To activate your account, please login using the temporary password provided below. Once logged in you will be
                prompted to create a new password and verify your account to ensure its security.
            </p>

            <p
            style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
            Your temporary password:<b>{{password}}</b>
            </p>
                <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word " href="{{{appUrl}}}" style="height:40px;font-family:Arial,sans-serif;v-text-anchor:middle;width:130px" arcsize="8%" stroke="f" fillcolor="#153447"> <w:anchorlock/> <![endif]-->
                 <a href="{{{appUrl}}}" style="text-decoration:none;">
                 <div bgcolor="#153447"
                     style="display:inline-block;width:130px;font-weight:bold;margin:0;text-decoration:none;padding: 10px 30px 10px 30px;background-color:#153447;border:solid 1px #153447;border-radius:5px;box-sizing:border-box;color:#ffffff;cursor:pointer;">
                     <span style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;">
                        Proceed to Login
                     </span>
                 </div>
             </a>
            <!--[if mso]> </v:roundrect> <![endif]-->
            <br />  <br />
            <p
            style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
            If you have received this email in error, please notify us as quickly as possible.
            </p>
        </td>
    </tr>
</table>
</td>
`,

  COMPANY_BLOCKED_EMAIL_SUB: "BWX: Your Company Account has been Suspended",
  COMPANY_BLOCKED_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
            Account Suspended 
                </h3>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                Dear {{name}},</p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                Your Botanical Water Exchange account has been suspended and cannot be used to trade on the Botanical Water Exchange until further notice. 
                For further details or any questions, please refer to our FAQs on our website or contact us at the email address below. 
                </p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                Please note that any users registered under <b>{{companyName}}</b> will no longer be able to login
                    or perform any action on the platform while the company's online account is suspended.
                </p>
            </td>
        </tr>
    </table>
</td>
`,

  COMPANY_UNBLOCKED_EMAIL_SUB: "BWX: Your Company Account has been Reactivated ",
  COMPANY_UNBLOCKED_EMAIL: `<td style="vertical-align:top;box-sizing:border-box;padding:20px 20px 40px 20px;">
    <table cellpadding="0" cellspacing="0"
        style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:left;">
        <tr>
            <td style="vertical-align:top;">
            <h3
            style="font-family: Arial;font-style: normal;font-weight: 700;font-size: 30px; line-height: 40px; color: #153447;">
            Account Reactivated
                </h3>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color:#737373;font-weight: 600;margin:0;margin-bottom:20px;">
                Dear {{name}}</p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                This email is to confirm that the <b>{{companyName}}</b>
                    company account has been reactivated and users are now able to resume trading on the Botanical Water Exchange.
                    All company users under the <b>{{companyName}}</b> profile can now login and perform actions on
                    the platform.
                </p>
                <p
                style="font-family:Arial, sans-serif;font-size:14px;color: #737373;font-weight: 500;margin:0;margin-bottom:20px;">
                For further details or any questions, please contact us at the email address below.
                </p>
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
                                style="color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;">BWX</span> -->
                            <!--[if mso]> <center><table><tr><td width="620"><![endif]-->
                            <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                                <tr>
                                    <td valign="top">
                                        <table
                                            style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;padding:25px;background-color:#ffffff;">
                                            <tr>
                                                <td style="vertical-align:top;">
                                                <img alt="Botanical Water Exchange" width="620" height="180" border="0"
                                                        style="border:none;-ms-interpolation-mode:bicubic;max-width:100%;"
                                                        src="${appUrl}/public/banner.png">
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
            <img alt="Botanical Water Exchange" width="140" height="50" border="0"
                                                        style="border:none;-ms-interpolation-mode:bicubic;max-width:100%;"
                                                        src="${appUrl}/public/logo.png">
            <br /><br />
            BWX Support Services<br /><br />
            Email: <a href="mailto:admin@botanicalwaterx.com"
                style="color:#3498db;text-decoration:underline;">admin@botanicalwaterx.com</a> <br />

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
                                                   Copyright &copy; 2023 Botanical Water Exchange Limited.
                                                   
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
