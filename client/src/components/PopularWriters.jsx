import React from "react";
import { Link } from "react-router-dom";
import Profile from "../assets/profile.png";
import { formatNumber } from "../utils";
const PopularWriters = ({data}) => {
  return (
    <div className="flex flex-col w-full gap-8">
        
      <p className='text-gray-600 dark:text-slate-500 font-bold text-xl -mb-3'>
          Popular Writers
      </p>
        {data?.map((el,id)=>(
            <Link to={`/writer/${el?._id}`}
            key={el?._id + id}
            className="flex gap-2 items-center"
            >
            <img src={el?.image || Profile} alt={el?.name} className="rounded-full w-12 h-12 object-cover"/>
            <div className="flex flex-col gap-1">
                <span className="text-slate-800 dark:text-slate-500 font-semibold text-lg">
                   {el?.name}
                </span>
                <span className='text-rose-800 font-medium'>
              {formatNumber(el?.followers)}{" "}
              <span className='text-gray-600'>Followers</span>
            </span>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default PopularWriters