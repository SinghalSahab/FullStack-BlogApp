import React from 'react'
import { popular, posts, writers} from "../utils/dummyData";
import { useEffect, useState } from "react";
import { Await, Link, useParams } from "react-router-dom";
import Profile from "../assets/profile.png";

const WriterPage = () => {

  const { id } = useParams();
const [post, setPost] = useState([]);
const [writer, setWriter] = useState(null);
const [postCount, setPostCount] = useState(0);

useEffect(() => {
  const fetchWriterAndPosts = async () => {
    const foundWriter = writers.find(writer => writer._id === id);
    setWriter(foundWriter || null);

    if (foundWriter) {
      const writerPosts = posts.filter(post => post?.user?._id === foundWriter._id);
      setPost(writerPosts);
      setPostCount(writerPosts.length);
    } else {
      setPost([]);
      setPostCount(0);
    }
  };

  fetchWriterAndPosts();
}, [id, posts, writers]);

  // if (!post) {
  //   return <div className='text-slate-800 dark:text-white'>Post not found</div>;
  // }
  if (!writer) {
    return <div className='text-slate-800 dark:text-white'>Writer not found</div>;
  }
  

  

  return (
    <div className='px-0 2xl:px-20'>
       <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row bg-black dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
           <img src={writer?.image || Profile} alt={writer?.name}  
           className='rounded-full border-4 border-slate-800 object-cover w-48 h-48'/>
           <div className='flex flex-col w-full h-full gap-y-5 md:gap-y-8 items-center justify-center'>
             <div className='text-white 2xl:text-5xl font-bold text-4xl'>
              {writer?.name}
             </div>
             <div className='flex gap-10'>
               <div className='flex flex-col items-center justify-center'>
                 <p className='text-gray-300 text-2xl font-semibold'>{writer?.followers?.length ?? 0}</p>
                 <span className=' text-gray-500'>Followers</span>
               </div>
               <div className='flex flex-col items-center justify-center'>
                 <p className='text-gray-300 text-2xl font-semibold'>{postCount ?? 0}</p>
                 <span className=' text-gray-500'>Posts</span>
               </div>
             </div>
                
           </div>
        </div>      
    </div>
  )
}

export default WriterPage