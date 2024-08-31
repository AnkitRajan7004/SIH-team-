/* eslint-disable no-unused-vars */
import React from 'react'
import ProfileIcon from '../assets/profile-icon.png';
import { motion } from "framer-motion";
import { FadeUp } from '../utility/animation';
import Navbar from '../Components/Navbar/Navbar_farmer';
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router-dom';

const Farmer_Profile = () => {
  return (
    <section className='overflow-x-hidden'>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <motion.div
          variants={FadeUp(0.7)}
          initial="hidden"
          animate="visible" className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex flex-col items-center">
            <img
              className="h-24 w-24 rounded-full shadow-lg"
              src={ProfileIcon}
              alt="User Profile"
            />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800"> ##### {/* Name Saved In database*/} </h2>
            <p className="text-gray-600"> ##### {/* User Id that is saved in database */}    </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Profile Information</h3>
            <div className="mt-4">
              <div className="flex justify-between text-gray-600">
                <span className="font-medium">Username:</span>
                <span>  @@@@@  </span>       {/* will contain the email id of the user stored in database  */}
              </div>
              <div className="flex justify-between text-gray-600 mt-2">
                <span className="font-medium">Location:</span>
                <span> ###  </span>      {/* Location that is being saved in Database */}
              </div>
              <div className="flex justify-between text-gray-600 mt-2">
                <span className="font-medium">Uses Type:</span>
                <span>Farmer</span>
              </div>
              <div className="flex justify-between text-gray-600 mt-2">
                <span className="font-medium">Member Since:</span>
                <span>January 2022</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link to={'/history/farmer'}>
              <button className="w-full py-2 px-4 primary-btn transition duration-300">
                History Details
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section >

  )
}

export default Farmer_Profile