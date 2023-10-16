// { id: 1, description: "Passports", quantity: 2, packed: false }

import {useState} from "react";

function Header({items, setItems}) {

  const selectList = [1,2,3,4,5,6]
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState(1)

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems(prevValue => [...prevValue,
      {id: prevValue.length,
        quantity: selected,
        description: `${description}`, packed: false}]
    )
  };
  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  return (
    <div>
      <h1>🏖️ FAR AWAY 👜</h1>
      <div className='add-form'>
        <span>What do you need for your 😁 trip?</span>
        <form onSubmit={handleSubmit} >
          <select onChange={handleChange} value={selected}>
            <option>item quantity</option>
            {selectList.map((item, idx) => (
              <option value={item} key={idx}>{item}</option>
            ))}
          </select>
          <input type='text'
                 value={description}
                 onChange={(event) => setDescription(event.target.value)}
                 name='description' placeholder='item...'/>
          <button>ADD</button>
        </form>
      </div>
    </div>
  );
}

export default Header