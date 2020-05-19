import React, { Component } from 'react';


class Products extends Component {

  render() {
    const elements = [[123,"my name","description thing",1.78]];
    const items = [];
    for(const [id, name, desc, price] of elements){
      items.push(<tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{desc}</td>
                  <td>{price}</td>
                </tr>);
    }
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
      {items}
      </table>
      </div>
    );
  }
}

export default Products;
