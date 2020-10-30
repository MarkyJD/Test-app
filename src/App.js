import './App.css';
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      
      <div className="body">
        <div className="left">
          <Sidebar />
        </div>
        
        <div className="middle">
          <Feed />
        </div>

        <div className="right">
          {/* <Sidebar /> */}
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default App;
