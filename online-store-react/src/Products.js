import React, { Component } from 'react';

function getProductsFromAPI(){
  const request = new XMLHttpRequest();
  request.open('GET','http://localhost:8080/products',true);
  request.onload = function(){
    console.log("something here");
    const data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400){
      data.forEach(thing =>{
        console.log(thing);
      })
    }else{
      console.log("error");
    }
  }
  console.log("chicken tenders");
  return [];
}

function getProducts(){
  const productsFromAPI = getProductsFromAPI();
  const products = [];
  for(const [id, name, desc, price] of productsFromAPI){
    products.push(<tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{desc}</td>
                <td>{price}</td>
              </tr>);
  }
  return products;
}

class Products extends Component {

  render() {
    const products = getProducts();
    return (
      <div>
    <h1>These are the products</h1>
      <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
      </tr>
      {products}
      </table>
      </div>
    );
  }
}

export default Products;
