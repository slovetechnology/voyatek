import React, { useEffect, useRef } from 'react'
import Imaged from './Imaged'

export default function ModalLayout({children, onclose, showclose=true}) {
    const togref = useRef()

    // useEffect(() => {
    //     togref && window.addEventListener('click', e => {togref.current !== null && !togref.current.contains(e.target) && onclose()}, true)
    // }, [])

  return (
    <div className='bg-[#34405499] fixed top-0 left-0 w-full h-screen flex items-center justify-center'>
        <div 
        ref={togref}
        className="w-[36.75rem] bg-white px-8 pt-8 pb-14 rounded-md max-h-[43.68rem] relative">
           {showclose && <div className="absolute top-8 right-8">
                <div className="relative cursor-pointer" onClick={onclose}>
                    <Imaged src="/images/times.svg" width={20} height={100} />
                </div>
            </div>}
            {children}
        </div>
    </div>
  )
}
