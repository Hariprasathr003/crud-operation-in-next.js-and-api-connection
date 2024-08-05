type Post ={
    id: string;
    name:string;
    qualification:string;
    title:string;
    description:string;
    date:Date;
};
let posts: Post[] = [];

//handlers

//read user
export const getPosts = () => posts;

//new user
export const addPost =(post:Post) =>{
    posts.push(post);
};

//delete user
export const deletePost =(id: string) =>{
    posts =posts.filter((post) =>post.id !== id);
};

//update user
export const updatePost =(
    id:string,
    name:string,
    qualification:string,
    title:string,
    description:string) =>{
        const post =posts.find((post)=>post.id===id);
        if(post){
           post.name=name;
           post.qualification=qualification,
           post.title=title;
           post.description=description;
        }
        else{
            throw new Error("NO POST FOUNT");
        }
};

export const getById =(id:string) =>{
    return posts.find((post) =>post.id===id);
};