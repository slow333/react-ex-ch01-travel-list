function Footer({itemList}) {

  if(!itemList.length) {
    return <p className='stats'>
      <em>여행 준비 리스트를 만드세요....  🏖️</em>
    </p>
  }

  const numItems = itemList.length
  const numPacked = itemList.filter(item => item.packed).length
  const percentage = Math.round(numPacked/numItems * 100)
  // const percentage = (numPacked/numItems * 100).toFixed(2)
  return (
    <div className='stats'>
      <em>
        {percentage === 100 ? '여행갈 준비 완료 가자 🚀':
          `You have ${numItems} items on your list,
          and you already packed ${numPacked}(${percentage}%)`}
      </em>
    </div>
  );
}

export default Footer