import React, { useState, useEffect } from 'react';

import Cart from '../../assets/cart.png'

import { Container } from './style';

import api from '../../services/api';

interface IProduct{
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

interface Test {
  cart: IProduct[]
}

const Home: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([]);
  const [ cart, setCart ] = useState<IProduct[]>([]);
  

  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  useEffect(() => {
    localStorage.setItem(`@cart`, JSON.stringify(cart));
  }, [cart]);


  const handleCart = ( index: number ) => {
    let product = data[index]
    setCart(cart => [...cart,product]);
  }

  return(
    <Container>
      <div className="nav">
        <div className="logo">
          <img src="https://www.agenciaeplus.com.br/wp-content/uploads/2018/05/ecommercedesigner-300x163.jpg" alt="vtex" width="600px" height="auto" />
        </div>
        <div className="cart">
          <img src={Cart} alt="shopcart" width="150px" height="auto" />
          <h2>( {cart.length} ) - Itens   </h2>
        </div>
      </div>
      <section>
        { data.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="iphone" width="400" height="auto" />
            <h4>{prod.name} </h4>
            <span>{prod.description}  </span>
            <h6>{prod.price}</h6>
            <button onClick={ () => handleCart(index)}> Adicionar ao carrinho</button>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default Home;