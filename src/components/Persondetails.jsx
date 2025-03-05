import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadperson, removeperson } from '../store/actions/personActions';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';
import noimage from '../assets/noimage.jpeg'
import { title } from 'framer-motion/client';
import HorizontalCards from '../components/partials/HorizontalCards'
import Trailer from '../components/partials/Trailer'
import Dropdown from './partials/Dropdown';

const Persondetails = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.person);
    const dispatch = useDispatch();
    const [category, setcategory] = useState("movie");

    
    
    
    useEffect(() => {
      dispatch(asyncloadperson(id));
      return () => {
          dispatch(removeperson());
      };
  }, [id]);
  return info ? (
    <div className='px-[10%] h-[210vh] w-screen bg-[#1f1e24] '>
      {/* part 1 navigation */}
            <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl ">
                <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[#6556CD] ri-arrow-left-line"
                ></Link>
            </nav>

            
            <div className='w-full flex  '>
            {/* part 2 left poster and details*/}

              <div className='w-[20%]'>
                <img 
              
                    className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.3)] h-[35vh] object-cover" 
                    src={
                      `https://image.tmdb.org/t/p/original/${
                          info.detail.profile_path 
                                }` } 
                    alt="" 
                  />
                  <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500' />

                  {/*Social Media Links */}
                  <div className='text-2xl text-white flex gap-x-5'>
                  <a
                            target="_blank"
                            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                        >
                            <i className="ri-earth-fill"></i>
                        </a>

                        <a
                            target="_blank"
                            href={`https://www.facebook.com/${info.externalid.facebook_id}`}
                        >
                            <i className="ri-facebook-circle-fill"></i>
                        </a>

                        <a
                            target="_blank"
                            href={`https://www.instagram.com/${info.externalid.instagram_id}`}
                        >
                            <i className="ri-instagram-fill"></i>
                        </a>
                        <a
                            target="_blank"
                            href={`https://twitter.com/${info.externalid.twitter_id}`}
                        >
                            <i className="ri-twitter-x-fill"></i>
                        </a>

                  </div>
                  {/* personal information */}
                  <h1 className='text-2xl text-zinc-400 font-semibold my-5'>
                    Person Info
                  </h1>
                  <h1 className='text-lg text-zinc-400 font-semibold '>
                    known For
                  </h1>
                  <h1 className='text-lg text-zinc-400'>
                   {info.detail.known_for_department}
                  </h1>
                  <h1 className='text-lg text-zinc-400 font-semibold mt-3 '>
                    Gender
                  </h1>
                  <h1 className='text-lg text-zinc-400'>
                   {info.detail.gender === 2 ? "Male" : "Female" }
                  </h1>
                  <h1 className='text-lg text-zinc-400 font-semibold mt-3 '>
                    Birthday
                  </h1>
                  <h1 className='text-lg text-zinc-400'>
                   {info.detail.birthday }
                  </h1>
                  <h1 className='text-lg text-zinc-400 font-semibold mt-3 '>
                    Deathday
                  </h1>
                  <h1 className='text-lg text-zinc-400'>
                   {info.detail.deathday ? info.detail.deathday : "Still Alive" }
                  </h1>
                  <h1 className='text-lg text-zinc-400 font-semibold mt-3 '>
                    Place of Birth
                  </h1>
                  <h1 className='text-lg text-zinc-400'>
                   {info.detail.place_of_birth  }
                  </h1>
                  <h1 className='text-lg text-zinc-400 font-semibold mt-3 '>
                    Also Known As 
                  </h1>
                  <h1 className='text-lg text-zinc-400'>
                   {info.detail.also_known_as  }
                  </h1>

              </div>
                {/* Part 3 right details and information */}
                

                <div className='w-[80%] ml-[5%]'>
                  <h1 className='text-2xl text-zinc-400 font-semibold my-5'>
                    {info.detail.name}
                  </h1>

                  <h1 className='text-xl text-zinc-400 font-semibold '>
                    Biography
                  </h1>
                  <p className='text-zinc-400 mt-3'>{info.detail.biography}
                  </p>
                  <h1 className='mt-5 text-lg text-zinc-400 font-semibold '>
                      Movies & TV Shows
                  </h1>
                  <HorizontalCards data={info.combinedCredits.cast}/>

                  <div className='w-full flex justify-between'>
                    <h1 className='mt-5 text-xl text-zinc-400 font-semibold '>
                      Acting
                    </h1>
                    <Dropdown 
                    title="Category"
                    options={["tv", "movie"]}
                    func={(e)=> setcategory(e.target.value)}
                    />
                  </div>
                </div>
            </div>
    </div>

    
  ) : <Loading/>
}

export default Persondetails