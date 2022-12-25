
const Header = ({title}) => {
  return (
    <div>
      <h1 >{title}</h1>
    </div>
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
