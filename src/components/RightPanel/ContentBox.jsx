"use client"
import { useState, useEffect } from 'react';
import AlbumBox from '@/components/Albums/AlbumBox';
import '@/components/RightPanel/ContentBox.css';
import SongBox from '@/components/Songs/SongBox';
import { FaArrowLeft, FaArrowRight, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const ContentBox = ({ thetokendata }) => {
    const CLIENT_ID = '1e63e30185a543a5b1f6636693be06bc';
    const REDIRECT_URI = 'https://spotifyclone-shreyans.vercel.app/';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token';
    const [token, SetToken] = useState("");

    useEffect(() => {
        const hash = window.location.hash
        let newtoken = window.localStorage.getItem("token")
        if (!newtoken && hash) {
            newtoken = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
            console.log(hash)
            console.log(newtoken)
            window.location.hash = "";
            window.localStorage.setItem("token", newtoken)
            console.table(newtoken);
            SetToken(newtoken);
            thetokendata(newtoken)
        }

    });
    const handlelogout = () => {
        SetToken("");
        window.localStorage.removeItem("token");
        console.log("logout");
        console.log(token)
        thetokendata("")
    }
    return (
        <div className="w-[76%] h-[90vh] rounded-md   bg-[#1C1C21] m-1 overflow-y-scroll text-md font-medium">
            <div style={{ width: '75%' }} className="fixed z-10 bg-[#0E0D09] bg-opacity-80 backdrop-blur-md flex justify-between px-5 py-2">
                <div className="flex space-x-5 text-white">
                    <button><FaArrowLeft /> </button>
                    <button><FaArrowRight /></button>
                </div>
                <div className="flex space-x-5 text-md font-medium">
                    {!token ?
                        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}><button className="py-3 px-6 bg-white rounded-full">Log in</button></a>
                        :
                        <button className="py-3 px-6 bg-white rounded-full" onClick={handlelogout}>Log Out</button>}
                </div>
            </div>

            {!token ? (<></>)
                : (
                    <>
                        <div className="mt-20 rounded-md spotifygrad text-white p-3 m-5">
                            <div className="container mx-auto flex items-center justify-between">
                                <div className='flex space-x-5'>
                                    <img src="ashes.jpeg" alt="Album Cover" className=" w-44  object-cover mb-4 rounded-md" />
                                    <div className='grid'>
                                        <h2 className="text-2xl font-semibold">Playlist of the Week</h2>
                                        <p className="text-sm">Discover the hottest tracks curated just for you!</p>
                                        <div className='space-x-5'>
                                            <button className="bg-[#1DB954] text-black text-lg font-medium px-6 py-2 rounded-full">Play</button>
                                            <button className="bg-black text-white border-white border-[1px] px-5 py-2 rounded-full">Follow</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='space-y-5 mx-5'>
                            <div className='px-3 text-white font-semibold text-xl'>Spotify Playlists</div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                <AlbumBox />
                                <AlbumBox />
                                <AlbumBox />
                                <AlbumBox />
                                <AlbumBox />
                                <AlbumBox />
                                <AlbumBox />
                                <AlbumBox />
                            </div>

                        </div>
                        <div className="space-y-2">
                            <SongBox />
                            <SongBox />
                            <SongBox />
                            <SongBox />
                            <SongBox />
                            <SongBox />
                        </div>
                        <footer className="bg-black text-white p-8 flex flex-col gap-5">
                            <div className="container mx-auto flex justify-between border-b-2 border-b-white">

                                <div className="flex flex-row space-x-4">
                                    <a href="#" className="text-gray-300 hover:text-white">Company</a>
                                    <a href="#" className="text-gray-300 hover:text-white">Community</a>
                                    <a href="#" className="text-gray-300 hover:text-white">Useful Links</a>
                                </div>


                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-300 hover:text-white"><FaFacebook /></a>
                                    <a href="#" className="text-gray-300 hover:text-white"><FaTwitter /></a>
                                    <a href="#" className="text-gray-300 hover:text-white"><FaInstagram /></a>

                                </div>
                            </div>
                            <div className='flex w-full justify-end '>Made By Shreyans Mehta</div>
                        </footer>
                    </>)}
        </div>)
}
export default ContentBox;