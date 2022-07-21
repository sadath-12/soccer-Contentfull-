import React from 'react'
import MatchButton from '../Buttons/MatchButton'

import { compareAsc, format } from 'date-fns'
import { convertToManualDate } from '../../hooks/functions'

const MatchComponent = ({ match, btnColor,i ,homeData}) => {
    //   const { dateTime, heimMannschaft, ort,gastMannschaft,goalsHeim,goalsGast} = match.fields 
      const { dateTime, heimMannschaft, ort,gastMannschaft,goalsHeim,goalsGast} = match.fields 
    //   const { dateTime, heimMannschaft, ort,gastMannschaft,goalsHeim,goalsGast} =!homeData ? match.fields : match.fields[i] 
    console.log(heimMannschaft)

console.log('match',match)
   


    return (
        <>

            <div className="hidden md:flex space-y-3 items-center gap-6 max-w-[50rem] lg:w-full mx-auto flex-col text-themeBlack  bg-white">
                <p
                    data-aos="fade-down"
                    data-aos-duration={`600`}
                    data-aos-delay={`400`}
                    className='text-lg pt-6 text-center md:text-xl w-full  uppercase'>{`${ort}  ${convertToManualDate(dateTime)}`}</p>
                <div className="grid px-6  grid-cols-3 max-w-[50rem] lg:w-full mx-auto">
                    <div className='flex justify-center items-center space-x-6 w-full'>
                        <p
                            data-aos="fade-right"
                            data-aos-duration={`600`}
                            data-aos-delay={`600`}
                            className='text-lg md:text-xl font-semibold'>{heimMannschaft}</p>
                        <img
                            data-aos="fade-right"
                            data-aos-duration={`600`}
                            data-aos-delay={`500`}
                            src={ '/images/common/logo.png'}
                            className='max-w-[6rem] min-w-[4rem]'
                        />

                    </div>
                    <div className="flex items-center mx-auto w-fit px-8 space-x-4 justify-center border-2 border-themeBlue rounded-sm py-3 relative ">
                        <p className='text-themeBlue text-2xl md:text-4xl font-bold'>{goalsHeim}</p>
                        <p className='text-themeBlue text-2xl md:text-4xl font-bold'>-</p>
                        <p className='text-themeBlue text-2xl md:text-4xl font-bold'>{goalsGast}</p>
                        <div style={{ left: 'calc(50% - 2.5rem)' }} className="absolute text-center w-[3rem] h-[1.5rem] top-[90%] bg-themeBlue font-bold  text-white">FT</div>
                    </div>
                    <div className='flex justify-center items-center space-x-6 w-full'>

                        <img
                            data-aos="fade-left"
                            data-aos-duration={`600`}
                            data-aos-delay={`500`}
                            src={ '/images/common/logo.png'}
                            className='max-w-[6rem] min-w-[4rem]'
                        /> 
                        <p
                            data-aos="fade-left"
                            data-aos-duration={`600`}
                            data-aos-delay={`600`}
                            className='text-lg md:text-xl font-semibold'>{gastMannschaft}</p>
                    </div>
                </div>
                <MatchButton btnColor={btnColor} btnName='Match Centre' />

            </div>
            <div className='flex md:hidden max-w-[90%] lg:w-full mx-auto flex-col text-themeBlack space-y-6 bg-white'>
                <div className="pt-6 px-6 flex flex-col items-center">
                    <p
                        data-aos="fade-down"
                        data-aos-duration={`600`}
                        data-aos-delay={`400`}
                        className='text-sm md:text-base uppercase'>{`${ort}  ${convertToManualDate(dateTime)}`}</p>
                    <div className="grid pt-6 gap-8 items-center grid-cols-7">
                        <div className="col-span-2 flex flex-col space-y-5">
                            <img
                                data-aos="fade-right"
                                data-aos-duration={`600`}
                                data-aos-delay={`500`}
                                src={ '/images/common/logo.png'} />
                            <p
                                data-aos="fade-right"
                                data-aos-duration={`600`}
                                data-aos-delay={`600`}
                                className='text-xs md:text-sm'>{heimMannschaft}</p>
                        </div>
                        <div className="col-span-3 flex space-x-4 justify-center border-2 rounded-sm p-2">
                            <p className='text-themeBlue text-xl md:text-2xl font-semibold'>{goalsHeim}</p>
                            <p className='text-themeBlue text-xl md:text-2xl font-semibold'>-</p>
                            <p className='text-themeBlue text-xl md:text-2xl font-semibold'>{goalsGast}</p>
                        </div>
                        <div className="col-span-2 flex flex-col space-y-5">
                            <img
                                data-aos="fade-left"
                                data-aos-duration={`600`}
                                data-aos-delay={`500`}
                                src={ '/images/common/logo.png'} />
                            <p
                                data-aos="fade-left"
                                data-aos-duration={`600`}
                                data-aos-delay={`600`}
                                className='text-xs md:text-sm'>{gastMannschaft}</p>
                        </div>
                    </div>
                </div>
                <MatchButton btnColor={btnColor} btnName='Match Centre' />
            </div>
        </>
    )
}

export default MatchComponent