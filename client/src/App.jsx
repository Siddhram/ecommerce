
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from '../src/components/auth/Layout'
import Login from './pages/Login'
import Resister from './pages/Resister'
import Adminlayout from './components/admin-view/Adminlayout'
import Admindashboard from './pages/admin-view/dashboard'
import Adminprroducts from './pages/admin-view/products'
import Adminorders from './pages/admin-view/orders'
import Adminfeatures from './pages/admin-view/adminfeatures'
import Shopinglayout from './components/shoping-view/Shopiinglayout'
import NotFound from './pages/not-found'
import Shopinghome from './pages/shoping-view/home'
import ShopingListing from './pages/shoping-view/listingpage'
import ShopingCheakout from './pages/shoping-view/Cheakoutpage'
import ShopingAccountPage from './pages/shoping-view/Accountpage'

function App() {

  return (
    // <>
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path='/auth' element={<Layout/>}>
          <Route path='login' element={<Login/>}>
          </Route>
            <Route path='resister' element={<Resister/>}>
          </Route>
        </Route>
        <Route path='/admin' element={<Adminlayout/>}>
          <Route path='dashboard' element={<Admindashboard/>}>
          </Route>
          <Route path='products' element={<Adminprroducts/>}>
          </Route>
          <Route path='orders' element={<Adminorders/>}>
          </Route>
          <Route path='features' element={<Adminfeatures/>}>
          </Route>
        </Route>
         <Route path='/shop' element={<Shopinglayout/>}>
          <Route path='home' element={<Shopinghome/>}>
          </Route>
          <Route path='listing' element={<ShopingListing/>}>
          </Route>
          <Route path='cheakout' element={<ShopingCheakout/>}>
          </Route>
          <Route path='account' element={<ShopingAccountPage/>}>
          </Route>
        </Route>
        <Route path='*' element={<NotFound/>}>
        </Route>
      </Routes>

    </div>
    // </>
  )
}

export default App
