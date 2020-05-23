import React, { Component } from 'react';


class Products extends Component {

      constructor(props) {
        super(props);

        this.state = {
          products : null
        };
      }

      componentDidMount() {
          this.renderMyData();
      }

      renderMyData(){
          fetch('http://localhost:8080/products',{headers:{"Access-Control-Allow-Origin": "https://localhost"}})
              .then((response) => response.json())
              .then((responseJson) => {
                console.log(responseJson);
                this.setState({ products : responseJson })
              })
              .catch((error) => {
                console.error(error);
              });
      }

      render() {
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
          {this.state.products}
          </table>
          </div>
        );
      }
}

export default Products;
/*


import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class App extends React.Component  {

    constructor(props) {
      super(props);

      this.state = {
        data : null
      };
    }

    componentWillMount() {
        this.renderMyData();
    }

    renderMyData(){
        fetch('https://your url')
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({ data : responseJson })
            })
            .catch((error) => {
              console.error(error);
            });
    }

    render(){
        return(
            <View>
                {this.state.data ? <MyComponent data={this.state.data} /> : <MyLoadingComponnents /> }
            </View>
        );
    }
}
*/
