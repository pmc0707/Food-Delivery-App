import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://pmc0707:radha1907@cluster0.r7e7x.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
   
}
