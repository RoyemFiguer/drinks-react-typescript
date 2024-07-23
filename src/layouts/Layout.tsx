import {Outlet} from 'react-router-dom'
import Header from '../components/Header'

export default function Layout() {
  return (
    <>
        <Header />
        //Outlet es una función de react para rederizar los child components
        <main className='container mx-auto py-16'>
            <Outlet />
        </main>
    </>
  )
}
