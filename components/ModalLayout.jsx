import React, { useEffect, useRef } from 'react'
import Imaged from './Imaged'

export default function ModalLayout({children, onclose, showclose=true}) {
    
  return (
    <div className='bg-[#34405499] fixed top-0 left-0 w-full h-screen fades flex items-center justify-center'>
        <div className="w-[36.75rem] fades2 bg-white px-8 pt-8 pb-14 rounded-md max-h-[43.68rem] overflow-y-auto relative">
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
