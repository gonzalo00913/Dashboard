import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavBar/NavigationBar.jsx'
import ProductsList from './views/Products/List/ProductsList.jsx';
import ProductsCreate from './views/Products/Create/ProductsCreate.jsx';
import ProductsDetail from './views/Products/Detail/ProductsDetail.jsx';
import ProductsUpdate from './views/Products/Update/ProductsUpdate.jsx'
import AdminLogin from './views/AdminLogin/AdminLogin.jsx'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/create" element={<ProductsCreate />} />
        <Route path="/products/detail/:id" element={<ProductsDetail />} />
        <Route path="/products/update/:id" element={<ProductsUpdate />} />
      </Routes>
    </div>
  )
}

export default App
