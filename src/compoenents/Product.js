import React, { useEffect } from 'react'
import Slider from './Slider'
import {  Card, Col, Container, Row, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../RTK/Slices/productsSlice';
import { addToCart } from '../RTK/Slices/cartSlice';
const Product = () => {

    const products = useSelector((state)=>state.products);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    }, [])

  
  return (
		<>
		<Slider/>
    <Container>
			<Row xs={1} md={2} lg={4}>
				{products.map((product)=> (
					<Col key={product.id}style={{marginTop:'20px'}}>
						<Card className='h-100 text-center p-4' >
						<Card.Img variant="top" className='img' height='250px'  src={product.image}  alt={product.title}/>
						<Card.Body>
							<h5 className='card-title mb-0'>{product.title.substring(0, 12)}...</h5>
							<p className='card-text lead fw-bold'>
									${product.price}
							</p>
							
							<Link className='btn btn-outline-dark' onClick={()=> dispatch(addToCart(product))}>
							Add To Cart
							</Link>
							
						</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
    </Container>
		</>
  )
}
export default Product;