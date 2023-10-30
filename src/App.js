import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Heading from './Components/Heading';
import Structure from './Components/Structure';
import TaskProps from './Components/TaskProps';


function App() {
  return (
    <div className="App container">
      <Heading />
      <Structure/>
      <TaskProps/>        
    </div>
  );
}

export default App;
