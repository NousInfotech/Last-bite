import React from 'react'
import FoodWasteSolutionsSection from '../Homepage/FoodWasteSolutionsSection'
import AboutUsSection from './AboutUsSection'
import DownloadCTA from '../Common/DownloadCTA'
import KeywordMarquee from '../Common/KeywordMarquee'

export default function AboutPage() {
  return (
    <div className='mt-16'>
          <FoodWasteSolutionsSection/>
          <AboutUsSection/>
          <DownloadCTA/>
          <KeywordMarquee/>
    </div>
  )
}
