import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: auto;
 
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  section {
    height: 60vh;
    width: 100%;
    background: #e2e2;
    display: flex;
    justify-content: space-around;
    padding: 30px;

    .product-content{
      display: grid;
      text-align: center;
      height: 500px;
      background: #fff;
      border-radius: 12px;
      padding: 12px;
    }
  }
`