"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function Edit() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
            <FontAwesomeIcon icon={faEllipsisVertical} size="2x"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20 z-30 bg-[#fff]">
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
           <button >
                Delete Friend
            </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
