// components/HeroBanner.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const HeroBanner = () => {
    return (
        <div>
            <Image
                src='https://picsum.photos/1920/870'
                alt="Hero Banner"
                className="w-full"
                width={1920}
                height={900}
                priority
            />
            <div className="lg:absolute lg:bottom-1/2 w-full lg:translate-y-[50%] p-8 bg-gradient-to-r from-[#2f2f2f80] to-transparent">
                <h2 className="text-4xl font-bold mb-4 text-white">
                    Welcome to our blog!
                </h2>
                <p className="text-lg text-white">
                    Discover the latest insights, news, and stories from our community.
                </p>
                <Link href="/blog" className="inline-block mt-6 px-6 py-3 bg-secondary text-primary font-bold rounded-md shadow-md">
                        Read Blog
                </Link>
            </div>
        </div>
    );
};

export default HeroBanner;