export default function Card(){
    return(
        <div className=" flex flex-row flex-wrap justify-center gap-3">
            <div className="container w-43 mt-5 mb-3 rounded-md bg-white">
                <div className="image m-3">
                    <img src="im.jpg" alt="" className="rounded-lg"/>
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




