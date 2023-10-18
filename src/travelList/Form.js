import {useState} from "react";

function Header({items, onAddItems}) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!description) return;

    const newItem = { id: items.length,  quantity,  description, packed: false }

    onAddItems(newItem)

    setDescription('')
    setQuantity(1)
  };

  return (
    <div>
      <div className='add-form'>
        <form onSubmit={handleSubmit}>
          <select onChange={(e) => setQuantity(Number(e.target.value))}
                  value={quantity} >
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
      </div>
    </div>
  );
}

export default Header