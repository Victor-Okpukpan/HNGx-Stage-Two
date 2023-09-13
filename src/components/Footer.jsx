import React from 'react'
import SocialIcons from './SocialIcons'
import Link from 'next/link'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className='absolute bottom-0 right-0 left-0 max-w-screen-lg mx-auto font-dm-sans text-center'>
        <SocialIcons />
        <div className='font-bold text-lg text-gray-900 flex items-center justify-center space-x-5 mb-3'>
            <Link href="#">Conditions of Use</Link>
            <Link href="#">Privacy & Policy</Link>
            <Link href="#">Press Room</Link>
        </div>

        <p className='text-center text-gray-500 font-bold text-lg'>&copy; {year} MovieBox by Victor Okpukpan</p>
    </footer>
  )
}
