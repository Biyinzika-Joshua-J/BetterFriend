"use client"
import React from 'react'
import { Input } from '../ui/input'
import { ButtonMain } from '../Button/Button'

const AdddFriendModalInput = () => {
  return (
    <div className='py-4'>
        <div className="">
            <Input className='  focus-visible:ring-0 outline-none' placeholder='Add a friend' type='text'/>
        </div>
        <div className="py-4">
            <ButtonMain onClick={()=>{}} text='Add Friend'/>
        </div>
    </div>
  )
}

export default AdddFriendModalInput