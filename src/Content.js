import ItemList from "./ItemList";

const Content = ({items , handleCheck , handleDelete}) =>{

        return (

        <main>
        {
            items.length > 0 ? (
            <ItemList
                items = {items}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
               
            />
            ) : (<center>Empty You Cart</center>)
        }
        </main>
    )


}

export default Content;