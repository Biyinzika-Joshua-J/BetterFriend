"use client";
import React, {useEffect} from "react";
import {
  ButtonMain,
  ButtonMainOutlined,
  ButtonLink,
  ButtonLinkOutlined,
} from "../Button/Button";
import { UserButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Theme from "../Theme/Theme";
import Link from "next/link";
import { getCurrentUser } from "@/lib/actions/app.action";


const Navbar =  () => {

    useEffect(() => {
        async function getCurrentUserFromClerk(){
            const user = await getCurrentUser();
            if (user){
                const {username} = user;
                
            }
        }
       
        getCurrentUserFromClerk()

    }, [])
 
  return (
    <nav className=" shadow-lg">
      <div className="lg:max-w-6xl max-w-[85%] py-4 min-h-10 mx-auto ">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href="/">
              <span className="font-bold text-3xl">
                Better<span className="text-tertially">Friend</span>
              </span>
            </Link>
          </div>
          <div className="">
            <SignedIn>
              <div className="flex flex-row items-center">
                <div className="mr-2">
                  <Link href={"/dashboard"}>Dashbaord</Link>
                </div>
                <div className="mr-2">
                  <Theme />
                </div>
                <div className="ml-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex flex-row items-center">
                <div className="mr-2">
                  <ButtonLinkOutlined text="Sign Up" link="sign-up" />
                </div>
                <div className="ml-2">
                  <ButtonLink text="Sign In" link="/sign-in" />
                </div>
              </div>
            </SignedOut>

            <div className=""></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
