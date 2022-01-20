import React from 'react';
import Navbar from './components/Navbar';
import Test1 from './components/Test1';
import Test2 from './components/Test2';

function App() {

  const [page, setPage] = React.useState('test1');

  return (
    <div className="App">
      <h1>React Query Test</h1>
      <Navbar setPage={setPage}/>
      <div className='content'>
        { page === 'test1' ? <Test1 /> : <Test2 /> }
      </div>
    </div>
  );
}

export default App;
