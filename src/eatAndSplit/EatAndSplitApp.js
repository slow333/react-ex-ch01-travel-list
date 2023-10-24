import FriendItem from "./FriendItem";
import "./EatAndSplitIndex.css"
import {initialFriends} from "./EatAndSplitData";
import EatAndSplitForm from "./EatAndSplitForm";
import {useState} from "react";

function EatAndSplitApp() {

  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend]
    = useState(null)

  function handleAddFriend(e) {
    e.preventDefault()
    const [name, image] = e.target
    if(!name.value || !image.value) return;
    const newFriend ={ id:crypto.randomUUID(),
      name: name.value,
      image: image.value, balance: 0 }
    setFriends(pre => [ ...pre, newFriend ])
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend(selected =>
    selected?.id === friend.id ? null : friend)
    // setSelectedFriend(friend)
    console.log(friend)
  }
  function handleSpiltBill(value) {
    console.log(value)
    setFriends(friends => friends.map(friend =>
    friend.id === selectedFriend.id
      ? { ...friend, balance: friend.balance + value}
      : friend
    ))
    setSelectedFriend(null)
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendItem friends={friends}
                    onAddFriend={handleAddFriend}
                    onSelectedFriend={handleSelectedFriend}
                    selectedFriend={selectedFriend}
        />
      </div>
      {selectedFriend &&
           <EatAndSplitForm
                selectedFriend={selectedFriend}
                onSplitBill={handleSpiltBill}
                key={selectedFriend.id}
      /> }
    </div>
  );
}

export default EatAndSplitApp