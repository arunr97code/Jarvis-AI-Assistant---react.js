import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, input, setInput, handleKeyDown} = useContext(Context);

  return (
    
        <main className='min-h-screen  flex-1 font-outfit'>
            
            <section className='flex items-center justify-between text-4xl font-semibold p-5 text-slate-700'>
                <p className=' text-[#393838]'><span className='font-medium'>Jarvis</span> <span className='font-bold'>AI</span></p>
                <img src={assets.user} alt="user-icon" className='w-9 cursor-pointer'/>
            </section>
        
        {/* main-container */}
        <main className='max-w-4xl m-auto'>
             {!showResult
             ? <>
                {/* greet */}
            <section className='my-12 text-6xl font-medium p-5'>
                <p className='gradient-1 mb-4'><span className=''>Hello,</span> <span className='text-[#]'>Chief</span></p>
                <p className='text-[#aebab2]'>How can I assist you today?</p>
            </section>
            {/* cards-section */}
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-5'>
                {/*card-item*/}
                <div className='card-item hover:bg-[#dfe4ea]'>
                    <p className='text-[#585858] text-lg'>Plan an epic road trip with stunning destinations in mind</p>
                    <img src={assets.compass_icon} alt="compass-icon" className='card-img'/>
                </div>
                {/*card-item*/}
                <div className='card-item hover:bg-[#dfe4ea]'>
                    <p className='text-[#585858] text-lg'>Provide an overview of urban planning in a few sentences</p>
                    <img src={assets.bulb_icon} alt="bulb-icon" className='card-img'/>
                </div>
                {/*card-item*/}
                <div className='card-item hover:bg-[#dfe4ea]'>
                    <p className='text-[#585858] text-lg'>Generate some fun and engaging team-building ideas for the retreat</p>
                    <img src={assets.message_icon} alt="message-icon" className='card-img'/>
                </div>
                {/*card-item*/}
                <div className='card-item hover:bg-[#dfe4ea]'>
                    <p className='text-[#585858] text-lg'>Optimize and enhance this code for better readability</p>
                    <img src={assets.code_icon} alt="code-icon" className='card-img'/>
                </div>

            </section>
             
             </>
             : <div className='result py-0 px-5p overflow-y-scroll max-h-500px sm:max-h-70vh'>
                <div className="result-title my-10 mx-0 flex items-center gap-5"> 
                    <img src={assets.user} alt="user-icon" className='w-9' />
                    <p className=''>{recentPrompt}</p>
                </div>
                <div className="result-data flex items-start gap-5">
                    <img src={assets.wave} alt="jarvis-icon" className='w-10'/>
                    {loading 
                    ? <div className='loader w-full flex flex-col gap-3'>
                        <hr className='load-anim'/>
                        <hr className='load-anim'/>
                        <hr className='load-anim'/>
                        </div>
                        :   <p dangerouslySetInnerHTML={{__html:resultData}} className='text-lg font-light'></p>
                    }
                   
                </div>

             </div> 
             }
            
            {/* Chat Input */}
            <section className={` main-bottom ${recentPrompt ? 'fixed bottom-0' : ' relative -bottom-2/3'} w-full max-w-4xl m-auto px-3 sm:bottom-0 sm:absolute`}>
                <div className='search-box flex items-center justify-between gap-5 bg-[#f0f4f9] py-1 px-3 rounded-full sm:py-2 sm:px-5'>
                    <input onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} value={input} type="text" placeholder='Enter a prompt here'    className='flex-none w-48 bg-transparent border-none outline-none p-2 text-lg sm:flex-1 sm:w-0'/>
                    <div className='flex items-center gap-3 sm:gap-4'>
                        <img src={assets.gallery_icon} alt="" className='w-6 cursor-pointer sm:w-7'/>
                        <img src={assets.mic_icon} alt="" className='w-6 cursor-pointer sm:w-7'/>
                        {input 
                        ? <img onClick={() => onSent()} src={assets.send_icon} alt="" className='w-6 cursor-pointer sm:w-7'/> : null
                        }
                        
                    </div>
                </div>
                <p className='bottom-info text-sm my-4 mx-auto text-center font-light'>
                Jarvis AI provides guidance, but we recommend verifying important information. Rest assured, your privacy and data remain secure
                </p>
            </section>
            </main>
    </main>
  )
}

export default Main