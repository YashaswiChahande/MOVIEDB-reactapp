import React from 'react'
import { Card, CardContent } from "../components/ui/card";
import { FaFilm, FaStar, FaUsers, FaRegLightbulb, FaSearch } from "react-icons/fa";
import { RiTvFill } from "react-icons/ri";
import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2}}
          className="max-w-5xl mx-auto p-8"
        >
          <Card className="shadow-2xl rounded-3xl p-10 bg-white border border-gray-300">
            <CardContent>
              <div className="flex items-center mb-8">
                <RiTvFill className="text-5xl text-[#6556CD] mr-5" />
                <h1 className="text-5xl font-extrabold text-white">About MovieDB</h1>
              </div>
              <p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                Welcome to <strong>MovieDB</strong>, your ultimate destination for exploring the world of cinema. Whether you are searching for timeless classics, the latest blockbusters, or hidden gems, our extensive database provides detailed insights into thousands of movies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center bg-[#6556CD] p-6 rounded-lg shadow-lg">
                  <FaStar className="text-yellow-500 text-4xl mr-5" />
                  <p className="text-white text-lg">Discover ratings, reviews, and audience reactions to help you choose your next favorite movie.</p>
                </div>
                <div className="flex items-center bg-[#6556CD] p-6 rounded-lg shadow-lg">
                  <FaUsers className="text-cyan-500 text-4xl mr-5" />
                  <p className="text-white text-lg">Explore detailed information about cast, crew, genres, and behind-the-scenes insights.</p>
                </div>
                <div className="flex items-center bg-[#6556CD] p-6 rounded-lg shadow-lg">
                  <FaRegLightbulb className="text-green-500 text-4xl mr-5" />
                  <p className="text-white text-lg">Get personalized recommendations based on your movie preferences and watch history.</p>
                </div>
                <div className="flex items-center bg-[#6556CD] p-6 rounded-lg shadow-lg">
                  <FaSearch className="text-pink-600 text-4xl mr-5" />
                  <p className="text-white text-lg">Use our advanced search to find movies by genre, actor, director, or release year.</p>
                </div>
              </div>
              <p className="text-lg text-zinc-500 mt-8">
                Our mission is to create a user-friendly and immersive platform for movie lovers. Stay informed, rate your favorites, and embark on a cinematic journey with <strong className='text-[#6556CD]'>MovieDB</strong>.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      );
}

export default About