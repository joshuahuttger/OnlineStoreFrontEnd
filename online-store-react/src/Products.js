import React, { Component } from 'react';


class Products extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: null
    };
  }

  componentDidMount() {
    this.renderMyData();
  }

  renderMyData() {
    fetch('http://localhost:8080/products')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({ products: responseJson })
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("exiting renderMyData()");
  }

  render() {
    return (
      <div>
        <h1>These are the products</h1>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
            {this.state.products}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;
