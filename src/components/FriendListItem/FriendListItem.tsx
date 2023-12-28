import React from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Edit } from '../Edit/Edit'
import Link from 'next/link'

const FriendListItem = () => {
  return (
    <Link href={"/dashbaord"}>
    <div className='p-4 border-y-[1px] border-secondary'>
        <div className="flex items-center justify-between">
           <div className="flex items-center">
           <div className="bg-[#ddd] p-2 rounded-full">
                <FontAwesomeIcon icon={faUser} size='2x' className='text-primary'/>
            </div>
            <div className="ml-4">
                <span className=''>
                    Friend Name
                </span>
            </div>
           </div>

           <div className="z-50">
            <Edit/>
           </div>

        </div>
    </div>
    </Link>
  )
}

export default FriendListItem