import { FaSearch,FaHome, FaSpotify } from "react-icons/fa";
const HomeBox = () => {
    return (
        <div className="grid rounded-md justify-start h-[20vh] bg-[#1C1C21] m-1 items-center text-justify">
            <div className="grid mx-5 text-white font-normal space-y-5">
                <button className="flex items-center text-lg gap-2"><FaSpotify style={{height:'50px',width:'2rem'}}/>Spotify</button>
                <button className="flex items-center text-lg gap-3 "><FaHome style={{backgroundColor:'Black',color:'White'}}/>Home</button>
                <button className="flex items-center text-lg gap-3 "><FaSearch style={{backgroundColor:'Black',color:'White'}}/>Search</button>
            </div>
        </div>
    )
};
export default HomeBox;