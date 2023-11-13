"use client"
import '@/components/LeftPanel/PlaylistBox.css';
import { useState } from "react";
import CategoryButtons from "./CategoryButtons";
import { FaPlus } from 'react-icons/fa';
const PlaylistBox = ({token_data}) => {
    const [activeCategory, setActiveCategory] = useState('playlist');
    let token_info = token_data || '';
    const handleButtonClick = (category) => {
        setActiveCategory(category);
        // Add logic to handle category change
    };
    return (
        <div className="rounded-md  h-[70vh] bg-[#1C1C21] m-1 ">
            {!token_data ? (<div className='flex w-full h-full justify-center items-center'><div className='text-2xl text-white justify-center items-center border-white border-2 p-20 rounded-md'>Log In First</div></div>):(<>
                <div className="w-full flex justify-between p-5 text-slate-200 font-medium text-md items-center">
                <span>Your Library</span>
                <span><FaPlus/></span>
            </div>
            <div className="flex space-x-8 px-5 overflow-scroll">
                <CategoryButtons
                    label="Playlist"
                    active={activeCategory === 'playlist'}
                    onClick={() => handleButtonClick('playlist')}
                />
                <CategoryButtons
                    label="Podcasts"
                    active={activeCategory === 'podcasts'}
                    onClick={() => handleButtonClick('podcasts')}
                />
                <CategoryButtons
                    label="Albums"
                    active={activeCategory === 'albums'}
                    onClick={() => handleButtonClick('albums')}
                />
                <CategoryButtons
                    label="Artists"
                    active={activeCategory === 'artists'}
                    onClick={() => handleButtonClick('artists')}
                />
            </div>
            </>

            )}
        </div>
    )
};
export default PlaylistBox;