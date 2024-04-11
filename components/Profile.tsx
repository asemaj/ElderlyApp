
'use client'
import React from 'react'
// import { useState } from 'react';


const Profile = () => {
  const [selectedSection, setSelectedSection] = React.useState<keyof typeof sections>('Insurance');

  const sections = {
    Insurance: {
      title: 'Insurance',
      data: {
        provider: 'Blue Cross',
        policyNumber: 'ABC123',
        effectiveDate: '01/01/2022',
        caregiverName: 'John Smith',
        caregiverEmail: 'caregiver@example.com',
        caregiverPhone: '555-555-5555',
      }
    },
    Billing: {
      title: 'Billing',
      data: {
        paymentMethod: 'Credit Card',
        cardNumber: 'XXXX XXXX XXXX 1234',
        expirationDate: '09/23',
      }
    }
  } as const;

  const handleSectionSelect = (section: keyof typeof sections) => {
    setSelectedSection(section);
  }

  const selectedSectionData = sections[selectedSection].data;

  return (
    <div className='grid grid-cols-3 gap-4 mt-8 xl:py-10 xl:px-20 xl:mb-20'>
      <ul className='bg-gray-100 p-4 w-full sticky top-0 mt-8'>
        {Object.keys(sections).map((section) => (
          <li key={section} onClick={() => handleSectionSelect(section as keyof typeof sections)} className={`py-2 px-4 cursor-pointer ${selectedSection === section ? 'bg-gray-300' : ''}`}>
            {sections[section as keyof typeof sections].title}
          </li>
        ))}
      </ul>
      <div className='bg-white p-4 shadow-md col-span-2' style={{ borderRadius: '0.5rem' }}>
        <h2 className='text-xl font-semibold mb-4' style={{ color: '#3B4460' }}>{sections[selectedSection].title}</h2>
        <ul className='list-disc ml-8' style={{ color: '#6B7280' }}>
          {Object.entries(selectedSectionData).map(([key, value]) => (
            <li key={key} style={{ marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 'bold' }}>{key}: </span>
              <span style={{ color: '#161B22' }}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Profile

