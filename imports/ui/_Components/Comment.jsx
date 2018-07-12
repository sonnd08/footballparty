import React, {Component} from 'react';
import AvatarAndName from './AvatarAndName';

export default class Comment extends Component {
    render() {

        return (
            <div className="commentContainer">
                <AvatarAndName 
                    img={this.props.img}
                    name={this.props.name}
                    additional={this.props.additional}
                    ratingObj={this.props.ratingObj}
                />
                <p className="cmt">{this.props.cmt}</p>
            </div>

        );
    }
}