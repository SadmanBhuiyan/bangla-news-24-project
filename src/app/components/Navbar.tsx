import Link from 'next/link';
import React from 'react';

interface Navs {
    slug: string
    title: string
    topicId: string
    url: string
    scrapable: boolean
}

const Navbar = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json();
    const navs: Navs[] = data.data;
    const filtered = navs.filter(n => n.scrapable === true)


    return (
        <div className='flex justify-center m-1 gap-0.5'>
            <Link href={'/'}>হোম</Link>
        <div>
            {filtered.map((n, i) => <Link className='m-2 gap-1 p-2' key={i} href={n.slug}>{n.title}</Link>)}
        </div>
        </div>
    );
};

export default Navbar;