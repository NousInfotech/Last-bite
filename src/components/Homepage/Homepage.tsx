import React from 'react'
import HeroSection from './HeroSection'
import FoodWasteSolutionsSection from './FoodWasteSolutionsSection'
import DownloadCTA from '../Common/DownloadCTA'
import KeywordMarquee from '../Common/KeywordMarquee'
import { ArrowRight } from 'lucide-react'


export default function Homepage() {
  return (
    <div><HeroSection/>
    <FoodWasteSolutionsSection
    learnMoreButton={
      <button className="flex items-center bg-coral-red text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg">
        Learn More
        <ArrowRight className="ml-2 w-5 h-5" />
      </button>
    }/>
    <DownloadCTA/>
   <KeywordMarquee/>
    </div>
  )
}
