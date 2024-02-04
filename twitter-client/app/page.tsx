import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import Image from "next/image";
import { BsTwitter, BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import { BiEnvelope, BiHash, BiHomeCircle } from "react-icons/bi";
import { Inter } from "react-icons/bs"

interface TwitterSidebarButton {
  title: string
  icon: React.ReactNode;
}

const SideBarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />
  },
  {
    title: 'Explore',
    icon: <BiHash />
  },
  {
    title: 'Notifications',
    icon: <BiHash />
  },
  {
    title: 'Messages',
    icon: <BsBell />
  },
  {
    title: 'Messages',
    icon: <BsEnvelope />
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />
  }
]

export default function Home() {
  return (<div>
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 pl-16 pt-8">
        <div className="text-2xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
          <BsTwitter />
          <div className="mt-4 text-2x font-semibold">
            <div>
              <ul>
                {SideBarMenuItems.map(item => <li className="flex justify-start items-center gap-4  rounded-full px-5 py-2 w-fit cursor-pointer hover:bg-gray-800" key={item.title}><span>{item.icon}</span> {item.title}</li>)}
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-r-[1px] border-l-[1px] border-gray-500">2</div>
        <div className="col-span-3">3</div>
      </div>
    </div>
    );
}
