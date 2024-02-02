import Image from "next/image";

export default function Home() {
  return (<div>
    <div className="grid grid-rows-12 h-screen w-screen">
      <div className="col-span-3"></div>
      <div className="col-span-6 border-r-2 border-l-2 border-slate-500"></div>
      <div className="col-span-3"></div>
    </div></div>
  );
}
