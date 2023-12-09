
import { Children } from 'react';
import './App.css';
// import './reset.css';
import Header from './components/UI/layout/header';
import Input from "./components/UI/input";
import Button from "./components/UI/button"

function App() {
  return (
    <div className="App">
      <Header/>
      <main  className='mt-8'>
        <div className='w-10/12 mx-auto'>
          <div>
            <Input  type="text"
              id="search"
              placeholder="Search Movie..."
              className="h-8 w-[300px] mr-2"/>
              <Button className='bg-red py-1 px-3 w-[150px] text-white bg-[#000814]'>Search</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
