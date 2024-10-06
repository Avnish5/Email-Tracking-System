import mongoose from "mongoose";

export const dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI!)
        console.log("database connected");
    }catch(error)
    {
       console.log("database connction failed",error);
       process.exit(1)
    }
    
}