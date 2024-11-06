import { useState ,useEffect} from "react";
import { useLocation } from 'react-router-dom';
import { Card, Pagination, Popularposts, PopularWriters } from "../components";
import { popular, posts } from "../utils/dummyData";

const CategoriesPage = () => {
  const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('cat');
 
  const filteredPosts = query ? posts.filter(post => post.cat === query) : posts;

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 1;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts?.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  return (
    <div className='px-0 2xl:px-20'>
      <div className='py-5'>
         <h2 className='text-black dark:text-white text-4xl 2xl:text-5xl font-semibold'>
         {query}
         </h2>
      </div>


      <div className='w-full flex flex-col md:flex-row gap-10 2xl:gap-20'>
          <div className='w-full md:w-2/3 flex flex-col gap-y-28 md:gap-y-14'>
          {currentPosts?.length === 0 ? (
            <div className='w-full h-full py-8 flex  justify-center'>
              <span className='text-lg text-slate-500'>
                No Post Available for this category
              </span>
            </div>
          ) : (
            <>
             {currentPosts?.map((post,index) => (
              <Card key={post?._id} post={post} index={index}  />
             ))}
             <div className='w-full flex items-center justify-center'>
                <Pagination totalPages={totalPages} onPageChange={handlePageChange} currentPage={currentPage} />
             </div>
             </>
          )}
        </div>
            <div className='w-full md:w-1/4 flex flex-col gap-y-12'>
             <Popularposts posts={popular?.posts} />
             
             <PopularWriters data={popular?.writers} />
           </div>
        </div>
    </div>
  )
}

export default CategoriesPage