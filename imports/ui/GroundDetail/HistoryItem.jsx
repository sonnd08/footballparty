import React, {Component} from 'react';

export default class HistoryItem extends Component {
    render() {

        return (
            <div className="historyItemContainer mb-4">
                <img src={this.props.img || "https://dummyimage.com/100x100/000000/ffffff"} alt=""/>
                <div className="info">
                    <p className="name">{this.props.name}</p>
                    <p className="date">{this.props.date}</p>
                    <div className="teamInfo">
                        <span className="number">{this.props.numberOfTeams}</span>
                        <span className="text">&nbsp;Teams</span>
                    </div>
                    <div className="playerInfo">
                        <span className="number">{this.props.numberOfPlayers}</span>
                        <span className="text">&nbsp;Players</span>
                    </div>
                </div>
            </div>

        );
    }
}