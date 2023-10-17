import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import {useState} from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Toothbrush", quantity: 2, packed: false },
  { id: 4, description: "Boarding Passes", quantity: 2, packed: false },
];

function App() {
  const [itemList, setItemList] = useState(initialItems)
  const [sort, setSort] = useState("")
  const clearList = () => {
    setItemList([])
  }
  const handleDeleteItem = (id) => {
    setItemList(items =>
      items.filter(item => item.id !== id))
  }
  const handleToggleItem = (id) => {
    console.log(id)
    setItemList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed} : item))
  }
  const handleSortedItem = (e) => {
    const value = e.target.value
    console.log(value)
    let newList =[]
    if(value === 'description') {
      newList = itemList.sort(function (a, b) {
        if(a.description.toUpperCase() < b.description.toUpperCase()){
          return -1;
        }
        if(a.description.toUpperCase() > b.description.toUpperCase()){
          return 1;
        }
        return 0;
      })
    }
    else {
      newList = itemList.sort(function (a, b) {
        return a.quantity - b.quantity;
      })
    }
    setItemList([...newList])
    setSort(e.target.value)
  }

  return (
    <div className='app'>
      <Header items={itemList}  setItems={setItemList}/>
      <Main sortedList={itemList}
            onDelete={handleDeleteItem}
            onSortedItem={handleSortedItem}
            clearList={clearList}
            onToggleItem={handleToggleItem}
            sort={sort}
      />
      <Footer itemList={itemList} />
    </div>
  );
}

export default App;