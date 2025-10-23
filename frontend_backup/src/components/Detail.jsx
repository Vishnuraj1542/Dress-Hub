export default function Details(){
    return(
        <div className="container">
            <div className="item">
                <div className='fullview w-80 m-auto mt-4 rounded-xl shadow-xl/50 lg:h-60 lg:w-60'>
                    <img src='im.jpg' className="object-fit rounded-xl lg:h-60"></img>
                </div>

                <div className="details m-2 align-center m-5 border-2 m">
                    <h2 className=" text-center font-medium text-xl">Pan America</h2>
                    <p className="text-sans text-xl font-[700]">Color : Red</p>
                    <p className="font-serif text-xl">this is a shirt of otto company which is also used as a partywera</p>
                    <h2 className="text-xl">Price : 500</h2>
                </div>
                <div className="flex flex-row gap-9 justify-center mt-5">
                    <span className="border-1 h-7 w-7 rounded-full text-center">S</span>
                    <span className="border-1 h-7 w-7 rounded-full text-center">M</span>
                    <span className="border-1 h-7 w-7 rounded-full text-center">L</span>
                    <span className="border-1 h-7 w-7 rounded-full text-center">XL</span>
                </div>
                <div className="button flex flex-row h-15 mt-5 justify-center">
                    <button className="bg-orange-300 w-40 m-2 rounded sticky">Add to Cart</button>
                    <button className="bg-orange-300 w-40 m-2 rounded sticky">Buy Now</button>
                </div>
            </div>
        </div>
    )
}