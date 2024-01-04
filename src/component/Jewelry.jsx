import React, { useContext } from 'react'
import '../styles/Jewelry.css'
import  Button  from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import useFetch from '../customHook/useFetch';
import { ToastContainer,toast } from "react-toastify"
import CartContext from '../context/CartContext';



const Jewlery = () => {
  const {handleAddToCart} = useContext(CartContext)
  const { data, loading } = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const notify = () =>{
    toast("An Item has been added",{
      position:toast.POSITION.TOP_CENTER
    });
}
  return (
    <div>
        <div className='component-title'>
            <h2>JEWELRY CATEGORY</h2>

        </div>
        <main className=' mt-4 d-flex card-container-main  '>
            {data.map((datumJewelry)=>{
                const {id,image,price,title} = datumJewelry
                return (
                    <div key={id} className="">
                      <Card style={{ width: "12rem" }}>
                        <Link to={`/SingleProduct/${id}`}>
                          <Card.Img variant="top" src={image} className="w-75 pt-3 " />
                        </Link>
        
                        <Card.Body>
                          <Card.Title>{title.slice(0, 3)}</Card.Title>
        
                          <Card.Text className="fw-bold text-danger">${price}</Card.Text>
                          <Button
                            onClick={() => {
                              handleAddToCart(datumJewelry);
                              notify();
                            }}
                            variant="primary"
                            className="btn-sm"
                          >
                            Add To Cart
                          </Button>
                          <ToastContainer />
                        </Card.Body>
                      </Card>
                    </div>
                  );
            })}

        </main>
    </div>
  )
}

export default Jewlery