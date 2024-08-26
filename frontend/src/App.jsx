import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import { Text } from '@mantine/core';

function App() {

  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage/>}/>
        </Route>

        <Route path='*' element={
          <Text>
            Not Found
          </Text>}/>
      </Routes>
    </>
  )
}

export default App
