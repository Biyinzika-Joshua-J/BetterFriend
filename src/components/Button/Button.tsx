"use client"
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link';

interface PropsMain {
    text : string;
}
interface PropsLink {
    text : string;
    link : string;
}

export const ButtonMain = ({text}:PropsMain) => {
  return (
    <Button className="text-[#fff] bg-primary ease-in active:scale-90" variant={'default'}>
        {text}
    </Button>
  )
}

export const ButtonLink = ({text, link}:PropsLink) => {
    return (
        <Button asChild className="text-[#fff] bg-primary ease-in active:scale-90" variant={'default'}>
            <Link href={link}>
                {text}
            </Link>
        </Button>
    )
}

export const ButtonMainOutlined = ({text}:PropsMain) => {
    return (
      <Button className="text-primary bg-[#fff] border-[1px] border-primary ease-in active:scale-90" variant={'default'}>
          {text}
      </Button>
    )
  }
  
  export const ButtonLinkOutlined = ({text, link}:PropsLink) => {
      return (
          <Button asChild className="text-primary bg-[#fff] border-[1px] border-primary ease-in active:scale-90" variant={'default'}>
              <Link href={link}>
                  {text}
              </Link>
          </Button>
      )
  }