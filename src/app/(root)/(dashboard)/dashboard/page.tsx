import React from "react";
import SearchForm from "@/components/SearchForm/SearchForm";
import { ButtonMain } from "@/components/Button/Button";
import NoFriends from "@/components/NoFriends/NoFriends";
import FriendListItem from "@/components/FriendListItem/FriendListItem";
import Modal from "@/components/Modal/Modal";
import AdddFriendModalInput from "@/components/AddFriendModalInput/AdddFriendModalInput";
import AddFriendButton from "@/components/AddFriendButton/AddFriendButton";
import FriendsContainer from "@/components/FriendsContainer/FriendsContainer";

const page = () => {
  return (
    <>
      <main className="py-10 max-w-6xl mx-auto">
        <div className=" min-h-[100%] ">
          <div className="">
            <SearchForm />
          </div>
          <div className="my-10">
            <AddFriendButton />
          </div>
          <div className="min-h-[50vh]">
            <div className="">
              <FriendsContainer/>
            </div>
            {/*<div className="flex justify-center items-center h-44">
            <NoFriends/>
          </div>*/}
          </div>
        </div>
      </main>
      <Modal>
        <div className="">
          <AdddFriendModalInput />
        </div>
      </Modal>
    </>
  );
};

export default page;
