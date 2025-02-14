
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Erro404 from "../src/components/ui/Home/Erro404"
import Home from "./pages/Home";



const Rotas = () => {

    return(
        <>
       
          <BrowserRouter>
        

         <Routes>
    
         <Route path="/" element={<Home/>}></Route>
            <Route path="*" element={<Erro404/>}></Route>
        
         </Routes>

      
         </BrowserRouter>

         
         
        </>
    )

}

export default Rotas