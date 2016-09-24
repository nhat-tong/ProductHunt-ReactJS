import React from 'react';
import ProductList from '../Product/ProductList';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      ProductList: [
        {
          id: 1,
          name: 'CodeCademy',
          link: 'https://codecademy.com',
          media: '/img/codecademy.jpeg',
          upvote: 169,
          description: 'Code for anyone',
          marker: {
            name: 'hieu',
            avatar: '/img/hieu.jpeg'
        }
      },
        {
          id: 2,
          name: 'Code4Startup',
          link: 'https://code4startup.com',
          media: '/img/code4startup.jpeg',
          upvote: 169,
          description: 'Code for startups',
          marker: {
            name: 'leo',
            avatar: '/img/leo.jpeg'
        }
      }
      ]
    };
  }

  render() {
    return (
      <section>
        <header>
          <img src="./img/banner.jpeg" width="100%"/>
        </header>

        <section>
          <section className="container">
            {
              this.state.ProductList
              ?
              <ProductList productList={this.state.ProductList} />
              :
              null
            }
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
