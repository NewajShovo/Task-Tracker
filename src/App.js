import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <div className='header'>
      <Header title="Task Tracker"/>
      <Button color='green' text='Add Button'/>
    </div>
  );
}

export default App;
