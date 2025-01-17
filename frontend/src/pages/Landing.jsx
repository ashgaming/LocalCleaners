import React, { Suspense } from 'react';
import { Footer } from '../components/layout/Footer';
import CompanyDetails from '../components/Landing/CompanyDetails';
import HeroSkeleton from '../skeletons/HeroSkeleton';
import FeaturesSkeleton from '../skeletons/FeaturesSkeleton';
import ServicesSkeleton from '../skeletons/ServicesSkeleton';
import CompanyDetailsSkeleton from '../skeletons/CompanyDetailsSkeleton';
import FooterSkeleton from '../skeletons/FooterSkeleton';
const Services = React.lazy(() => import('../components/Landing/Services'));
const GallaryImages = React.lazy(() => import('../components/Landing/GallaryImages'));
const Navbar = React.lazy(() => import('../components/layout/Navbar'));
const Hero = React.lazy(() => import('../components/Landing/Hero'));
const Features = React.lazy(() => import('../components/Landing/Features'));
const ElementLoader = React.lazy(() => import('../components/ui/ELementLoader'));



const Landing = () => {
 
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<ElementLoader />}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<HeroSkeleton />}>
            <Hero />
      </Suspense>
      <Suspense fallback={<FeaturesSkeleton />}>
        <Features />
      </Suspense>

      <Suspense fallback={<ServicesSkeleton />}>
        <Services />
      </Suspense>

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