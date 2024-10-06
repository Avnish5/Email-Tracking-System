import { model, Schema } from "mongoose";

interface ITrack{
    trackingId:string,
    opens:number,
    userIPs:string[]
}
const trackSchema=new Schema<ITrack>({
    trackingId:{
        type:String,
        required:true
    },
    opens:{
        type:Number,
        default:0
    },
    userIPs:{
        type:[String],
        default:[]
    }
});

const Track=model<ITrack>("Track",trackSchema);
export default Track;