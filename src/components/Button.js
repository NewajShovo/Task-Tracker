const Button = ({ color, text, onAdd }) => {
  return (
    <div>
      <button style={{ backgroundColor: color }}
        className='btn' onClick={onAdd}>
        {text}
      </button>
    </div>
  )
}
export default Button