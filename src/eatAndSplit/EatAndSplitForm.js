import {useState} from "react";

function EatAndSplitForm({ selectedFriend, onSplitBill}) {

  const [bill, setBill] = useState(0);
  const [myBill, setMyBill] = useState(0);
  const [whoIsPaying, SetWhoIsPaying] = useState("user")
  const paidByFriend = bill ? bill - myBill : 0;
  function whoPay(who) { SetWhoIsPaying(who)}

  function handleSubmit(e) {
    e.preventDefault()
    if(!bill || !myBill) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -myBill)
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💲계산할 금액(bill)</label>
      <input placeholder='0' type='number' name="bill"
             value={bill} onChange={e => setBill(e.target.value)}/>

      <label>👩🏼‍🍳내가 낼 금액(my bill)</label>
      <input placeholder='0' type='number' name="myBill"
             value={myBill} onChange={e =>  setMyBill(e.target.value) }
        // setMyBill((e.target.value) > bill ? myBill: (e.target.value))}
      />

      <label>🧑‍🤝‍🧑{selectedFriend.name}가 낼 금액(fr bill) </label>
      <input disabled placeholder="" type='number'
      value={paidByFriend}/>

      <label>👨🏼‍💼계산할 사람은 ? </label>
      <select onChange={(e) => whoPay(e.target.value)} value={whoIsPaying}>
        <option value="user" >ME</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className='button '>Split bill</button>

    </form>
  );
}

export default EatAndSplitForm

//
