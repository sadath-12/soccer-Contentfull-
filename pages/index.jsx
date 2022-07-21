import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Pages/Home/Hero'
import Sponsors from '../components/Pages/Home/Sponsors'
import Third from '../components/Pages/Home/Third'
import Events from '../components/Pages/Home/Events'
import AOS from 'aos'
import { HomeMatchData } from '../components/dummyData'
import React from 'react'
import 'aos/dist/aos.css'
import { createClient } from 'contentful'
import { getContentByType } from '../hooks/functions'
import { useEffect } from 'react'
import { useState } from 'react'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  //pass the identity of model type
  const res = await client.getEntries({ content_type: 'settings' })
  const sliderData = await client.getEntry({ content_type: 'slider' })
  const gameData = await client.getEntries({ content_type: 'games' })
  const pages = await getContentByType('page')

  return {
    props: {
      settings: res.items,
      sliderData: sliderData,
      gameData: gameData.items,
      pages: pages.items,
    },
    // nextjs wil query the data in this time in seconds again and fetch the changes
    revalidate: 1,
  }
}

//pass the identity of model type

const Index = ({ settings, gameData, sliderData, pages }) => {
  // console.log('gamesD', gameData)
  // console.log('pagesdata', pages)

  let newGames = []
  let gamesGrid = []
  const [filteredGames, setGames] = useState()
  let newSetofArray = new Set()

  useEffect(() => {
    let homepageData = pages.filter((item) => item.fields.slug === 'home')
    homepageData[0].fields?.body.map(
      (page) =>
        page.sys.contentType.sys.id === 'gamesGrid' && gamesGrid.push(page)
    )
    // console.log('newgmesGrid', gamesGrid)
    // console.log('homePageData', homepageData)
    //  gamesGrid && gameData && gameData?.map((game,i)=>game.fields.mannschaft===gamesGrid[i]?.fields.mannschaft && newGames.push(game) )

    for (let i = 0; i < gameData.length; i++) {
      for (let j = 0; j < gamesGrid.length; j++) {
        // console.log('abc', gameData[i]?.fields.mannschaft)
        // console.log('xyz', gamesGrid[j]?.fields.mannschaft)
        if (
          gameData[i]?.fields.mannschaft === gamesGrid[j]?.fields.mannschaft
        ) {
          newGames.push(gameData[i])
        } else {
          continue
        }
      }
    }
    newGames && newSetofArray.add(newGames)


  }, [settings, gameData, sliderData, pages,newGames])

  console.log(newGames)
  console.log('newGamesData', newSetofArray)

  React.useEffect(() => {
    AOS.init()
  }, [])



 

  return (
    <>
      <Layout settings={settings}>
        <Head>
          <title>Home | FC Ataspor</title>
        </Head>
        <section className="absolute inset-0 w-full h-screen ">
          <Hero sliderContent={sliderData} />
        </section>
        {/* <div> */}
        <div className="mt-[100vh] ">
          <Sponsors data={sliderData} />
          {/* //sliderData contains all the data of this page  */}
          <Third matchData={newGames} imageUrl="/images/Home/third.png" />
          {/* <Third matchData={newGames} imageUrl="/images/Home/fourth.png" /> */}
          <Events data={sliderData} imageUrl="/images/Home/events.png" />
        </div>
      </Layout>
    </>
  )
}

export default Index
