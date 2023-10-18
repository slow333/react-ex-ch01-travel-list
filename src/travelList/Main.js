import {useState} from "react";

function Main({items, onDeleteItem, clearList, onToggleItem}) {
  const [sortBy, setSortBy] = useState("input")
  let sortedList;
  switch (sortBy) {
    case "input" :
      sortedList = items;
      break;
    case "description" : sortedList = items.slice()
      .sort((a, b) => a.description.localeCompare(b.description) );
      break;
    case "packed" : sortedList = items.slice()
      .sort((a,b) => Number(a.packed) - Number(b.packed));
      break;
    case "quantity" : sortedList = items.slice()
      .sort((a, b) => a.quantity - b.quantity);
      break;
    default : return
  }

  return (
    <div className='list'>
      <ul>
        {sortedList.map(item =>
          <Items item={item}
                 onToggleItem={onToggleItem}
                 onDeleteItem={onDeleteItem}
                 key={item.description}/>)}
      </ul>
      <div className='actions'>
        <select onChange={e => setSortBy(e.target.value)} value={sortBy}>
          <option value="input">sort by input status</option>
          <option value="description">sort by description</option>
          <option value="quantity">sort by quantity</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={clearList}>clear list</button>
      </div>
    </div>
  );
}

function Items({item, onToggleItem, onDeleteItem}) {
  return (
    <li>
      <input type='checkbox' value={item.packed}
             onChange={() => onToggleItem(item.id)}/>
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
            {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  )
}

export default Main