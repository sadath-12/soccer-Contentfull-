import { createClient } from 'contentful'
import React from 'react'
import { getContentById } from '../hooks/functions'

export async function getStaticProps() {

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    //pass the identity of model type
    const res = await getContentById('2haOGbw0nRaE73GwLBaUui')

  
  
    return {
      props: {
       pageData:res
      },
      // nextjs wil query the data in this time in seconds again and fetch the changes
      revalidate: 1,
    }
  
  }

const Test = ({pageData}) => {
    console.log(pageData)
  return (
    <div>Test</div>
  )
}

export default Test