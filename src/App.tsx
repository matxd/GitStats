import { BrowserRouter,Routes, Route } from 'react-router-dom';

import { Inicial } from './pages/Inicial/Inicial';
import { Profile } from './pages/Profile/Profile';
import ProfileNotFound from './pages/ProfileNotFound/ProfileNotFound';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicial />} />
          <Route path='/perfil/:username' element={<Profile />} />
          <Route path='/perfil/notfound' element={<ProfileNotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
