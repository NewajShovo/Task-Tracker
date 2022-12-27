import Button from "./Button"

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className='header'>
      <h1 >{title}</h1>
      <Button 
      color={showAdd ? 'Red' : 'green'} 
      text={showAdd ? 'Close' : 'Add'} 
      onAdd={onAdd}/>
    </header>
  ) 
}
// Header.defaultProps = {
//     title:'Task Tracker',
// }

//Css in js
// const headingStyle =  {
//     color:'red'
// }


export default Header
