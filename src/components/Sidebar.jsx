import React from 'react'
import addProduct from "../assets/addproduct.png"
import listProduct from "../assets/productlist.png"
import user from "../assets/user.png"
import order from "../assets/order.png"
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="py-7 flex gap-x-2 gap-y-5 bg-slate-200 sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6">
            <Link to='/AddProduct'>
            <button className="flex cursor-pointer items-center gap-2 bg-white hover:bg-gray-100 rounded-md h-14 w-40 xs:w-44 sm:w-48 medium-16 shadow-md">
                <img className='h-8 w-10 ml-5' src={addProduct} alt="Add Product" height={30} width={30} />
                <span className="text-gray-700 font-medium">Add Product</span>
            </button>
            </Link>
            

            <Link to='/ProductList'>
            <button className="flex cursor-pointer items-center gap-2 bg-white hover:bg-gray-100 rounded-md h-14 w-40 xs:w-44 sm:w-48 medium-14 shadow-md">
                <img className='h-10 w-10 ml-5' src={listProduct} alt="Product List" />
                <span className="text-gray-700 font-medium">Product List</span>
            </button>
            </Link>

            <Link to="/Users">
            <button className="flex cursor-pointer items-center gap-2 bg-white hover:bg-gray-100 rounded-md h-14 w-40 xs:w-44 sm:w-48 medium-14 shadow-md">
                <img className='h-10 w-10 ml-5' src={user} alt="Product List" />
                <span className="text-gray-700 font-medium">Users</span>
            </button>
            </Link>
            
        </div>

    )
}

export default Sidebar