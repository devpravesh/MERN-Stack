import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './component/users';
import All from './component/all';


function App() {
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/all' element={<All />} />
    </Routes>
  </BrowserRouter>
}

export default App;
