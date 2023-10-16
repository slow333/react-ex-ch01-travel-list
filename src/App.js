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

  // const [sortedList, setSortedList] = useState(itemList)

  const clearList = () => {
    setItemList([])
  }

  const handleChange = (e) => {
    const newList = itemList.sort(function (a, b) {
      if(a.description.toUpperCase() < b.description.toUpperCase()
        || parseInt(a.quantity) < parseInt(b.quantity)){
        return -1;
      }
      if(a.description.toUpperCase() > b.description.toUpperCase()
        || parseInt(a.quantity) > parseInt(b.quantity)){
        return 1;
      }
      return 0;
    })
    setItemList([...newList])
  }

  return (
    <div className='app'>
      <Header items={itemList}  setItems={setItemList}/>
      <Main sortedList={itemList} setSortedList={setItemList} handleChange={handleChange} clearList={clearList}/>
      <Footer/>
    </div>
  );
}

export default App;
