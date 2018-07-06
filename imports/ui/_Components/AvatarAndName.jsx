import React, {Component} from 'react';

export default class AvatarAndName extends Component {
  
    render() {
        let classes = `${this.props.classes || ''}`
        return (
            <span className={`avatarAndNameContainer ${classes}`}>
                <div className="avatar mr-2">
                    <img
                        src={this.props.img || "https://dummyimage.com/100x100/000000/ffffff"}
                        alt=""/>

                    {this.props.rating}
                </div>
                <div className="info">
                    <p className="name">{this.props.name || "User name"}</p>
                    {this.props.ratingObj}
                    <p className="additional">{this.props.additional || "Additional info"}</p>
                    <div className="additional2">{this.props.additional2}</div>
                </div>
            </span>

        );
    }
}