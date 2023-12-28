import React from 'react'
import SearchForm from '@/components/SearchForm/SearchForm'
import { ButtonMain } from '@/components/Button/Button'
import NoFriends from '@/components/NoFriends/NoFriends'
import FriendListItem from '@/components/FriendListItem/FriendListItem'
import Modal from '@/components/Modal/Modal'

const page = () => {
  return (
    <>
    <main className='py-10 max-w-6xl mx-auto'>
      <div className="flex flex-col">
        <div className="">
          <SearchForm/>
        </div>
        <div className="my-10">
          <ButtonMain text='Add New Friend'/>
        </div>
        <div className="">
          <div className="">
            <FriendListItem/>
            <FriendListItem/>
            <FriendListItem/>
            <FriendListItem/>
          </div>
          {/*<div className="flex justify-center items-center h-44">
            <NoFriends/>
  </div>*/}
        </div>
      </div>
    </main>
    <Modal>
      <div className="">
        modal
      </div>
    </Modal>
    </>
  )
}

export default page