import {useState} from "react";

function Header({items, setItems}) {

  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState(1)

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!description) return;

    setItems(prevValue => [...prevValue,
      {id: prevValue.length,
        quantity: selected,
        description: description, packed: false}]
    )
    setDescription('')
    setSelected(1)
  };

  return (
    <div>
      <h1>🏖️ FAR AWAY 👜 </h1>
      <div className='add-form'>
        <span style={{marginRight:"13px"}}>여행에 필요한 물건들은 ? </span>
        <Form handleSubmit={handleSubmit} setSelected={setSelected} selected={selected}
              description={description} setDescription={setDescription}/>
      </div>
    </div>
  );
}

function Form({handleSubmit, setSelected, selected, description, setDescription}) {
  return (
    <form onSubmit={handleSubmit}>
      <select onChange={(e) => setSelected(Number(e.target.value))}
              value={selected} >
        <option>item quantity</option>
        {Array.from({length:10}, (_, i) => i+1)
          .map((num) =>
            <option value={num} key={num}> {num} </option>
        )}
      </select>
      <input type='text'
             value={description}
             onChange={(event) => setDescription(event.target.value)}
             name='description' placeholder='item...'
             style={{margin: "0 10px"}}/>
      <button>ADD</button>
    </form>
  )
}
export default Header