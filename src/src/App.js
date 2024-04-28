import { Download, Header, MakeOwner, Map } from "./components";
import Search from "./components/Search/search";

function App() {
  return (
    <div className="App vw-100 vh-100 overflow-hidden position-relative">
        <Map/>
        <div className="w-100 p-1 container col h-100">
          <Header/>
          <div className="d-flex py-3" style={{height:"80%",width:"100%"}}>
            <Search/>
            <Download/>
          </div>
          <MakeOwner/>
        </div>
    </div>
  );
}

export default App;
