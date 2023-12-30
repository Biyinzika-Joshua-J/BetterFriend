"use client"
import React, {useState} from 'react'
import { Input } from '../ui/input'
import { ButtonMain } from '../Button/Button'
import { Textarea } from "@/components/ui/textarea"
import { addEntry } from '@/lib/actions/app.action'


const AddEntryModalInput = ({friendId}:{friendId:string}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    async function addEntryHandler(){
        if (!title && !content) return null;
        try {
            await addEntry(title, content, parseInt(friendId));
        } catch (error) {
            console.log(error)
        }
    } 

  return (
    <div className='py-4'>
    <div className="">
        <Input value={title} onChange={(e)=>setTitle(e.target.value)} className='  focus-visible:ring-0 outline-none' placeholder='Title' type='text'/>
    </div>
    <div className="mt-4">
        <Textarea value={content} onChange={(e)=>setContent(e.target.value)} className='  focus-visible:ring-0 outline-none' placeholder='What did you talk about with your friend?' />
    </div>
    <div className="py-4">
        <ButtonMain  onClick={()=>addEntryHandler()} text='Add Entry'/>
    </div>
</div>
  )
}

export default AddEntryModalInput