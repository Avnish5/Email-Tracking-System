import { html } from 'hono/html';
import {createTransport} from 'nodemailer'


const transporter =createTransport({
    
    service:'gmail',
    secure:true,
    port: 485,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

export const sentEmail=async(emails:string[],trackingId:string)=>{
   
    const trackingURL=`${process.env.BASE_URL}/track/track-mail/${trackingId}`;
    const mailOptions={
 
       from:process.env.MAIL_USER,
       to:emails,
       subject:'Tracking dead pixel ID',
       html:`
         <h1>Tracking Id: ${trackingId}</h1>
         <img src="${trackingURL}" alt="tracking" style="display:none; width:1px; height:1px;" />
         
       `
    }

    try{
        let info=await transporter.sendMail(mailOptions)
    }catch(error)
    {
        console.log(error)
        throw new Error("Failed to send email ")
    }
}