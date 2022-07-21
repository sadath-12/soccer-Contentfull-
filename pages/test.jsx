import { createClient } from 'contentful'
import React from 'react'
import { getContentById, getContentByType } from '../hooks/functions'

export async function getStaticProps() {

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    //pass the identity of model type
    const res = await getContentByType('games')
    const resById =await getContentByType('gamesGrid')



  
  
    return {
      props: {
       pageData:res,
       resById
   
      },
      // nextjs wil query the data in this time in seconds again and fetch the changes
      revalidate: 1,
    }
  
  }

const Test = ({pageData,resById}) => {


  let newGames=[]

for(let i =0 ; i<resById.length;i++){
 
}

    console.log( 'games', pageData)
    console.log( 'gamesgrid', resById)

  return (
    <div>Test</div>
  )
}

export default Test