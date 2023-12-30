"use client"
import React, {useState, useEffect} from 'react'
import { Input } from '../ui/input'
import { ButtonMain } from '../Button/Button'
import { addFriend, getCurrentUser, getCurrentUserId } from '@/lib/actions/app.action'

const AdddFriendModalInput = () => {

  const [friend, setFriend] = useState<string>('');

  async function addFriendHandler(){

    if (!friend) return null;
    
      const user = await getCurrentUser();
      if (user){
          const {username} = user;
          const userId = await getCurrentUserId(username);
          const userCreatedStatus = await addFriend(friend, userId);
         return userCreatedStatus;
      }
  
  }
  return (
    <div className='py-4'>
        <div className="">
            <Input value={friend} onChange={(e)=>setFriend(e.target.value)} className='  focus-visible:ring-0 outline-none' placeholder='Add a friend' type='text'/>
        </div>
        <div className="py-4">
            <ButtonMain onClick={()=>addFriendHandler()} text='Add Friend'/>
        </div>
    </div>
  )
}

export default AdddFriendModalInput