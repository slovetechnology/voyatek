import { Button } from '@/components/ui/button'
import React from 'react'

export default function CustomButton({ Icon, label, className, onClick, type="button" }) {
    return (
        <div>
            {/* <button className='h-[2.25rem] min-w-[7.1875rem] py-2 px-3 rounded-md gap-2.5 w-full flex items-center justify-center bg-customblue truncate text-white'>
                {Icon && <Icon />}
                <span className="text-sm"> {label}</span>
            </button> */}
            <Button 
            type={type}
            onClick={onClick}
            className={`${className}`}>
                {Icon && <Icon />} {label}
            </Button>
        </div>
    )
}
