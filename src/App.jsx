import {Routes,Route} from 'react-router-dom';import {Header,Footer,CartDrawer,Toast} from './components';import * as P from './pages';
export default function App(){return <div className="min-h-screen flex flex-col"><Header/><main className="flex-1"><Routes>
<Route path="/" element={<P.Home/>}/><Route path="/collections/:cat" element={<P.Collection/>}/><Route path="/products/:slug" element={<P.Product/>}/>
<Route path="/search" element={<P.Search/>}/><Route path="/wishlist" element={<P.Wishlist/>}/><Route path="/cart" element={<P.CartPage/>}/>
{['about','contact','faq','shipping','returns','privacy','terms','checkout'].map(k=><Route key={k} path={'/'+k} element={<P.Info k={k}/>}/>)}
<Route path="*" element={<P.NotFound/>}/></Routes></main><Footer/><CartDrawer/><Toast/></div>}
