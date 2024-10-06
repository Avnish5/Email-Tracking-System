import { Hono } from 'hono'
import Track from '../model/track.model';

const app = new Hono()

app.get('/get-mail-status/:id',async(c)=>{
    
    const id=c.req.param('id');
    if(!id) return c.json({error:'Tracking id is required'})

    try{
        const track=await Track.findOne({trackingId:id})
        if(!track) return c.json({error:"Tracking id is npot found"})
        return c.json({data:track})
    }catch(error)
    {
        console.log(error);
        return c.json({error:'failed to get email status'})
    }
})
export default app