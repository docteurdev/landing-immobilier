import React, { useContext, useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { cartContext } from './comon/context';
import { Home } from './pages';
import { store } from './store/store';

// type BtnType={
//   idle: string,
//   loading: string,
//   loaded: string,
//   error: string,
// }

// function Input({check,setCheck}: any){
 
//   return(
//     <div className="">
//        <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
//     </div>
//   )
// }

// function Label({children}: any){
//   return(
//     <div className="">
//        <label > {children} </label>
//     </div>
//   )
// }
// function Btns({children}: any){

//   return React.Children.map(children, (child) =>{
//     console.log(child);
//     const clone = React.cloneElement(child, {
//       check,
//       setCheck 
//     })
//     return clone
    
//   })
// }

function App() {
  const ContextValue={
    productInfo:{},
    ProductsCart:[]
}

  return (
    <Provider store={store} >

    <cartContext.Provider value={ContextValue}>
      <div className="App">
        <Home/>
      </div>
    </cartContext.Provider>
    </Provider>
  );
}

export default App;
