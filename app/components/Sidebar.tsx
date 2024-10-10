"use client";

import { useRouter } from "next/navigation";
import Image from 'next/image';
import { FC } from "react";

interface MenuItems {
    name:  string;
    path : string;
} 
const Sidebar : FC = () =>{
    const router = useRouter()

    const menuItems : MenuItems[] = [
        {name:'All Tasks',path:'/'},
        {name:'Important',path:'/important'},
        {name:'Completed',path:'/completed'},
        {name:'Do It Now',path:'/do-it-now'},

    ]

    const handleNavigation = (path: string) => {
        router.push(path); // Navigates to the selected path
    };
    
    return(
        <div className="hidden md:block h-screen bg-gray-800 text-white max-w-[230px] sticky top-0">
            <div className="text-center mb-10">
                <Image
                    src="/profile-pic.jpg" // Path to the image
                    alt="Profile"
                    width={80} 
                    height={80} 
                    className="w-20 h-20 rounded-full mx-auto" 
                    />
                    <h2 className="mt-3 font-bold text-lg">Muhammad Umer</h2>
            </div>

            <nav>
                <ul>
                    {menuItems.map((item)=>(
                        <li
                        key={item.name}
                        className={`text-center p-4 rounded mb-2 cursor-pointer ${router.pathname === item.path?'bg-gray-600' :''}`}
                        onClick={() => handleNavigation(item.path)} // Navigate on click

                        >
                          {item.name}  
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="text-center mt-10">
                <button className=" p-3 text-red-400 hover:text-red-500">Sign Out</button>
            </div>
        </div>
    )
}
export default Sidebar;
