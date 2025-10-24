import { Provider } from 'react-redux'
import '../global.css'
import { store } from '../state/store'
import Navbar from '../components/Navbar'


export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <div className='bg-black text-white'>
     <Navbar/>
    <Component {...pageProps} />
    </div>
    </Provider>
  )
}
