import React, { useEffect, useState } from 'react'
import { data, Link, useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/axios';
import Cards from './partials/Cards';

const Trending = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("all")
    const [duration, setduration] = useState("day")
    const [trending, settrending] = useState([])

    const GetTrending = async () => {
        try {
          const { data } = await axios.get(`/trending/${category}/${duration}`);
            settrending(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
       GetTrending();
    }, [category, duration]);

  return (
    <div className='px-[3%] w-screen h-screen overflow-hidden overflow-y-auto'>
        <div className=' w-full flex items-center justify-between '>
            <h1 className=' text-2xl font-semibold text-zinc-400'>
            <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line" >
            </i>
                Trending
            </h1>
            <div className='flex items-center w-[80%]'>
                <Topnav className/>
                <Dropdown 
                    title="Category" 
                    options={['movie','tv','all']}
                    func={(e)=> setcategory(e.target.value)}>
                </Dropdown>
                <div className='w-[2%]'></div>
                <Dropdown 
                    title="Duration" 
                    options={['week','day']}
                    func={(e)=> setduration(e.target.value)}>
                </Dropdown>
            </div>

            

        </div>

        <Cards data={trending} title={category}/>
    </div>
  )
}

export default Trending