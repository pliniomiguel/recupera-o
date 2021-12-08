import {BrowserRouter, Routes, Route} from 'react-router-dom'
import lista from './pages/home'

export default function routes(){
    return(
<BrowserRouter>
<Routes>
<Route path="/"element={<lista/>}>
    </Route>
</Routes>
</BrowserRouter>

)
}