const onClick = () =>{
    console.log("Click");
}
const Button = ({color, text}) => {
    return (
      <div>
         <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
      </div>
    )
  }
  export default Button