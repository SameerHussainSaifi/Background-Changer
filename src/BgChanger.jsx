import {useState} from "react";
export default function BgChanger(){
    let [color,setColor]=useState(null);
 
    return (
        <div>
            <div className="w-full h-screen  flex justify-center " style={{background:color}}>
<div className="fixed bottom-12 flex space-x-[30px] bg-slate-200 rounded-lg  py-1">
    <div className="px-3 py-2">
        <button onclick={colorApply} className="bg-red-700 rounded-3xl px-5 py-1 flex items-center text-white">Red</button>
   </div>
   <div className="px-3 py-2">
        <button className="bg-green-700 rounded-3xl px-3 py-1 flex items-center text-white">Green</button>
   </div>

   <div className="px-3 py-2">
        <button className="bg-blue-700 rounded-3xl px-4 py-1 flex items-center text-white">Blue</button>
   </div>

   <div className="px-3 py-2">
        <button className="bg-black rounded-3xl px-3 py-1 flex items-center text-white">Violet</button>
   </div>

<div className="px-3 py-2">
        <button className="bg-white rounded-3xl px-3 py-1 flex items-center text-black border-2">White</button>
   </div>

   <div className="px-3 py-2">
        <button className="bg-orange-500 rounded-3xl px-3 py-1 flex items-center text-white">Orange</button>
   </div>

   <div className="px-3 py-2">
        <button className="bg-purple-700 rounded-3xl px-3 py-1 flex items-center text-white">Purple</button>
   </div>

   <div className="px-3 py-2">
        <button className="bg-pink-400 rounded-3xl px-3 py-1 flex items-center text-white">Green</button>
   </div>
   
</div>
            </div>
        </div>
    )
}