import {useState} from "react";

function FriendItem({friends, onAddFriend,
                      selectedFriend, onSelectedFriend}) {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState("")
  const [image, setImage] = useState("https://i.pravatar.cc/48")

  function handleSubmit(e) {
    e.preventDefault()
    setShowForm(false)
    onAddFriend(e)
    setName('')
    setImage("https://i.pravatar.cc/48")
  }

  function handleName(e) { setName(e.target.value) }
  function handleImage(e) { setImage(e.target.value) }

  return (
    <>
      <ul>
      {friends.map(friend =>
        <Friend friend={friend} key={friend.id}
                selectedFriend={selectedFriend}
                onSelectedFriend={onSelectedFriend}
                setShowForm={setShowForm}
        />
      )}
      </ul>
      {showForm
        ? <div>
          <FormAddFriend onFrSubmit={handleSubmit}
                         friendName={name}
                         onNameItem={handleName}
                         friendImage={image}
                         onImageItem={handleImage}  />
          <Button handleClick={() => setShowForm(false)}>Close</Button>
        </div>
        : <Button handleClick={() => setShowForm(true)}>
          Add friend</Button>}

    </>
  );
}
function Friend({friend, selectedFriend, onSelectedFriend, setShowForm}) {
  const isSelected = selectedFriend?.id === friend.id;

  const click = () => {
    onSelectedFriend(friend);
    setShowForm(false);
  }
  return (
    <li className={isSelected ? "selected": ""}>
      <img src={friend.image} alt={friend.name}/>
      <div>
        <h3>{friend.name}</h3>
        {friend.balance === 0 &&
          <p className=''>Me and {friend.name} are even</p>}
        {friend.balance < 0 &&
          <p className='red'>Me owes {friend.name} {Math.abs(friend.balance)}</p>}
        {friend.balance > 0 &&
          <p className='green'>{friend.name} owes Me {Math.abs(friend.balance)}</p>}
      </div>
      <Button className='button'
              handleClick={click}>
        {isSelected ? "Close" : "Select"}</Button>
    </li>
  )
}

function FormAddFriend({onFrSubmit, friendName, onNameItem,
                         friendImage, onImageItem }) {
  return (
    <div>
      <form className='form-add-friend'
            onSubmit={(e) => onFrSubmit(e)}>
        <label>🧑‍🤝‍🧑Friend name</label>
        <input type='text' name="friendName" value={friendName}
               onChange={(e) => onNameItem(e)}/>
        <label>🟩Image</label>
        <input type='text' name="imgUrl" value={friendImage}
               onChange={e => onImageItem(e)}/>
        <Button>Add</Button>
      </form>

    </div>

  )
}

function Button({children, handleClick}) {
  return <button className='button' onClick={handleClick}>{children}</button>
}
export default FriendItem