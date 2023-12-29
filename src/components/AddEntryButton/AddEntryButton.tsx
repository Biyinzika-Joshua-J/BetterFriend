"use client"
import React, { useContext } from 'react'
import { ButtonMain } from '../Button/Button'
import { useModal } from '@/context/ModalProvider'

const AddEntryButton = () => {
    const {open, setModalOpen} = useModal();
  return (
    <ButtonMain onClick={()=>setModalOpen()} text='Add New Entry'/>
  )
}

export default AddEntryButton