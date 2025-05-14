import { Provider } from 'react-redux'
import './App.css'
import store from './reduxContainer/Store'

function App() {

  return (
    <>
      <Provider store={store}>
        <div>
          
        </div>
      </Provider>
    </>
  )
}

export default App
