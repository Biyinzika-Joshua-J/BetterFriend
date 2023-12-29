"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"


export function Edit() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="-z-50">
        <Button variant="default" className="-z-50">
            
            <FontAwesomeIcon icon={faEllipsisVertical} size="2x" className="-z-50"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20 z-50 bg-[#fff] opacity-100">
        <DropdownMenuItem
        >
            <button className="z-50">
                Edit Friend
            </button>
        </DropdownMenuItem>
        <DropdownMenuItem
        >
           <button>
                Add Entry
            </button>
        </DropdownMenuItem>
        <DropdownMenuItem
        >
           <button>
                Delete Friend
            </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
