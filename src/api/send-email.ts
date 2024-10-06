import { Hono } from 'hono'
import {v4 as uuid} from 'uuid'
import Track from '../model/track.model';
import { sentEmail } from '../utils/sendMail';

const app = new Hono()

app.post('/send-email',async(c)=>{
    const{emails}=await c.req.json();
    console.log(process.env.MAIL_USER)

    if(!emails) return c.json({error:'emails are required'});

    const trackingId=uuid();

    try{
        await Track.create({trackingId});
        await sentEmail(emails,trackingId);
        return c.json({
            trackingId:trackingId,
            message:"Email-sent successfully"
        })

    }catch(error)
    {
        console.log("error",error);
        return c.json({error:'Failed to send email '});
    }
})

export default app