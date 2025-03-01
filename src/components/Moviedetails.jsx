import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';
import noimage from '../assets/noimage.jpeg'
import { title } from 'framer-motion/client';
import HorizontalCards from '../components/partials/HorizontalCards'

const Moviedetails = () => {

  const {pathname} = useLocation;
  const navigate = useNavigate();
  const {id} = useParams();
  const {info} = useSelector(state => state.movie);
  const dispatch = useDispatch();
  
  
  
  useEffect(() => {
      dispatch(asyncloadmovie(id));
      return () => {
          dispatch(removemovie());
      };
  }, [id]);
  return info ? (
    <div 
      style={{
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
  }}
  className="relative w-screen h-[175vh] px-[10%]">

      {/* part 1 navigation */}
      <nav className='h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl '>
      <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[#6556CD] ri-arrow-left-line">

      </Link>
      <a target="_blank" href={info.detail.homepage}>
                    <i className="ri-external-link-fill"></i>
      </a>
      <a
        target="_blank"
        href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
        <i className="ri-earth-fill"></i>
      </a>

      <a
        target="_blank"
        href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>
                    imdb
      </a>

      </nav>

        {/* part 2 poster and details */}
        <div className='w-full flex'>

        <img 
        
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.3)] h-[50vh] object-cover" 
              src={
                `https://image.tmdb.org/t/p/original/${
                    info.detail.poster_path ||
                    info.detail.backdrop_path 
                          }` } 
              alt="" 
            />

            <div className='content  ml-[5%] text-white '>

              <h1 className='text-5xl font-black '>
                {
                   info.detail.name ||
                   info.detail.title ||
                   info.detail.original_name ||
                   info.detail.original_title   
                }
                <small className='text-2xl font-bold text-zinc-200'>({info.detail.release_date.split("-")[0]})</small>
              </h1>
              <div className=' mt-3 mb-10 flex  items-center gap-x-5'>
              <span className='rounded-full text-xl font-semibold  bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center'>
                    {(info.detail.vote_average * 10).toFixed()}<sup>%</sup>
                </span>

                <h1 className='font-semibold text-2xl w-[60px] leading-6'>User Score</h1>
                <h1>{info.detail.release_date}</h1>
                <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
                <h1>{info.detail.runtime}min</h1>
              </div>
                <h1 className='text-xl font-semibold italic text-zinc-200'>{info.detail.tagline}
                </h1>
                <h1 className='text-2xl mt-5 mb-3  '>
                  Overview
                </h1>
                <p>{info.detail.overview}</p>
                <h1 className='text-2xl mt-5 mb-3  '>
                  Movie Translated
                </h1>
                <p className='mb-10' >{info.translations.join(", ")}</p>

                <Link className='mt-10 py-5 px-10 bg-[#6556CD] rounded-lg' to={`${pathname}/trailer`} > 
                <i className="text-xl ri-play-fill mr-3 "></i>
                Play Trailer
                </Link>

            </div>
        </div>

        {/* part 3 Available on platform */}   
        <div className='w-[80%] flex flex-col gap-y-5 mt-10'>
          

            
            {
                info.watchproviders && 
                  info.watchproviders.flatrate && 
                  <div className='flex gap-x-10 items-center text-white'>
                    <h1>Availble on Platforms</h1>
                    {
                    info.watchproviders.flatrate.map((w, i)=> (
                    <img 
                    title={w.provider_name}
                    className='w-[5vh] 7-[5vh] rounded-md object-cover'
                    key={i}
                    src={

                        `https://image.tmdb.org/t/p/original/${w.logo_path}`} 
                    alt="" 
                  />
                  ))
                  }
                  </div>
                  
                  }
              

                {
                info.watchproviders && 
                  info.watchproviders.rent && 
                  <div className='flex gap-x-10 items-center text-white'>
                    <h1>Availble on Rent</h1>
                    {
                    info.watchproviders.rent.map((w, i)=> (
                    <img 
                    title={w.provider_name}
                    className='w-[5vh] 7-[5vh] rounded-md object-cover'
                    key={i}
                    src={

                        `https://image.tmdb.org/t/p/original/${w.logo_path}`} 
                    alt="" 
                  />
                  ))
                  }
                  </div>
                  
                  }

{
                info.watchproviders && 
                  info.watchproviders.buy && 
                  <div className='flex gap-x-10 items-center text-white'>
                    <h1>Availble to Buy</h1>
                    {
                    info.watchproviders.buy.map((w, i)=> (
                    <img 
                    title={w.provider_name}
                    className='w-[5vh] 7-[5vh] rounded-md object-cover'
                    key={i}
                    src={
                     
                        `https://image.tmdb.org/t/p/original/${w.logo_path}`} 
                    alt="" 
                  />
                  ))
                  }
                  </div>
                  
                  }
          </div>
        {/* part 4 Recommendation & Similar Stuff */}   
        <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500' />
        <h1 className='text-3xl font-bold text-white'> 
          Recommendations & Similar stuff
        </h1>   
          <HorizontalCards 
            data={
              info.recommendations.length > 0 
                        ? info.recommendations 
                        : info.similar
                  } />
          <Outlet/>
    </div>
  ) : <Loading/>
}

export default Moviedetails