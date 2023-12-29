"use client"
import React from 'react'
import { Input } from '../ui/input'
import { ButtonMain } from '../Button/Button'
import { Textarea } from "@/components/ui/textarea"


const AddEntryModalInput = () => {
  return (
    <div className='py-4'>
    <div className="">
        <Input className='  focus-visible:ring-0 outline-none' placeholder='Title' type='text'/>
    </div>
    <div className="mt-4">
        <Textarea className='  focus-visible:ring-0 outline-none' placeholder='What did you talk about with your friend?' />
    </div>
    <div className="py-4">
        <ButtonMain  onClick={()=>{}} text='Add Entry'/>
    </div>
</div>
  )
}

export default AddEntryModalInput