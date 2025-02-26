import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '../../assets/noimage.jpeg'

const Cards = ({ data, title }) => {
  return (
    <div className='flex flex-wrap w-full h-full p-[5%] bg-[#1f1e24] '>
        {data.map((c, i)=> (
            
            <Link className=" relative w-[25vh] mr-[5%] mb-[5%]" key={i} >
                <img 
                    className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.3)] h-[40vh] object-cover" 
                    src={
                        c.poster_path || c.backdrop_path || c.profile_path ?
                        `https://image.tmdb.org/t/p/original/${
                            c.poster_path ||
                            c.backdrop_path ||
                            c.profile_path
                                }` : noimage} 
                    alt="" />
                <h1 className='text-2xl text-zinc-400 mt-3 font-semibold'>
                {
                        c.name ||
                        c.title ||
                        c.original_name ||
                        c.original_title
                       
                    }
                </h1>
                {c.vote_average && (
                    <div className='absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[10vh] h-[5vh] flex justify-center items-center'>
                    {(c.vote_average * 10).toFixed()}<sup>%</sup>
                </div>
                )}
                
            </Link>
        ))}
    </div>
  )
}

export default Cards