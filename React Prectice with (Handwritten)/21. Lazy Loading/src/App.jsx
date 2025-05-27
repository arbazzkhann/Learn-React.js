import React from 'react';

import { Suspense } from 'react';
import './App.css'



import Hello from './Components/Hello'
// import LazyLoading from './Components/LazyLoading' //Without lazyload
import SuspenseComponent from './Components/SuspenseComponent';

//with lazy loading
const LazyLoading = React.lazy(() => import('./Components/LazyLoading'));

function App() {

  return (
    <>
      <div>
        <Hello />
        <Suspense fallback={<SuspenseComponent />}>
          <LazyLoading />
        </Suspense>
      </div>
    </>
  )
}

export default App
