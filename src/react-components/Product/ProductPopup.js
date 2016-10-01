import React from 'react';
import Popup from '../Navbar/Popup';

class ProductPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {
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
      comments: [
        {
          name: "Leo",
          avatar: "/img/leo.jpeg",
          content: "I love this product"
        },
        {
          name: "Jonny",
          avatar: "/img/hieu.jpeg",
          content: "I love this product"
        }
      ]
    };
  }

  renderUpvoteButton() {
  return (
    <a className="upvote-button" href="#">
      <span>
        <i className="fa fa-sort-asc"></i>
      </span>
      {this.state.product.upvote}
    </a>
  );
}

  renderHeader() {
    return (
      <header style={{backgroundImage: 'url(' + this.state.product.media + ')'}}>
        <section className="header-shadow">
          <h1>{this.state.product.name}</h1>
          <p>{this.state.product.description}</p>
          <section>
            {this.renderUpvoteButton()}
            <a className="getit-btn" href={this.state.product.link} target="_blank">GET IT</a>
          </section>
        </section>
      </header>
    );
  }

  renderBodyDiscussion() {
    return (
      <section className="discussion">
        <h2>Discussion</h2>
        <section className="post-comment">
          <img className="medium-avatar" src="/img/leo.jpeg" />
          <input placeholder="What do you think of this product?" />
        </section>
        {this.renderComments()}
      </section>
    );
  }

  renderBody() {
    return (
      <section className="product-popup-body">
        <main>
          {this.renderBodyDiscussion()}
        </main>
      </section>
    );
  }

  renderComments() {
    return (
      <ul className="comment-list">
        {
          this.state.comments.map(function(comment, idx){
            return (
              <li key={idx}>
                <img className="medium-avatar" src={comment.avatar} />
                <section>
                  <strong>{comment.name}</strong>
                  <p>{comment.content}</p>
                </section>
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <Popup {...this.props} style="product-popup">
        {this.renderHeader()}
        {this.renderBody()}
      </Popup>
    );
  }
}

export default ProductPopup;
