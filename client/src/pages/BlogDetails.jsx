import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { Await, Link, useParams } from "react-router-dom";
import Profile from "../assets/profile.png";
import { Popularposts, PopularWriters, PostComments } from "../components";
import useStore from "../store";
import { popular, posts } from "../utils/dummyData";
const BlogDetails = () => {

  const { id } = useParams(); 
  const [post, setPost] = useState(null);

  useEffect( () => {
    const foundPost = posts.find(post => post._id === id);
    if (foundPost) {
      setPost(foundPost);
    } else {
      setPost(null); 
    }
  }, [id, posts]);

  if (!post) {
    return <div className='text-slate-800 dark:text-white'>Post not found</div>;
  }
  console.log("console")
  console.log(post);
  console.log(post?.views); 
console.log(post?.views?.length);
  return (
    <div className='w-full  px-0 md:px-10 py-8 2xl:px-20'>
       <div className='flex flex-col-reverse md:flex-row w-full gap-2 gap-y-5 items-center'> 
          <div className='flex flex-col gap-8 w-full md:w-1/2'>
             <h1 className='text-slate-800 dark:text-white ext-3xl md:text-5xl font-semibold '>
                 {post?.title}
             </h1>
             <div className="w-full flex gap-8 items-center">
                 <span className="font-semibold text-rose-600 flex-1">
                  {post?.cat}
                 </span>
                 <span className='flex flex-1 items-baseline text-2xl font-medium text-slate-700 dark:text-gray-400'>
                  
                   {post?.views?.length || 0}
                   <span className='text-base text-rose-600'>Views</span>
                </span>
             </div>
             <Link to={`/writer/${post?.user?._id}`}
            key={post?.user?._id + id}
            className="flex gap-2 items-center"
            >
            <img src={post?.user?.image || Profile} alt={post?.user?.name} className="rounded-full w-12 h-12 object-cover"/>
            <div className="flex flex-col gap-1">
                <span className="text-slate-800 dark:text-slate-500 font-semibold text-lg">
                   {post?.user?.name}
                </span>
                <span className='text-gray-500'>
                        {new Date(post?.createdAt).toDateString()}
                      </span>
            </div>
            </Link>
          </div>
            <img src={post?.img} alt={post?.title} className='w-full md:w-1/2 h-auto md:h-[360px] 2xl:h-[460px] rounded object-contain' />
       </div>

      <div className="w-full flex flex-col md:flex-row gapx-10 2xl:gap-x-28 mt-10">
          <div className="w-full md:w-2/3 flex flex-col text-black dark:text-gray-500 ">
               {post?.desc && (<Markdown
              options={{ wrapper: "article" }}
              className='leading-[3rem] text-base 2xl:text-[20px]'
            >
              {post?.desc}
            </Markdown>)}
            
          <div className='w-full'>
            <PostComments postId={id} />
          </div>
        
          </div>
          <div className='w-full md:w-1/4 flex flex-col gap-y-12'>
             <Popularposts posts={popular?.posts} />
             
             <PopularWriters data={popular?.writers} />
           </div>
      </div>

    </div>
  )
}

export default BlogDetails