import {createContext,useContext,useEffect,useState} from 'react';import {PRODUCTS} from './data';
const C=createContext();export const useStore=()=>useContext(C);
export const FREE_SHIP=799,COUPONS={WELCOME10:0.1};
const ls=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v??d}catch{return d}};
export function Store({children}){
 const [cart,setCart]=useState(()=>{const c=ls('cart',[]);return Array.isArray(c)?c.filter(l=>PRODUCTS.some(p=>p.id===l.id)):[]});
 const [wish,setWish]=useState(()=>{const w=ls('wish',[]);return Array.isArray(w)?w:[]});
 const [coupon,setCoupon]=useState(()=>ls('coupon',''));
 const [open,setOpen]=useState(false);const [toast,setToast]=useState('');
 useEffect(()=>localStorage.setItem('cart',JSON.stringify(cart)),[cart]);
 useEffect(()=>localStorage.setItem('wish',JSON.stringify(wish)),[wish]);
 useEffect(()=>localStorage.setItem('coupon',JSON.stringify(coupon)),[coupon]);
 useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(''),2200);return()=>clearTimeout(t)},[toast]);
 const add=(p,vid,q=1)=>{const v=vid||p.variants[0].id;setCart(c=>{const l=c.find(x=>x.id===p.id&&x.vid===v);return l?c.map(x=>x===l?{...x,qty:Math.min(p.stock,x.qty+q)}:x):[...c,{id:p.id,vid:v,qty:q}]});setOpen(true);setToast('Added to bag')};
 const setQty=(l,q)=>setCart(c=>c.map(x=>x===l?{...x,qty:Math.max(1,Math.min(PRODUCTS.find(p=>p.id===l.id).stock,q))}:x));
 const remove=l=>setCart(c=>c.filter(x=>x!==l));
 const toggleWish=id=>{setWish(w=>w.includes(id)?w.filter(x=>x!==id):[...w,id]);setToast(wish.includes(id)?'Removed from wishlist':'Saved to wishlist')};
 const applyCoupon=code=>{const k=code.trim().toUpperCase();if(COUPONS[k]){setCoupon(k);setToast('Coupon applied')}else setToast('Invalid coupon')};
 const lines=cart.map(l=>({...l,p:PRODUCTS.find(p=>p.id===l.id)}));
 const subtotal=lines.reduce((s,l)=>s+l.p.price*l.qty,0);
 const discount=Math.round(subtotal*(COUPONS[coupon]||0));
 const ship=!subtotal||subtotal-discount>=FREE_SHIP?0:49;
 return <C.Provider value={{cart,lines,count:cart.reduce((s,l)=>s+l.qty,0),add,setQty,remove,wish,toggleWish,coupon,applyCoupon,subtotal,discount,ship,total:subtotal-discount+ship,open,setOpen,toast}}>{children}</C.Provider>}
