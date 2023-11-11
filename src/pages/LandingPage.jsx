import HomeBox from "@/components/LeftPanel/HomeBox";
import PlaylistBox from "@/components/LeftPanel/PlaylistBox";
import ContentBox from "@/components/RightPanel/ContentBox";
export default function LandingPage() {
  return (
    <div className="flex max-w-full justify-items-start space-x-1 mt-1 ml-1">
      <div className="flex flex-col w-[23.5%] h-[90vh] space-y-1 ">
      
        <HomeBox/>
        <PlaylistBox/>
      </div>
      <ContentBox/>
    </div>
  )
}
