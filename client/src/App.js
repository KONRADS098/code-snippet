import Layout from './components/Layout';
import Home from './pages/Home';
import Snippet from './pages/Snippet';
import Snippets from './pages/Snippets';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/snippets' element={<Snippets />} />
          <Route path='/snippet' element={<Snippet />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
