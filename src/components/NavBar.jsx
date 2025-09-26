import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <nav className='bg-lblue flex flex-row h-14'>
        <h1 className='font-mono text-xl ml-5'>DressHub</h1>
        <ul className='flex flex-row gap-4 align ml-auto'>
            <li><Link to="/home"> Home </Link></li>
            <li><Link to='/wishlist'>Wishlist</Link></li>
            <li><Link to ="/cart">Cart</Link></li>
        </ul>
        <div className="items">
            <input type='text'className="search" id='search'></input>
            <button className='auth'>Login</button>
        </div>
        </nav>
    )
}