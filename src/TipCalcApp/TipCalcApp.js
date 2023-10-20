import {useState} from "react";
import './tipStyles.css'

function Bill({bill, onBill}) {
  return (
    <>
      총 금액 : <input value={bill} onChange={e => onBill(Number(e.target.value))}/>
    </>
  );
}

function MyTip({tip, onMyTip}) {
  return (
    <>
      <span>나의 팁 : </span>
      <select onChange={(e) => onMyTip(Number(e.target.value))}
              value={tip}>
        <option value="0"> 불만족 합니다.(0%)</option>
        <option value="10"> 좀만족 합니다.(10%)</option>
        <option value="15"> 만족 합니다.(15%)</option>
        <option value="20"> 매우 만족 합니다.(20%)</option>
      </select>
    </>
  );
}

function FriendTip({tip, onFriendTip}) {
  return (
    <>
      <span>친구 팁 : </span>
      <select onChange={(e) => onFriendTip(Number(e.target.value))}
              value={tip}>
        <option value="0"> 불만족 합니다.(0%)</option>
        <option value="10"> 좀만족 합니다.(10%)</option>
        <option value="15"> 만족 합니다.(15%)</option>
        <option value="20"> 매우 만족 합니다.(20%)</option>
      </select>
    </>
  );
}

function TipCalcApp() {
  const [bill, setBill] = useState(0)
  function handleBill(value) { setBill(bill => value) }

  const [myTip, setMyTip] = useState(0)
  function handleMyTip(value) { setMyTip(tip => value) }

  const [friendTip, setFriendTip] = useState(0)
  function handleFriendTip(value) { setFriendTip(tip => value) }

  const tipAvg = Math.round(bill * (myTip / 100 + friendTip / 100) / 2)
  const totalBill = bill + tipAvg
  function handleReset() {
    setBill(0)
    setMyTip(0)
    setFriendTip(0)
  }
  function Output() {
    return (
      <>
        { bill > 0 &&
          <div>
            <h3>총금액 : ${totalBill}(금액 : ${bill}, 팁 : ${tipAvg})</h3>
            <button onClick={handleReset}>Reset</button>
          </div>
        }
      </>
    )
  }

  return (
    <>
      <Bill bill={bill} onBill={handleBill}/>
      <MyTip tip={myTip} onMyTip={handleMyTip}/>
      <FriendTip tip={friendTip} onFriendTip={handleFriendTip}/>
      <Output/>
    </>
  );
}

export default TipCalcApp