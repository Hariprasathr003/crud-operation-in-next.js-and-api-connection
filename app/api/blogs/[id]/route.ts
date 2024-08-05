import { deletePost, getById, updatePost } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";
import { json } from "node:stream/consumers";

//Get A Post By a Id
export const GET =async (req: Request)=>{
    try{
    const id = req.url.split("blogs/")[1];
    console.log(id);
    const post = getById(id);
    if(!post){
        return NextResponse.json({message:"error"},{status:404});
    }
    return NextResponse.json({message:"ok",post},{status:200});
    }catch(err){
        return NextResponse.json({message:"error"},{status:500});
    }    
};

//Update A Post By a Id
export const PUT =async (req: Request)=>{
    try{
        const {name,qualification,title,description} = await req.json();
        const id = req.url.split("blogs/")[1];
        updatePost(id,name,qualification,title,description);
        return NextResponse.json({message:"ok"},{status:200})
    }catch(err){
        return NextResponse.json({message:"error"},{status:500});
    }
};


//Delete A Post By a Id
export const DELETE =async (req: Request)=>{
    try{
        const id = req.url.split("blogs/")[1];
        deletePost(id);
        return NextResponse.json({message:"ok"},{status:200})
    }catch(err){
        return NextResponse.json({message:"error"},{status:500});
    }
    
};