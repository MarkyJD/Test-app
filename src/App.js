import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Rightbar from './components/rightbar/Rightbar';
import Feed from './components/feed/Feed';

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
