import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='max-w-screen-lg mx-auto min-h-screen flex items-center justify-center'>
        <Image src="/spinner.svg" alt="Results Loading..." width={50} height={50} />
    </div>
  )
}
