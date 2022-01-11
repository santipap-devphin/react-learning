// pass data จะมีการทำ 2 แบบ คือ pass ผ่าน (props) หรือ ({title})
//const Header = (props) => {

const Header = ({ title }) => {

   return (
        <header>
            <h1> {/*props.title*/ title} </h1>
        </header>
    )
}

Header.defaultProps =  {
    title : "Default Title"
}

export default Header
