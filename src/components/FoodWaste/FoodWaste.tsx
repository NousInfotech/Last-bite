import React from 'react'
import FoodWasteInfo from './FoodWasteInfo'
import FoodWasteImpact from './FoodWasteImpact'
import DownloadCTA from '../Common/DownloadCTA'

export default function FoodWaste() {
  return (
    <div className='overflow-x-hidden'>
        <FoodWasteInfo/>
        <FoodWasteImpact/>
        <DownloadCTA/>
    </div>
  )
}
