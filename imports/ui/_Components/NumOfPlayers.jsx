import React, {Component} from 'react';


export default class NumOfPlayers extends Component {
    render() {
        return (
            <div className="numOfPlayersContainer">
                <p className="numOfPlayers">{this.props.value || '8 Players'}</p>
            </div>
        );
    }
}