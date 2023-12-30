import React from 'react'
import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Edit } from '../Edit/Edit'
import Link from 'next/link'

const EntryListItem = ({id, title} : {id:number, title:string}) => {
  return (
      <div className='p-4 border-y-[1px] border-secondary flex items-center justify-between'>
        <Link href={`/dashboard/friend-details/${id}`} className="flex items-center justify-between">
       
           <div className="flex items-center">
           <div className="bg-[#ddd] p-2 rounded-full">
                <FontAwesomeIcon icon={faEdit} size='2x' className='text-primary'/>
            </div>
            <div className="ml-4">
                <span className=''>
                    {title}
                </span>
            </div>
         </div>
      


        </Link>
           <div className="z-50">
            <Edit/>
           </div>
    </div>
  )
}

export default EntryListItem;