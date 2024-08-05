import { addPost, getPosts } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response)=>{
    try{
        const posts = getPosts();
        return NextResponse.json({ message:"ok",posts},{status: 200});
    }catch(err){
        return NextResponse.json({message:"Error",err},{status: 500,})
    }
};

export const POST = async (req: Request, res: Response)=>{
    const {name,qualification,title,description} = await req.json();
    try{
        const post ={ name,qualification,title,description,date:new Date(),id: Date.now().toString() };
        addPost(post);
        return NextResponse.json({message :"ok", post},{ status:201});
    }catch(err){
        return NextResponse.json({message:"Error",err},{status: 500,})
    }

};