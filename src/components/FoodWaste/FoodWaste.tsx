import React from 'react'
import FoodWasteInfo from './FoodWasteInfo'
import FoodWasteImpact from './FoodWasteImpact'
import DownloadCTA from '../Common/DownloadCTA'

export default function FoodWaste() {
  return (
    <div className='overflow-x-hidden mt-7'>
        <FoodWasteInfo/>
        <FoodWasteImpact/>
        <DownloadCTA/>
    </div>
  )
}
