import {Link} from "react-router-dom"
import { FaSearch } from "react-icons/fa";

export default function NavBar(){
    return(
        <nav className='bg-background w-full flex flex-col lg:h-18 lg:flex-row lg:items-center'>
        <div className="flex flex-row relative gap-4 pt-2 lg:items-center">
            <h1 className='font-mono text-lg ml-4 lg:text-4xl'><span className="dark:text-white text-2xl lg:text-5xl">D</span>ress<span className="dark:text-white text-2xl lg:text-4xl">H</span>ub</h1>
            <FaSearch className="absolute left-33 top-5.5 z-1 text-black-400 lg:left-55 lg:top-6.5"/>
            <input type='text'className="bg-secondary pl-10 w-45 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight lg:h-10 lg:w-90 lg:pl-13 md:w-90" placeholder="Search products"></input>
            <button className='bg-secondary max-w-40 w-md hover:bg-highlight rounded-md mr-4 lg:w-15 h-10 md:w-40'>Login</button>
        </div>
       
        <ul className='flex flex-row  gap-10 mr-4 text-md font-serif p-2 ml-2 lg:items-center lg:text-2xl lg:gap-15 md:justify-center md:gap-20 md:text-xl'>
            <li className="font-serif"><Link to="/home"> Home </Link></li>
            <li className="font-serif"><Link to='/wishlist'>Wishlist</Link></li>
            <li className="font-serif"><Link to ="/cart">Cart</Link></li>
            <li className="font-serif"><Link to='/orders'>Orders</Link></li>
        </ul>
        
        </nav>
    )
}