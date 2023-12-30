"use client";
import React, { useState, useEffect } from "react";
import {
  getCurrentUser,
  getEntries,
} from "@/lib/actions/app.action";
import FriendListItem from "../FriendListItem/FriendListItem";
import EntryListItem from "../EntryListItem/EntryListItem";

const EntriesContainer = ({friendId}:{friendId:string}) => {
  const [entries, setEntries] = useState<any | null>(null);

  useEffect(() => {
    async function getAllEntries() {
      const user = await getCurrentUser();
      if (user) {
        const entriesList = await getEntries(parseInt(friendId));
        setEntries(entriesList.reverse());
      }
    }
    getAllEntries();
  }, []);

  return (
    <div>
        {entries === null && "Loading...."}
      {(entries != null &&
        entries.length > 0) ?
       ( entries.map((entry: { id: number; title: string; friendId: number }) => (
          <EntryListItem key={entry.id} id={entry.id} title={entry.title} />
        ))):"No entries"}
    </div>
  );
};

export default EntriesContainer;
