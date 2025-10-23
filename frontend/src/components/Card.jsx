import { useState } from 'react'
import {Heart} from 'lucide-react'
export default function Card(){
    const [liked,setLiked]= useState(false)
    const handleLike= () => {
        setLiked(!liked)
    }
    
    return(
        <div className=" flex flex-row flex-wrap justify-center gap-3">
            <div className="w-42 mt-5 mb-3 rounded-md bg-white lg:w-60">
                <div className="image m-3 relative">
                    <img src="im.jpg" alt="" className="rounded-lg"/>
                    <div className="absolute top-2 right-2" onClick={handleLike}>
                        <Heart className={`rounded-xl transition-all duration-300  ${liked ? "fill-rose-600 stroke-rose-300 scale-110 scale-120" : "fill-white scale-110 stroke-white"}`}/>
                    </div>
                </div>
                <div className="details font-serif bg-">
                    <p className="text-center">Otto Shirts</p>
                    <p className="truncate ml-2">This a shirt from the house of Otto with pure cotton material with different colour</p>
                    <h2 className="pl-2 pb-2">Price: 300</h2>
                </div>
            </div>
            <div className="w-42 mt-5 mb-3 rounded-md bg-white lg:w-60">
                <div className="image m-3 relative">
                    <img src="im.jpg" alt="" className="rounded-lg"/>
                    <div className="absolute top-2 right-2" onClick={handleLike}>
                        <Heart className={`rounded-xl transition-all duration-300  ${liked ? "fill-rose-600 stroke-rose-300 scale-110 scale-120" : "fill-white scale-110 stroke-white"}`}/>
                    </div>
                </div>
                <div className="details font-serif bg-">
                    <p className="text-center">Otto Shirts</p>
                    <p className="truncate ml-2">This a shirt from the house of Otto with pure cotton material with different colour</p>
                    <h2 className="pl-2 pb-2">Price: 300</h2>
                </div>
            </div>
        </div>
    )
}




