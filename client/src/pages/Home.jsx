import React, { useState } from 'react'
import { Banner ,Card,Pagination,PopularWriters,Popularposts} from '../components';
import { Link } from 'react-router-dom';
import { CATEGORIES, popular, posts } from "../utils/dummyData";
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
  if(posts.length <1) return <div className='w-full h-full px-8 flex place-items-center justify-center'>
    <span className='text-lg text-slate-500'>No post Available</span>
  </div>;
  const randomIndex = Math.floor(Math.random() * posts.length);
  return (
    <div className='py-10 2xl:py-5'>
      <Banner post = {posts[randomIndex]} />

      <div className='px-0 lg:pl-20 2xl:px-20'>
        <div className='mt-6 md:mt-0'>
        <p className='text-2xl font-semibold text-gray-600 dark:text-white'>
            Popular Categories
          </p>
          <div className='w-full flex flex-wrap py-10 gap-8'>
            {CATEGORIES.map((cat) => (
              <Link to={`/category?cat=${cat?.label}`}
               className={`flex text-white items-center justify-center gap-3 ${cat.color} rounded px-4 py-2 font-semibold cursor-pointer`}
              key={cat.label}>
              {cat?.icon}
              <span>{cat?.label}</span>
              </Link>
            ))}

          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row gap-10 2xl:gap-20'>
          <div className='w-full md:w-2/3 flex flex-col gap-y-28 md:gap-y-14'>
             {currentPosts?.map((post,index) => (
              <Card key={post?._id} post={post} index={index} />
             ))}
             <div className='w-full flex items-center justify-center'>
                <Pagination totalPages={totalPages} onPageChange={handlePageChange} currentPage={currentPage} />
             </div>
          </div>
            <div className='w-full md:w-1/4 flex flex-col gap-y-12'>
             <Popularposts posts={popular?.posts} />
             
             <PopularWriters data={popular?.writers} />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Home