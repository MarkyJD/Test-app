import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <h1>Hey Boys!</h1>
      
      <div className="body">
        <div className="left">
          <Sidebar />
        </div>
        
        <div className="middle">
          {/* <Sidebar /> */}
        </div>

        <div className="right">
          {/* <Sidebar /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
