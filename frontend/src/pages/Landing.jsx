import React, { Suspense, useEffect, useRef } from 'react';
import { Footer } from '../components/layout/Footer';
import CompanyDetails from '../components/Landing/CompanyDetails';
import HeroSkeleton from '../skeletons/HeroSkeleton';
import FeaturesSkeleton from '../skeletons/FeaturesSkeleton';
import ServicesSkeleton from '../skeletons/ServicesSkeleton';
import CompanyDetailsSkeleton from '../skeletons/CompanyDetailsSkeleton';
import FooterSkeleton from '../skeletons/FooterSkeleton';
import AnimatedCardList from '../components/layout/AnimatedCardList';
import Article from '../components/layout/Article';
const AvalabityCheck = React.lazy(() => import('../components/layout/AvalabityCheck'));
const Services = React.lazy(() => import('../components/Landing/Services'));
const GallaryImages = React.lazy(() => import('../components/Landing/GallaryImages'));
const Navbar = React.lazy(() => import('../components/layout/Navbar'));
const Hero = React.lazy(() => import('../components/Landing/Hero'));
const Features = React.lazy(() => import('../components/Landing/Features'));
const ElementLoader = React.lazy(() => import('../components/ui/ELementLoader'));

const Landing = () => {
 

  return (
    <div className="bg-gray-50 ">

      {/* <Suspense fallback={<ElementLoader />}>
        <Navbar />
      </Suspense> */}

      {/* <HeroSection /> */}

      <Suspense fallback={<HeroSkeleton />}>
            <Hero />
      </Suspense>


      <Suspense fallback={<FeaturesSkeleton />}>
        <Features />
      </Suspense>

      <Suspense fallback={<ServicesSkeleton />}>
        <Services />
      </Suspense>

      {/* <AnimatedCardList /> */}

      <Suspense fallback={<ServicesSkeleton />}>
        <AvalabityCheck />
      </Suspense>

      <Article />

      <Suspense fallback={<ServicesSkeleton />}>
        <GallaryImages />
      </Suspense>

      <Suspense fallback={<CompanyDetailsSkeleton />}>
        <CompanyDetails />
      </Suspense>

      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Landing;