import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../../stores/ProductStore';
import Actions from '../../actions';

@connectToStores
class Upvote extends React.Component {
  constructor() {
    super();
  }

  handleVote = () => {
    Actions.addVote(this.props.pId, this.props.user.id);
  };

  static getStores() {
    return [ProductStore];
  }

  static getPropsFromStores() {
    return ProductStore.getState();
  }

  render() {
    return (
      <a className="upvote-button" href="#" onClick={this.handleVote}>
        <span>
          <i className="fa fa-sort-asc"></i>
        </span>
        {this.props.upvote}
      </a>
    );
  }
}

export default Upvote;
