import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-10 border-t-2 border-t-primary bg-accent">
            <div className="container mx-auto">
                <div className="py-10 flex gap-4 justify-center">
                    <Link href="/" className="bg-primary rounded-sm p-2"><FaFacebookF className="text-secondary" /></Link>
                    <Link href="/" className="bg-primary rounded-sm p-2"><FaTwitter className="text-secondary" /></Link>
                    <Link href="/" className="bg-primary rounded-sm p-2"><FaLinkedin className="text-secondary" /></Link>
                    <Link href="/" className="bg-primary rounded-sm p-2"><FaYoutube className="text-secondary" /></Link>
                </div>
                <div className="flex justify-evenly">
                    <p className="flex-1 text-md text-center">CopyRight 2024 All Rights Reserved</p> |
                    <Link href="/" className="flex-1 text-md text-center">Terms & Conditions</Link> |
                    <Link href="/" className=" flex-1 text-md text-center">Privacy Policy</Link> | 
                    <Link href="https://github.com/mauryapari/ink-insight" className="flex-1 text-md text-center">View Project On Github</Link>
                </div>
            </div>
        </footer>
    )
}