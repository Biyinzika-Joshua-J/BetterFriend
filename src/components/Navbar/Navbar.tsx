"use client"
import React from 'react'
import { ButtonMain, ButtonMainOutlined, ButtonLink, ButtonLinkOutlined } from '../Button/Button'
import { UserButton, SignedOut, SignedIn } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className=' shadow-lg'>
        <div className="lg:max-w-6xl max-w-[85%] py-4 min-h-10 mx-auto ">
            <div className="flex flex-row items-center justify-between">
                <div className="">
                    <span className="font-bold text-3xl">
                        Better<span className="text-tertially">Friend</span>
                    </span>
                </div>
                <div className="">
                    <SignedIn>
                        <div className="">
                        <UserButton afterSignOutUrl="/"/>
                        </div>
                    </SignedIn>
                    <SignedOut>
                        <div className="flex flex-row items-center">
                        <div className="mr-2">
                        <ButtonLinkOutlined text='Sign Up' link='sign-up'/>
                        </div>
                        <div className="ml-2">
                        <ButtonLink text='Sign In' link='/sign-in'/>
                        </div>
                        </div>
                    </SignedOut>
                  
                    <div className="">
                        
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar