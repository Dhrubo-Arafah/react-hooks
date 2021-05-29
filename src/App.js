import './App.css';
import ClassCounterOne from './components/useEffect/ClassCounterOne';
import HookCounterOne from './components/useEffect/HookCounterOne';

function App() {
  return (
    <div className="App">
      <HookCounterOne />
      <ClassCounterOne/>
    </div>
  );
}

export default App;
