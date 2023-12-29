"use client"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { ButtonMain } from '../Button/Button';

const NoFriends = () => {
  return (
    <div className='flex flex-col items-center border-[1px] border-primary p-4 rounded-lg shadow-lg'>
            <div className="">
                <FontAwesomeIcon icon={faUserGroup} size='5x' className='text-primary'/>
            </div>
            <div className="pt-4">
                <p>You have no friends</p>
            </div>
            <div className="pt-4">
            <ButtonMain onClick={()=>{}} text='Add a Friend'/>
            </div>
    </div>
  )
}

export default NoFriends