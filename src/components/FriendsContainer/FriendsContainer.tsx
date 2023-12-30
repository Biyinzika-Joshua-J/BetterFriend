"use client";
import React, { useState, useEffect } from "react";
import {
  getCurrentUser,
  getCurrentUserId,
  getFriends,
} from "@/lib/actions/app.action";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendsContainer = () => {
  const [friends, setFriends] = useState<any | null>(null);

  useEffect(() => {
    async function getAllFriends() {
      const user = await getCurrentUser();
      if (user) {
        const { username } = user;
        const userId = await getCurrentUserId(username);
        const friendsList = await getFriends(userId);
        setFriends(friendsList.reverse());
      }
    }
    getAllFriends();
  }, []);

  return (
    <div>
      {friends === null && "Loading...."}
      {(friends != null &&
        friends.length > 0) ?
       ( friends.map((friend: { id: number; name: string; userId: number }) => (
          <FriendListItem key={friend.id} id={friend.id} name={friend.name} />
        ))):"No friends"}
    </div>
  );
};

export default FriendsContainer;
