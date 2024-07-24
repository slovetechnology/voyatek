import React from 'react'

export default function Loading() {
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-white/50 z-50 flex flex-col items-center gap-2 justify-center'>
        <div className="loader"></div>
        <div className="animate-pulse text-sm text-zinc-600">Loading, do hold on...</div>
    </div>
  )
}
