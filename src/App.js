import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import Authcontext from './contexts/AuthContext/Authcontext';
import {SignInPage, SearchWorkerPage, SignUpPage, RegisterPage} from './pages/index';
import { AppLayout } from './layouts';
function App() {
  return (
    <Authcontext>
      <Routes>
        <Route path="/" element={<Suspense><AppLayout/></Suspense>}>
          <Route index  element={<Suspense><SearchWorkerPage/></Suspense>}/>
        </Route>
        <Route path='/signIn' element={<Suspense><SignInPage/></Suspense>}>
          <Route path='register' element={<Suspense><RegisterPage/></Suspense>}/>
        </Route>
        <Route path='/signUp' element={<Suspense><SignUpPage/></Suspense>}>
          <Route path='register' element={<Suspense><RegisterPage/></Suspense>}/>
        </Route>
      </Routes>
    </Authcontext>
  );
}

export default App;
