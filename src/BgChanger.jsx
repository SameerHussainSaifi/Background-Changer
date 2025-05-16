import {useState} from "react";
export default function BgChanger(){
    let [color,setColor]=useState("olive");
 
    return (
        <div>
            <div className="w-full h-screen  flex justify-center " style={{background:color}}>
<div className="fixed bottom-12 flex space-x-[30px] bg-slate-200 rounded-3xl  py-1">
    <div className="px-3 py-2">
        <button onClick={()=>setColor("red")} className="bg-red-700 rounded-3xl px-6 py-1 flex items-center text-white cursor-pointer">Red</button>
   </div>
   <div className="px-3 py-2">
        <button onClick={()=>setColor("green")} className="bg-green-700 rounded-3xl px-4 py-1 flex items-center text-white cursor-pointer">Green</button>
   </div>

   <div className="px-3 py-2">
        <button onClick={()=>setColor("blue")} className="bg-blue-700 rounded-3xl px-6 py-1 flex items-center text-white cursor-pointer">Blue</button>
   </div>

   <div className="px-3 py-2">
        <button onClick={()=>setColor("black")} className="bg-black rounded-3xl px-5 py-1 flex items-center text-white cursor-pointer">Black</button>
   </div>

<div className="px-3 py-2">
        <button onClick={()=>setColor("white")} className="bg-white rounded-3xl px-4 py-1 flex items-center text-black border-1 cursor-pointer ">White</button>
   </div>

   <div className="px-3 py-2">
        <button onClick={()=>setColor("orange")} className="bg-orange-500 rounded-3xl px-3 py-1 flex items-center text-white cursor-pointer">Orange</button>
   </div>

   <div className="px-3 py-2">
        <button onClick={()=>setColor("purple")} className="bg-purple-700 rounded-3xl px-4 py-1 flex items-center text-white cursor-pointer">Purple</button>
   </div>

   <div className="px-3 py-2">
        <button onClick={()=>setColor("pink")} className="bg-pink-400 rounded-3xl px-5 py-1 flex items-center text-white cursor-pointer">Pink</button>
   </div>
   
</div>
            </div>
        </div>
    )
}