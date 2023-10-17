function Footer({itemList, checkedList}) {
  const item = itemList.length
  const checked = itemList.filter(item => item.packed === true).length
  return (
    <div className='stats'>
      <div> You have {item} items on your list,
        and you already packed {checked}({checked/item * 100}%)</div>
    </div>
  );
}

export default Footer