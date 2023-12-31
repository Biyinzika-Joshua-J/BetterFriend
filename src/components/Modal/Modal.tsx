"use client"
import React, {useState, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useModal } from '@/context/ModalProvider'

const Modal = ({children}:{children:React.ReactNode}) => {
    const {open, setModalClose} = useModal();

  
  if (!open) return null;

  return (
    <div className="">
    <div onClick={()=>setModalClose()} className='fixed top-0 left-0 h-screen w-full bg-primary opacity-50 '>
    </div>
        <div className="fixed bg-[white] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white min-w-[320px] md:w-[450px] w-[320px] z-100 p-2 rounded-lg">
            <div className="flex items-center justify-between">
                <div className="">
                </div>
                <div className="">
                    <button onClick={()=>setModalClose()}>
                    <FontAwesomeIcon icon={faXmark} size='2x' className='text-primary'/>
                    </button>
                </div>
            </div>
            <div className="opacity-100">
                {children}
            </div>
        </div>

    </div>
  )
}

export default Modal