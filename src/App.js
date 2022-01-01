import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route ,Link, Routes,Outlet} from "react-router-dom";
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import Page3 from './Component/Page3';
function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact path="/" element={<h1>Home page</h1>}/>
         <Route exact path="page1/:id/test" element={<Page1/>}/>
         <Route exact path="page2" element={<div><Outlet/> Page 2</div>}>
             <Route path=":pageId" element={<div>Page id</div>}/>
           <Route path="sent" element={<div>Snet</div>}/>
           </Route>

         <Route exact path="page3" element={<Page3/>}/>
       </Routes>
       <div className="list">
     <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to ="page1">Page 1</Link></li>
              <li><Link to ="page2">Page 2</Link></li>
              <li><Link to ="page3">Page 3</Link></li>

          </ul>
     </div>

     </Router>

     
    </div>
  );
}

export default App;
