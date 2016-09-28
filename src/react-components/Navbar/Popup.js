import React from 'react';

class Popup extends React.Component {
  constructor() {
    super();
  }

  renderPopupContent() {
    return (
      <section className="popup">
        <section className="popup-wrap">
          <img src="/img/close.png" onClick={this.props.hidePopup} />
        </section>
        <section>
          <section className={"popup-content " + this.props.style}>{this.props.children}</section>
        </section>
      </section>
    );
  }

  render() {
    return (
      <section>
        {
          this.props.status
          ? this.renderPopupContent()
          : null
        }
      </section>
    );
  }
}

export default Popup;
