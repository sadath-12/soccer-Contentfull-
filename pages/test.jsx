import { createClient } from 'contentful'
import React from 'react'
import { getContentById, getContentByType } from '../hooks/functions'

export async function getStaticProps() {

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    //pass the identity of model type
    const res = await getContentByType('galleryGrid')
    const resById = await getContentById('6kySxPGfBPZXhPv6MVL4ur')

  
  
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
    console.log(pageData)
    console.log(resById)
  return (
    <div>Test</div>
  )
}

export default Test