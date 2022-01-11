const Footer = ({length}) => {
   
    return (
        <footer>
             <p>{length} List { length === 0 ? "Item" : "Items" } </p>
        </footer>
    )

}

export default Footer;