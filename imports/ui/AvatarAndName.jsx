import React, {Component} from 'react';

export default class AvatarAndName extends Component {
    render() {
        return (
            <span className="avatarAndNameContainer">
                <div className="avatar mr-2">
                    <img
                        src={this.props.img || "https://dummyimage.com/100x100/000000/ffffff"}
                        alt=""/>
                </div>
                <div className="info">
                    <p className="name">{this.props.name || "User name"}</p>
                    {this.props.ratingObj}
                    <p className="additional">{this.props.additional || "Additional info"}</p>
                </div>
            </span>

        );
    }
}