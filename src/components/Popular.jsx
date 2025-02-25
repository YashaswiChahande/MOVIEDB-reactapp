import React, { useEffect, useState } from 'react'
import { data, Link, useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component'

const Popular = () => {

    const navigate = useNavigate();
    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "MOVIEDB | Popular "

    const GetPopular = async () => {
        try {
          const { data } = await axios.get(
            `/${category}/popular?page=${page}`

          );

          if(data.results.length > 0){
            setpopular((prevstate) => [...prevstate, ...data.results])
            setpage(page + 1)

          } else {
            sethasMore(false);
          }
            } catch (error) {
                console.log("Error: ", error);
            }
    };

    const refershHandler = () => {

        if (popular.length === 0) {
            GetPopular();
        } else {
            setpage(1);
            setpopular([]);
            GetPopular();
        }
    }

    useEffect(() => {
        refershHandler();
    }, [category]);

  return popular.length > 0 ? (
    <div className=' w-screen h-screen '>
        <div className='px-[5%] w-full flex items-center justify-between '>
            <h1 className=' text-2xl font-semibold text-zinc-400'>
            <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line" >
            </i>{" "}
                Popular
            </h1>
            <div className='flex items-center w-[80%]'>
                <Topnav className/>
                <Dropdown 
                    title="Category" 
                    options={['movie','tv']}
                    func={(e)=> setcategory(e.target.value)}>
                </Dropdown>
                <div className='w-[2%]'></div>
            </div>
        </div>

        <InfiniteScroll
            dataLength={popular.length}
            next={GetPopular}
            hasMore={hasMore}
            loader={<h1>Loading....</h1>}
        >
            <Cards data={popular} title={category}/>
        </InfiniteScroll>
       
    </div>
  ) : (
    <Loading/>
    )
}

export default Popular