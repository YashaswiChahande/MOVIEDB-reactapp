import React, { useEffect, useState } from 'react'
import { data, Link, useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component'

const People = () => {

    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "MovieDB | person Shows "

    const GetPerson = async () => {
        try {
          const { data } = await axios.get(
            `/person/${category}?page=${page}`

          );

          if(data.results.length > 0){
            setperson((prevstate) => [...prevstate, ...data.results])
            setpage(page + 1)

          } else {
            sethasMore(false);
          }
            } catch (error) {
                console.log("Error: ", error);
            }
    };

    const refershHandler = () => {

        if (person.length === 0) {
            GetPerson();
        } else {
            setpage(1);
            setperson([]);
            GetPerson();
        }
    }

    useEffect(() => {
        refershHandler();
    }, [category]);


  return person.length > 0 ? (
    <div className=' w-screen h-screen '>
        <div className='px-[5%] w-full flex items-center justify-between '>
            <h1 className=' text-2xl font-semibold text-zinc-400'>
            <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line" >
            </i>{" "}
                persons
            </h1>
            <div className='flex items-center w-[80%]'>
                <Topnav className/>
                <div className='w-[2%]'></div>
            </div>
        </div>

        <InfiniteScroll
            dataLength={person.length}
            next={GetPerson}
            hasMore={hasMore}
            loader={<h1>Loading....</h1>}
        >
            <Cards data={person} title="person"/>
        </InfiniteScroll>
       
    </div>
  ) : (
    <Loading/>
    )
}

export default People