"use client"
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PiEyeClosed, PiEye } from 'react-icons/pi';
import { Input } from '@/components/ui/input';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


export default function FormInput({ formtype, value, form, label, placeholder, options, name, type = "text" }) {
  const [active, setActive] = useState(false)
  const PasswordIcon = !active ? PiEyeClosed : PiEye
  return (
    <div>
      {/* <div className="mb-2 font-medium">{label}</div> */}
      {formtype === 'text' && (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  value={value || ''}
                  {...field}
                  className='border border-[#D0D5DD] h-[3.5rem] w-full p-4 rounded-md'
                  placeholder={placeholder}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      {formtype === 'password' && (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    // value={value || ''}
                    type={active ? 'text' : 'password'}
                    className='border border-[#D0D5DD] h-[3.5rem] w-full p-4 rounded-md'
                    placeholder={placeholder}
                  />
                  <div
                    onClick={() => setActive(prev => !prev)}
                    className="cursor-pointer absolute top-5 text-xl right-2"> <PasswordIcon /> </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      {formtype === 'select' && (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={value || field.value}>
              {/* <Select onValueChange={field.onChange} defaultValue={field.value}> */}
                <FormControl>
                  <SelectTrigger>
                    <SelectValue className='p-4' placeholder={placeholder || "Select Role"} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* <SelectLabel>--Select Role --</SelectLabel> */}
                  {options.map((item, index) => (
                    <SelectItem className="border-b rounded-none" key={index} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        // <FormField
        //   control={form.control}
        //   name={name}
        //   render={({ field }) => (
        //     <FormItem>
        //       <FormLabel>{label}</FormLabel>
        //       <FormControl>
        //         <Select
        //           {...field}
        //         >
        //           <SelectTrigger className="w-full !p-4">
        //             <SelectValue className='p-4' placeholder={placeholder || "Select Role"} />
        //           </SelectTrigger>
        //           <SelectContent>
        //             <SelectGroup>
        //               <SelectLabel>--Select Role --</SelectLabel>
        //               {options.map((item, index) => (
        //                 <SelectItem key={index} value={item}>
        //                   {item}
        //                 </SelectItem>
        //               ))}
        //             </SelectGroup>
        //           </SelectContent>
        //         </Select>
        //         <Input
        //           type="text"
        //           {...field}
        //           className='border border-[#D0D5DD] h-[3.5rem] w-full p-4 rounded-md'
        //           placeholder={placeholder}
        //         />
        //       </FormControl>
        //       <FormMessage />
        //     </FormItem>
        //   )}
        // />
      )}
    </div>
  );
}
