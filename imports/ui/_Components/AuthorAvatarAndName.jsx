import React, { Component } from 'react';

export default class AuthorAvatarAndName extends Component {
  render() {
    return (
      <div className="authorAvatarAndNameContainer">
        <div className="author">
          <div className="avatar">
            <img src={this.props.img || "https://dummyimage.com/100x100/000000/ffffff"} alt="" />
          </div>
          <p className="authorName">{this.props.name || 'Hao Nguyen'}</p>
        </div>
      </div>
    );
  }
}