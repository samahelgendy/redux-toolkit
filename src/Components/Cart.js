import { useDispatch, useSelector } from "react-redux";
import {Image} from 'antd'
import { clear, removeFromCart } from "../rtk/products/product-cart";
function Cart (){
    const carts = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totalPrice = carts.reduce( (acc , cart) =>{
        acc += cart.price * cart.quantity;
        return acc;
    } , 0)
    return(
          <div className="container">
         <h1>Welcome To Cart</h1>
         <h5>total price : {totalPrice.toFixed(2)}</h5>
         <button className="btn btn-primary mt-3 mb-3" onClick={()=>{dispatch(clear())}}>Clear Carts</button>
         <table className="table table-striped">
<thead>
 <tr>
 <th>ID</th>
  <th>Image</th>
  <th>Title</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Action</th>
 </tr>
</thead>
<tbody>
  
 {carts.map( (cart) => (
  <tr>
      <td>{cart.id}</td>
      <td><Image src={cart.image} className="img" style={{width:'50px' , height:"50px"}} /></td>
      <td>{(cart.title).slice(0 , 20)}...</td>
      <td>${cart.price}</td>
      <td>{cart.quantity}</td>
      <td><button className="btn btn-danger" onClick={ () =>{dispatch(removeFromCart(cart))}}>Delete</button></td>
  </tr>
 ))}
  
</tbody>
</table>
         </div>
     )
}
export default Cart;