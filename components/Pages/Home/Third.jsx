import React, { useState } from 'react'
import Image from 'next/image'
import { MatchData } from '../../dummyData'
import MatchTitle from '../../utils/MatchTitle'
import MatchComponent from '../../utils/MatchComponent'
import { useEffect } from 'react'

const Third = ({ imageUrl, matchData }) => {
  const [matches, setMatches] = useState()
  const [seniorPlayers, setSeniorPlayers] = useState([])
  const [juniorPlayers, setJuniors] = useState([])




  useEffect(() => {

    const arrObjTwo = new Set(matchData)
    console.log(arrObjTwo)

    arrObjTwo && setMatches(Array.from(arrObjTwo))


   

    

    }, [matchData])

    const seniorDups = new Set()
    const juniorDups = new Set()

    setTimeout(()=>{
        matches?.map(
            (match) =>
              match.fields.mannschaft === 'Senioren 30+' && seniorPlayers.push(match)
          )
    
         
         matches?.map(
             (match) =>
             match.fields.mannschaft != 'Senioren 30+' && juniorPlayers.push(match)
             )
           
          matches?.map(
           (match) =>
             console.log( match.fields.mannschaft )
         )
    },2000)


  

  console.log('unduplicates', matches)

  const bgImg = '/images/Home/score-banner.webp'
  const [slicedNumber, setSlicedNumber] = useState(0)
  console.log('matchData ----------Third.js', matchData)
 



  console.log('senior', seniorPlayers)
  console.log('juniors', juniorPlayers)

  // const gamesGrid = data.fields.body.filter(bodyItem => (bodyItem.sys.contentType.id === 'gamesGrid'))

  console.log([...seniorDups])

  return (
    <>
   {seniorPlayers  && (
  <div className="overflow-hidden  pt-8 lg:pt-16">
  <div
    data-aos="zoom-in"
    data-aos-duration={`600`}
    data-aos-delay={`200`}
    className="h-[80vh] mb-12 relative w-full flex container items-center overflow-hidden justify-center"
  >
    <Image src={imageUrl} className="object-cover" layout="fill" />
  </div>

  <div
    style={{
      backgroundImage: `url(${bgImg})`,
    }}
    className="py-12 text-white !bg-cover w-full !bg-no-repeat"
  >
    <div className="flex container !text-center flex-col space-y-8">
      <h1
        data-aos="fade-down"
        data-aos-duration={`600`}
        data-aos-delay={`300`}
        className="text-2xl md:text-3xl"
      >
       {seniorPlayers[0]?.fields.mannschaft}
      </h1>
      {seniorPlayers?.map(({ fields }, i) => (
        <div key={i} className="flex flex-col space-y-12">
          <MatchTitle
            smallTitle={
              new Date(Date.now()).getFullYear() >
                fields.dateTime.slice(0, 4) &&
              new Date(Date.now()).getMonth() >
                fields.dateTime.slice(5, 6)
                ? 'Vergangene Spiele'
                : 'Nächste Spiele'
            }
          />
          <div className="container flex justify-center">
            <div className="grid grid-cols-1 gap-8 w-full max-w-[60rem]">
              {seniorPlayers?.map((match, i) => (
                  <div
                    key={i}
                    data-aos={i === 0 ? 'fade-right' : 'fade-left'}
                    data-aos-duration={`600`}
                    data-aos-delay={`400`}
                  >
                    <MatchComponent
                                              match={match} homeData={true} i={i} btnColor='bg-themeBlack' />
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
   )  }
    
    </>
  )
}

export default Third



// {/* <div className="overflow-hidden  pt-8 lg:pt-16">
// <div
//   data-aos="zoom-in"
//   data-aos-duration={`600`}
//   data-aos-delay={`200`}
//   className="h-[80vh] mb-12 relative w-full flex container items-center overflow-hidden justify-center"
// >
//   <Image src={imageUrl} className="object-cover" layout="fill" />
// </div>

// <div
//   style={{
//     backgroundImage: `url(${bgImg})`,
//   }}
//   className="py-12 text-white !bg-cover w-full !bg-no-repeat"
// >
//   <div className="flex container !text-center flex-col space-y-8">
//     <h1
//       data-aos="fade-down"
//       data-aos-duration={`600`}
//       data-aos-delay={`300`}
//       className="text-2xl md:text-3xl"
//     >
//       Spielbetrieb 1. Mannschaft
//     </h1>
//     {matchData.map(({ fields }, i) => (
//       <div key={i} className="flex flex-col space-y-12">
//         <MatchTitle
//           smallTitle={
//             new Date(Date.now()).getFullYear() >
//               fields.dateTime.slice(0, 4) &&
//             new Date(Date.now()).getMonth() >
//               fields.dateTime.slice(5, 6)
//               ? 'Vergangene Spiele'
//               : 'Nächste Spiele'
//           }
//         />
//         <div className="container flex justify-center">
//           <div className="grid grid-cols-1 gap-8 w-full max-w-[60rem]">
//             {matchData
//               .slice(Number(0 + slicedNumber), Number(7 + slicedNumber))
//               .map((match, i) => (
//                 <div
//                   key={i}
//                   data-aos={i === 0 ? 'fade-right' : 'fade-left'}
//                   data-aos-duration={`600`}
//                   data-aos-delay={`400`}
//                 >
//                   {/* <MatchComponent
//                                             match={match} homeData={true} i={i} btnColor='bg-themeBlack' /> */}
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
// </div> */}