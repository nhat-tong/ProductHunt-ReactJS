import React from 'react';

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

            <ul className="product-list">
              <li className="product-item">
                <a className="upvote-button" href="#">
                  <span>
                    <i className="fa fa-sort-asc"></i>
                  </span>
                  {this.state.ProductList[0].upvote}
                </a>
                <img className="product-item-media" src={this.state.ProductList[0].media} />
                <section className="product-item-info">
                  <a href="#">
                    <h2>{this.state.ProductList[0].name}</h2>
                  </a>
                  <p>{this.state.ProductList[0].description}</p>
                    <a href="#">
                      <img className="small-avatar" src={this.state.ProductList[0].marker.avatar} />
                    </a>
                </section>
                <a className="product-item-link" href={this.state.ProductList[0].link}>
                  <span>
                    <i className="fa fa-external-link"></i>
                  </span>
                </a>
              </li>

              <li className="product-item">
                <a className="upvote-button" href="#">
                  <span>
                    <i className="fa fa-sort-asc"></i>
                  </span>
                  {this.state.ProductList[1].upvote}
                </a>
                <img className="product-item-media" src={this.state.ProductList[1].media} />
                <section className="product-item-info">
                  <a href="#">
                    <h2>{this.state.ProductList[1].name}</h2>
                  </a>
                  <p>{this.state.ProductList[1].description}</p>
                    <a href="#">
                      <img className="small-avatar" src={this.state.ProductList[1].marker.avatar} />
                    </a>
                </section>
                <a className="product-item-link" href={this.state.ProductList[1].link}>
                  <span>
                    <i className="fa fa-external-link"></i>
                  </span>
                </a>
              </li>
            </ul>


          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
