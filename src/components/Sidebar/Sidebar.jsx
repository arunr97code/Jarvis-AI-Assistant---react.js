import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';


const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const {onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);    
        await onSent(prompt);
    }
  return (
    <aside className='min-h-screen flex-col justify-between sm:bg-[#f0f4f9] py-7 px-3 font-mono hidden sm:flex '>
        {/* top */}
        <section className="">
            <img onClick={() =>setExtended(prev=>!prev)} src={assets.menu_icon} alt="menu-icon" className='img-icon block ms-4 cursor-pointer'/>
            {/* newchat */}
            <button onClick={() =>newChat()} className="inline-flex items-center mt-14 gap-2 py-3 px-4 bg-[#e6eaf1] rounded-full text-md text-gray-500 font-semibold ms-1 sm:ms-0">
                <img src={assets.plus_icon} alt="newchat-icon" className='img-icon'/>
                {extended ? <p className=''>New Chat</p> : null}
            </button>
            {/* recent */}
            {extended ? 
                    <nav className="recent flex flex-col">
                    <h2 className='mt-8 mb-5'>Recent</h2>
                    {previousPrompt.map((item,index) => {
                        return(
                            <div onClick={() => loadPrompt(item)} className="recent-entry p-1">
                        <img src={assets.message_icon} alt="message-icon" className='img-icon'/>
                        <p className=''>{item.slice(0,12)}...</p>
                    </div> 
                        )
                    })}
                    {/* recent-entry */}
                    
                </nav>  : null  
        }

        </section>
        {/* bottom */}
        <section className="flex flex-col">
            {/* bottom-item */}
            <nav className="recent-entry p-4">
                <img src={assets.question_icon} alt="Help icon" className='img-icon'/>
                {extended ? <p className=''>Support</p> : null}
            </nav>
            {/* bottom-item */}
            <nav className="recent-entry p-4">
                <img src={assets.history_icon} alt="Activity icon" className='img-icon'/>
                {extended ? <p className=''>Activity</p> : null}
            </nav>
            {/* bottom-item */}
            <nav className="recent-entry p-4">
                <img src={assets.setting_icon} alt="Settings icon" className='img-icon'/>
                {extended ? <p className=''>Settings</p> : null}
            </nav>
        </section>
    </aside>
  )
}

export default Sidebar