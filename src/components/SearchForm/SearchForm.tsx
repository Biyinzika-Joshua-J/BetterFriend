"use client"
import React from 'react'
import { ButtonMain } from '../Button/Button'
import { Input } from '../ui/input'

const SearchForm = () => {
  return (
    <div className='flex flex-row items-center border-[1px] border-primary p-2 rounded-lg'>
        <div className="w-[90%]">
            <Input className='border-none  focus-visible:ring-0 outline-none ' type='text' placeholder='Search friends'/>
        </div>
        <div className="w-[10%]">
            <ButtonMain classes='w-full' text='Search'/>
        </div>
    </div>
  )
}

export default SearchForm