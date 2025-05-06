import React from 'react'
import PartnerComponent from './PartnerComponent'
import PartnerBenefits from './PartnerBenefits'
import PartnerTypes from './PartnerTypes'
import ContactForm from './ContactForm'

export default function PartnerPage() {
  return (
    <div className='px-3'>
    <PartnerComponent/>
    <PartnerBenefits/>
    <PartnerTypes/>
    <ContactForm/>
    </div>
  )
}
