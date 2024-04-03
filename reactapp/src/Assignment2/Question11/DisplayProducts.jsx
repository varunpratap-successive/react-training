import React, { useContext } from 'react'
import { ShoppingContext } from './ShoppingApp';
function DisplayProducts() {
 
  const products=[
    {
      phonename:"OnePlus",
      phoneprice:50000  
    },
      {
        phonename:"APPLE",
        phoneprice:80000  
      },
    ]
 const {cart,setCart}=useContext(ShoppingContext);
 const{price,setPrice}=useContext(ShoppingContext);

const addtocart=(element,index)=>{
  setCart([...cart,element])
  setPrice(price+element.phoneprice);   
}
  return (
    <>
    <div style={{display:"flex",direction:"row"}}>
        { 
        products.map((element,index) => { 
            return <div key={index} style={{border:"2px solid black" ,width :"100px" ,margin:"20px"}}>
        <p>{element.phonename}</p>
        <p>{element.phoneprice}</p>
        <button onClick={()=>addtocart(element,index)} >Add this item </button>
        </div>
      }) 
        }
    </div>
      </>
  )
}

export default DisplayProducts