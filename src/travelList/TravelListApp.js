
import {useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Form from "./Form";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Toothbrush", quantity: 2, packed: false },
  { id: 4, description: "Boarding Passes", quantity: 2, packed: false },
];

function TravelListApp() {
  const [itemList, setItemList] = useState(initialItems)

  function handleAddItem(newItem) {
    setItemList(prevValue => [...prevValue, newItem ] )
  }
  function handleDeleteItem (id) {
    setItemList(items =>
      items.filter(item => item.id !== id))
  }
  function handleToggleItem (id) {
    setItemList(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item))
  }
  function handleClear () {
    const confirmed = window.confirm(
      "진짜로 다 지우실라고요 ?????"
    )
    confirmed && setItemList([])
  }

  return (
    <div >
      <Header />
      <Form items={itemList}  onAddItems={handleAddItem}/>
      <Main items={itemList}
            onDeleteItem={handleDeleteItem}
            clearList={handleClear}
            onToggleItem={handleToggleItem}
      />
      <Footer itemList={itemList} />
    </div>
  );
}

export default TravelListApp