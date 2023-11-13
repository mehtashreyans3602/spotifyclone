'use client'
import HomeBox from "@/components/LeftPanel/HomeBox";
import PlaylistBox from "@/components/LeftPanel/PlaylistBox";
import ContentBox from "@/components/RightPanel/ContentBox";
import { useState } from "react";
export default function LandingPage() {
  const [token_data,setToken_Data] = useState(null);
  const handletokendata = (data) =>{
    setToken_Data(data);
    console.log(data)
  }
  return (
    <div className="flex max-w-full justify-items-start space-x-1 mt-1 ml-1">
      
      <div className="flex flex-col w-[23.5%] h-[90vh] space-y-1 ">
        <HomeBox/>
        <PlaylistBox token_data = {token_data}/>
      </div>
      <ContentBox thetokendata ={ handletokendata } />
    </div>
  )
}
