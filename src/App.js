import './App.css';
import { BrowserRouter as Main,Route,Routes } from "react-router-dom";
import FormComponent from './Components/FormComponent';
import Notes from './Components/Notes';
import LayoutComp from './Components/LayoutComp';

function App() {
  return (
    <>
    <Main>
   <LayoutComp>
   <Routes>
      <Route path='/' element={<Notes/>} />
      <Route path='/form' element={<FormComponent/>} />
      </Routes>
</LayoutComp>
    </Main>
    </>
  );
}

export default App;
