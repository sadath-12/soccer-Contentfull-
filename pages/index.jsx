import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Pages/Home/Hero'
import Sponsors from '../components/Pages/Home/Sponsors'
import Third from '../components/Pages/Home/Third'
import Events from '../components/Pages/Home/Events'
import AOS from 'aos'
import { HomeMatchData } from '../components/dummyData'
import React from 'react'
import "aos/dist/aos.css";
import { createClient } from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  //pass the identity of model type
  const res = await client.getEntries({ content_type: 'settings' })
  const sliderData = await client.getEntry({ content_type: 'slider' })
  const gameData = await client.getEntries({ content_type: "games" });


  return {
    props: {
      settings: res.items,
      sliderData: sliderData,
      gameData:gameData.items
    },
    // nextjs wil query the data in this time in seconds again and fetch the changes
    revalidate: 1,
  }

}

//pass the identity of model type

const Index = ({ settings, gameData, sliderData }) => {

console.log('gamesD',gameData)

  React.useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Layout settings={settings}>
        <Head>
          <title>Home | FC Ataspor</title>
        </Head>
        <section className='absolute inset-0 w-full h-screen '>
          <Hero sliderContent={sliderData} />
        </section>
        {/* <div> */}
        <div className="mt-[100vh] ">
          <Sponsors data={sliderData} />
          {/* //sliderData contains all the data of this page  */}
           {/* <Third   matchData={gameData} imageUrl='/images/Home/third.png' /> */}
          {/* <Third   matchData={gameData} imageUrl='/images/Home/fourth.png' />  */}
          <Events data={sliderData} imageUrl='/images/Home/events.png' />
        </div>
      </Layout>
    </>
  )
}

export default Index
