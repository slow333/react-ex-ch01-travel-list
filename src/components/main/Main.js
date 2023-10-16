import {useState} from "react";

function Main({sortedList, setSortedList, handleChange, clearList}) {
  const [checkedList, setCheckedList] = useState([]);
  const [isChecked, setIsChecked] = useState(false)
  const [sort, setSort] = useState("")

  const deleteItem = (event) => {
    setSortedList(prevState =>
      prevState.filter(item => item.id !== parseInt(event.target.value)))
  }
  const checkedItemHandler = (value, isChecked) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);
    }
    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
    }
  };

  const checkHandled = (e, value) => {
    setIsChecked(!isChecked)
    checkedItemHandler(value, e.target.checked)
  }

  const lineThrough = (item) => checkedList.includes(item) ? {textDecoration: 'line-through'} : {}

  return (
    <div className='list'>
      {sortedList.map(item =>
        <ul key={item.description}>
          {!item.packed && <li>
            <input type='checkbox' checked={checkedList.includes(item)}
                   onChange={e => checkHandled(e, item)} />
            <span style={lineThrough(item)} >
              {item.quantity} {item.description}</span>
            <button onClick={(event) => deleteItem(event)}
                    value={item.id}>❌</button>
          </li>}
      </ul>)}
      <ul>
      </ul>
      <div className='actions'>
        <select onChange={handleChange} value={sort}>
          <option value="">sort by packed status</option>
          <option value="description">description</option>
          <option value="quantity">quantity</option>
        </select>
        <button onClick={clearList}>clear list</button>
      </div>
    </div>
  );
}

export default Main