import Button from "./Button"

const Header = ({title}) => {
  return (
    <header className='header'>
      <h1 >{title}</h1>
      <Button color='green' text='Add'/>
    </header>
  )
}
Header.defaultProps = {
    title:'Task Tracker',
}

//Css in js
// const headingStyle =  {
//     color:'red'
// }


export default Header
