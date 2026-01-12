import { Route, Routes } from 'react-router';
import ReducerDemo from './components/ReducerDemo';
import PageChrome from './components/PageChrome';
import FakeBlog from './components/FakeBlog';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<PageChrome />}>
          <Route path="" element={<LandingPage />} />
          <Route path='fakeBlog' element={<FakeBlog />} />
          <Route path='complexThing' element={<ReducerDemo />} />
        </Route>
      </Routes>
    </div>
  )

}

export default App
