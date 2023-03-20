import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Date from './pages/Date';
import DramaDetails from './components/Item/DramaDetails';
import Error from './pages/Error';
import Main from './pages/Main';
import Title from './pages/Title';
import DramaDateDetails from './components/Item/DramaDateDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
            <Route index element={ <Main/> }/>
            <Route path=":id" element={ <DramaDetails/> }/>
          <Route path="date" element={ <Date/> }/>
            <Route index element={ <Date/> }/>
            {/* <Route path=":id" element={ <DramaDateDetails/> }/> */}
          <Route path="title" element={ <Title/> }/>
        </Route>
        <Route path="*" element={ <Error/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
