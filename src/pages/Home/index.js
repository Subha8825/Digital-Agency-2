import React from 'react'
import Layout from '../../components/Layout'
import Intro from './intro'
import MarketingStrategies from './MarketingStrategies'
import WhyMarketing from './WhyMarketing'


export default function Home() {
  return (
    <Layout>
      <div className='px-32'>
      <Intro />
      <MarketingStrategies />
      <WhyMarketing/>
      </div>
     
      
      
    
    </Layout>
  )
}

