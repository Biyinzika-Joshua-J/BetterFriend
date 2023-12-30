import AddEntryButton from "@/components/AddEntryButton/AddEntryButton";
import AddEntryModalInput from "@/components/AddEntryModalInput/AddEntryModalInput";
import AddFriendButton from "@/components/AddFriendButton/AddFriendButton";
import AdddFriendModalInput from "@/components/AddFriendModalInput/AdddFriendModalInput";
import EntriesContainer from "@/components/EntriesContainer/EntriesContainer";
import FriendListItem from "@/components/FriendListItem/FriendListItem";
import Modal from "@/components/Modal/Modal";
import SearchForm from "@/components/SearchForm/SearchForm";
import React from "react";

const page = ({params}:{params:any}) => {
  const {id:friendId} = params;
  return (
    <>
      <main className="py-10 max-w-6xl mx-auto">
        <div className=" min-h-[100%] ">
          <div className="">
            <SearchForm />
          </div>
          <div className="my-10">
            <AddEntryButton />
          </div>
          <div className="min-h-[50vh]">
            <div className="">
              <EntriesContainer friendId={friendId}/>
            </div>
            {/*<div className="flex justify-center items-center h-44">
            <NoFriends/>
          </div>*/}
          </div>
        </div>
      </main>
      <Modal>
        <div className="">
          <AddEntryModalInput friendId={friendId}/>
        </div>
      </Modal>
    </>
  );
};

export default page;
