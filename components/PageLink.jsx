import Link from 'next/link'
import React from 'react'

export default function PageLink({link, title}) {
  return (
    <div className='flex items-center gap-2 text-grayed text-sm font-light'>
        <Link href="/">Settings</Link> / 
        <Link className='capitalize' href={`${link}`}>{title} Settings</Link>
    </div>
  )
}
