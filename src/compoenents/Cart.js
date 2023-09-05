import React from 'react'
import { Button, Container, Image, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clear, deleteFromCart } from '../RTK/Slices/cartSlice';

const Cart = () => {
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch()
  const totalprice = cart.reduce((acc, product)=>{
    acc += product.price * product.quantity;
    return acc 
  }, 0)
  return (
    <Container style={{textAlign:'center', marginTop:'20px'}}>
      <h1 >Welcom To Cart</h1>
      <Button variant='danger' style={{width:'400px'}} onClick={()=> dispatch(clear())}>Clear Cart</Button>
      <h1 style={{marginTop:'20px',background:'black',color:'white',borderRadius:'10px',padding:'10px'}}>Total Praice: {totalprice.toFixed(2)}$</h1>
      <Table striped bordered hover style={{marginTop:'20px'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Img</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product)=>(
          <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><Image src={product.image} alt={product.title} style={{width:'150px', height:'100px',}}/></td>
          <td>{product.price}$</td>
          <td>{product.quantity }</td>
          <td><Button variant='danger' onClick={()=> dispatch(deleteFromCart(product))}>delete</Button></td>
        </tr>
        ))}
        
      </tbody>
    </Table>
    </Container>
  )
}

export default Cart