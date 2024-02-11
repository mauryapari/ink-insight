"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

import { usePathname } from 'next/navigation';

export default function Hamburger() {

    const [isExpanded, setIsExpanded] = useState(false);
    const pathName = usePathname();

    useEffect(()=>{
        setIsExpanded(false);
        console.log(pathName);
    }, [pathName]);

    return (
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mx-4">
            <Button onClick={() => setIsExpanded(prevState => !prevState)} variant={"outline"}><RxHamburgerMenu /></Button>
            {isExpanded &&
                <div className=" w-full h-full fixed z-10 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gray-50 dark:bg-gray-800 dark:border-gray-700" id="navbar-hamburger">
                    <div className='m-5 flex justify-end' variant={"icon"}>
                        <Button className={"flex "} onClick={()=>setIsExpanded(prevState => !prevState)}><RxCross2 /></Button>
                    </div>
                    <ul className="flex flex-col font-medium rounded-lg my-10 mx-8">
                        <li className='my-2'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/about">About</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/blog">Blogs</Link>
                        </li>
                        <li className='my-2'>
                            <span className='border-t-2 border-t-primary block pt-2'>Account</span>
                        </li>

                        <li className='my-2'>
                            <Link href="/settings">Profile</Link>
                        </li>
                        <li className='my-2'>
                            <Link href="/create">Create</Link>
                        </li>
                    </ul>
                </div>
            }
        </nav>
    )
}