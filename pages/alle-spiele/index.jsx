import React, { useEffect, useState } from 'react'
import { GamesMatchData as matchData } from '../../components/dummyData'
import Layout from '../../components/Layout'
import AOS from 'aos'
import "aos/dist/aos.css";
import Button from '../../components/utils/Button'
import MatchComponent from '../../components/utils/MatchComponent'
import MatchTitle from '../../components/utils/MatchTitle'
import { createClient } from 'contentful';
import Head from 'next/head';

const Games = ({ settings }) => {

  React.useEffect(() => {
    AOS.init();
  }, [])
  const [slicedNumber, setSlicedNumber] = useState(0)
  useEffect(() => {
  }, [slicedNumber])
  return (
    <Layout settings={settings}>
      <Head>
        <title>Alle Spiele | FC Ataspor</title>
      </Head>
      <div
        className='bg-themeBlack pt-24 md:pt-32 overflow-hidden py-16 '>
        <div className='flex flex-col justify-center space-y-10'>
          {matchData.map(({ smallTitle, matches }, i) => (
            <div className='flex flex-col space-y-12'>
              <MatchTitle smallTitle={smallTitle} />
              <div className="container flex justify-center">
                <div className="grid grid-cols-1 gap-8 w-full max-w-[60rem]">
                  {
                    matches.length > 8 ?
                      <>
                        {matches.slice(0, Number(7 + slicedNumber)).map((match, i) => (
                          <div
                            data-aos={i === 0 ? "fade-right" : 'fade-left'}
                            data-aos-duration={`600`}
                            data-aos-delay={`400`}
                          >
                            <MatchComponent
                              key={i} match={match} btnColor='bg-themeBlue' />
                          </div>
                        ))}
                      </>
                      :
                      <>
                        {matches.map((match, i) => (
                          <div
                            data-aos={i === 0 ? "fade-right" : 'fade-left'}
                            data-aos-duration={`600`}
                            data-aos-delay={`400`}
                          >
                            <MatchComponent
                              key={i} match={match} btnColor='bg-themeBlue' />
                          </div>
                        ))}
                      </>
                  }


                </div>
              </div>
            </div>
          ))}
          {matchData[1].matches.length >= slicedNumber ?
            <div onClick={() => setSlicedNumber(slicedNumber + 7)} className='w-fit mt-12 mx-auto'>
              <Button text='Mehr Laden' />
            </div>
            :
            <p> No more matches to show</p>
          }
        </div>
      </div>


    </Layout>
  )
}

export default Games



export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  //pass the identity of model type
  const res = await client.getEntries({ content_type: 'settings' })

  return {
    props: {
      settings: res.items
    },
    // nextjs wil query the data in this time in seconds again and fetch the changes
    revalidate: 1
  }

}