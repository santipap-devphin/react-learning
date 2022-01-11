import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState ,useEffect} from 'react';

function App() {

  const [items ,setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItems) => {

    setItems(newItems);
    localStorage.setItem('shoppinglist' , JSON.stringify(newItems)); // ใช้ localstate ชื่อ shoppinglist

  }

  useEffect(() => {

    localStorage.setItem('shoppinglist' , JSON.stringify(items));
    console.log('loads');
    

  },[items])

  const addItem = (item) => {

    const id = items.length ? items[items.length - 1].id + 1 : 1; // เช็คก่อนว่า items มีค่ามากกว่า 0 หรือเปล่า ถ้ามี ให้เช็คดูว่า array ตำแหน่งสุดท้ายคือตัวไหนเพื่อตรวจสอบ id ล่าสุด -1 เพราะ array เริ่มตำแหน่งที่ 0 แต่ถ้า length array เท่ากับ 0 ให้ id เริ่มที่ 1 
    const myNewItem = {id ,checked:false , item} // ค่า default ตัวแปร
    const listItems = [...items , myNewItem]; // update myNewItem ที่เพิ่มเข้ามาใหม่ เข้าไปที่ items
    setAndSaveItems(listItems);

  }

  const handleCheck = (id) => {
          
    const listitem = items.map((item) => item.id === id ? {...item , checked : !item.checked} : item); // คือการ update object ในตัวอย่างต้องการเปลื่ยนแปลง object check ใน items
    setAndSaveItems(listitem);

  }

  const handleDel = (id) => {

    console.log(id)
    const listitem = items.filter((item) => item.id !== id);
    setAndSaveItems(listitem);


  }

  const handleSubmit = (e) => {
   
    e.preventDefault();
    if(!newItem)return;
    //addItem

    addItem(newItem);
    setNewItem('')
    console.log('submiited')

  }

  return (
    <div className="App">
      <Header title="Groceries" />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
       <SearchItem 
        search = {search}
        setSearch = {setSearch}
       
      />
      <Content
        items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDel}
      />
      <Footer length = {items.length} />
    </div>
  );
}

export default App;
