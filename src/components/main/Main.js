function Main({ sortedList, onDelete,
                onSortedItem, clearList,
                onToggleItem, sort}) {
  return (
    <div  className='list' >
      <ul>
      {sortedList.map(item =>
        <Items item={item}
               onToggleItem={onToggleItem}
               onDelete={onDelete}
               key={item.description}/> )}
      </ul>
      <div className='actions'>
        <select onChange={(e) => onSortedItem(e)} value={sort}>
          <option value="">sort by packed status</option>
          <option value="description">description</option>
          <option value="quantity">quantity</option>
        </select>
        <button onClick={clearList}>clear list</button>
      </div>
    </div>
  );
}

function Items({item, onToggleItem, onDelete}) {
  return (
    <li >
      <input type='checkbox' value={item.packed}
             onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? {textDecoration: 'line-through'} : {}} >
            {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>
        ❌</button>
    </li>
  )
}
export default Main