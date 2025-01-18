import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeroSkeleton from '../../skeletons/HeroSkeleton';
import TypeWriter from '../../helper/Animation';

export default function Hero() {
  const { user, loading } = useSelector(state => state.userData)

  if (loading) {
    return <HeroSkeleton />
  }


  return (
    <>
      {
        user?.employee ?
          (
            <div className="pt-16 md:pt-20 bg-gradient-to-r from-blue-500 to-blue-600" >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="text-center">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
                    Professional Cleaning Services
                  </h1>
                  <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
                    <TypeWriter
                      texts={[
                        "Experience the difference of a truly clean home",
                        "खऱ्या स्वच्छतेचा अनुभव घ्या",
                        "एक सचमुच साफ घर का अंतर महसूस करें ",
                        "वास्तविकं शुचिगृहस्य भेदं अनुभवन्तु"
                      ]}
                      typingSpeed={100}
                      deletingSpeed={50}
                      pauseTime={3000}
                    />
                  </p>
                  <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
                    Manage your Cleaning requests
                  </p>
                  <Link
                    to="/dashboard"
                    className="inline-block w-full sm:w-auto bg-white text-blue-600 px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                  >
                    Manage
                  </Link>
                </div>
              </div>
            </div>
          )
          :
          (
            <div className="pt-16 md:pt-20 bg-gradient-to-r from-blue-500 to-blue-600">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="text-center">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
                    Professional Cleaning Services
                  </h1>
                  <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
                    <TypeWriter
                      texts={[
                        "Experience the difference of a truly clean home",
                        "खऱ्या स्वच्छतेचा अनुभव घ्या",
                        "एक सचमुच साफ घर का अंतर महसूस करें ",
                        "वास्तविकं शुचिगृहस्य भेदं अनुभवन्तु"
                      ]}
                      typingSpeed={100}
                      deletingSpeed={50}
                      pauseTime={3000}
                    />
                  </p>
                  <Link
                    to="/booking"
                    className="inline-block w-full sm:w-auto bg-white text-blue-600 px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          )
      }



    </>
  );
}