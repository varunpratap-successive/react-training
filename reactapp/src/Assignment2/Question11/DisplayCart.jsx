import React from 'react'
import { useContext} from 'react'
import { ShoppingContext } from './ShoppingApp';

function DisplayCart() {
    const {cart,setCart}=useContext(ShoppingContext);
    const {price,setPrice}=useContext(ShoppingContext);
    const Removefromcart=(element,index)=>{
      
        const filterArr = cart.filter((element, i)=>
        {
            return i!==index;
        })
        setCart([...filterArr])
        setPrice(price-element.phoneprice);
    }

  return (
    <>
    <div style={{display:"flex",direction:"row",flexWrap:"wrap"}}>
      <h1 style={{display:"flex",direction:"column"}}>Cart:{cart.length}</h1>
      <br/>
        { 
          cart.map((element,index) => { 
            return(
        <div key={index} style={{border:"2px solid black" ,width :"100px" ,margin:"20px"}}>
        <p>{element.phonename}</p>
        <p>{element.phoneprice}</p>
        
        <button onClick={()=>Removefromcart(element,index)} >Remove this item </button>
        </div>

   ) }) 
    }
   <br/>
    <p>Total Price of Cart is {price}</p>
    </div>
      </>
  )
}

export default DisplayCart