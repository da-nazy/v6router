import { Routes ,Route,Outlet,Link} from "react-router-dom"

export default function Page2() {
    const Test1=()=>{
        return(
            <div>Test1</div>
        )
    }

    const Test2=()=>{
        return(
            <div>Test2</div>
        )
    }

    return (
       <Routes>
           <Route path="page2" element={<div>page 2 <Outlet/></div>}>
            <Route path="/" element={<div>Page 2   <Link to="/sent">send</Link></div>}/>
           <Route path=":pageId" element={<div>Test 1</div>}/>
           <Route path="sent"  element={<div>Test 2</div>}/>
               </Route>
         
       </Routes>
    )
}
