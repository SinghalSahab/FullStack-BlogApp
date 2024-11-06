import React from 'react'
import { Link } from "react-router-dom";
import { CATEGORIES } from "../utils/dummyData";

const Popularposts = ({posts}) => {

    const Card = ({ post }) => {
        let catColor = "";
        CATEGORIES.map((cat) => {
          if (cat.label === post?.cat) {
            catColor = cat?.color;
          }
          return null;
        });
        return(
            <div className='flex items-center gap-2'>
                <img src={post?.img} alt={post?.user?.name} className='rounded-full object-cover w-12 h-12 ' />
                <div className='flex flex-col gap-2 w-full'>
                    <span className={`${catColor} rounded-full px-2 py-0.5 text-[12px] w-fit text-white 2xl:text-sm`}>
                        {post?.cat}
                    </span>
                    <Link to={`/${post?.slug}/${post?._id}`} className="text-black dark:text-white">
                    
                      {post?.title}
           
                    </Link>
                    <div className='flex gap-2 text-sm'>
                       <span className='font-medium'>{post?.user?.name}</span>
                      <span className='text-gray-500'>
                        {new Date(post?.createdAt).toDateString()}
                      </span>
                    </div>
                </div>
            </div>
        );
    }
  return (
    <div className='w-full flex flex-col gap-8'>
        <p className='text-gray-600 dark:text-slate-500 font-bold text-xl -mb-3'>
        Popular Articles
        </p>
        {posts?.map((post,id) => (
            <Card post={post} key={id} />
        ))}
        
    </div>
    
  )
}


export default Popularposts;