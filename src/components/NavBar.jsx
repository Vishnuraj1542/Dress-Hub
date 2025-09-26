import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <nav className='bg-primary flex flex-row h-12 items-center'>
        <h1 className='font-mono text-4xl ml-5'><span className="dark:text-white text-5xl">D</span>ress<span className="dark:text-white">H</span>ub</h1>
        <ul className='flex flex-row gap-4 align ml-auto mr-4 text-xl font-serif'>
            <li><Link to="/home"> Home </Link></li>
            <li><Link to='/wishlist'>Wishlist</Link></li>
            <li><Link to ="/cart">Cart</Link></li>
        </ul>
        <div className="flex flex-row gap-4 mr-7">
            <input type='text'className="border-2 border-sky-500 pl-2" placeholder="Search a product...."></input>
            <button className='auth border-sky-500'>Login</button>
        </div>
        </nav>
    )
}