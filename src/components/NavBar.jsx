import {Link} from "react-router-dom"
import { FaSearch } from "react-icons/fa";

export default function NavBar(){
    return(
        <nav className='bg-background '>
        <div className="flex flex-row relative gap-4 pt-2">
            <h1 className='font-mono text-lg ml-4'><span className="dark:text-white text-2xl">D</span>ress<span className="dark:text-white text-2xl">H</span>ub</h1>
            <FaSearch className="absolute ml-33 mt-4 z-1 -translate-y-1/2 text-gray-400" />
            <input type='text'className="bg-secondary pl-10 w-45 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" placeholder="Search products"></input>
            <button className='bg-secondary w-md hover:bg-highlight rounded-md mr-4'>Login</button>
        </div>
       
        <ul className='flex flex-row justify-center gap-10 mr-4 text-md font-serif p-2 ml-2'>
            <li className="font-serif"><Link to="/home"> Home </Link></li>
            <li className="font-serif"><Link to='/wishlist'>Wishlist</Link></li>
            <li className="font-serif"><Link to ="/cart">Cart</Link></li>
            <li className="font-serif"><Link to='/orders'>Orders</Link></li>
        </ul>
        
        </nav>
    )
}