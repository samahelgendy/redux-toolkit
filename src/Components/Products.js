import { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { addToCart } from "../rtk/products/product-cart";
import { fetchProducts } from "../rtk/products/product-slice";
import {Typography , Card ,Image , Badge, Button, message, Rate} from 'antd';
import {showMessage} from '../API/index';

function Products (){
     const dispatch = useDispatch();
    const products = useSelector( state => state.products);
    useEffect( ()=>{
        dispatch(fetchProducts());
    } ,[])
    return(
        <div className="container">
            <div className="row">
                {products.map( (product) =>  {return(
                    (
                        
                        <div className="col text-center pt-5 mt-3" key={product.id}>
  
                        <div className="card"  style={{width: "18rem" , fontFamily:"monospace"}}>
                        <Typography.Text className="card-title pt-4" style={{fontFamily:"monospace" , fontSize:18}}>{product.title}</Typography.Text>
                        <Image className="imageProduct" src={product.image} style={{height:200 , width:120 }} />
                        <div className="card-body">
                        
                        <Card.Meta
                       
                       description={<Typography.Paragraph ellipsis={{rows:2 , expandable:true , symbol:"more"}}>{product.description}</Typography.Paragraph>}
                    
                      
                       ></Card.Meta>
                        
                        <div className="productPrice">
                       <Typography.Text className="card-text">${product.price}</Typography.Text>
                       <Typography.Paragraph className="card-text" delete type="danger">${(product.price + 30).toFixed(2)}</Typography.Paragraph>
                       </div>                        
                        <AddProductToCart item={product}/>
                       
                        </div>
                        </div>
                        
                        </div>
                        
                    )
                )})}

            </div>
        </div>
    )
}

export function AddProductToCart({item}){
    const dispatch = useDispatch();
    const [loading  , setLoading] = useState(false);
    const AddProduct =() =>{
        setLoading(true);
        showMessage(item.id).then(res =>{
        message.success(`${item.title} Has Been Added To Cart`);
        setLoading(false);
      })
    }
    return  <Button onClick={()=>{
        AddProduct()
        {dispatch(addToCart(item))}
    }} type="link" loading={loading}>Add To Cart</Button> 
}
export default Products;