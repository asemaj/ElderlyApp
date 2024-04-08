import React from 'react'
// import { useState } from 'react';
function Profile() {

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 xl:py-10 xl:px-20 xl:mb-20'>
      <UserProfile title='Insurance' data={{
        provider: 'Blue Cross',
        policyNumber: 'ABC123',
        effectiveDate: '01/01/2022',
        caregiverName: 'John Smith',
        caregiverEmail: 'caregiver@example.com',
        caregiverPhone: '555-555-5555',
      }} />
      <UserProfile title='Billing' data={{
        paymentMethod: 'Credit Card',
        cardNumber: 'XXXX XXXX XXXX 1234',
        expirationDate: '09/23',
      }} />
    </div>  
  )
}

const UserProfile = ({title, data}: {
  title: string;
  data: {[key: string]: string}
}) => {
  return (
    <div className='bg-white p-4 shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>{title}</h2>
      <ul className='list-disc ml-8'>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>{key}: <span className='font-bold'>{value}</span></li>
        ))}
      </ul>
    </div>
  )
}








export default Profile