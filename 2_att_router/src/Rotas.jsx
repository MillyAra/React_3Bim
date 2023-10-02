import { Routes, Route } from 'react-router-dom'

import Home from './paginas/Home'
import Pag from  './paginas/Pag'


function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pag' element={<Pag />} />
        </Routes>
        
    )

}

export default Rotas