import React, {Component} from 'react';
import AvatarAndName from './AvatarAndName';

export default class Comment extends Component {
    render() {

        return (
            <div className="datePickerContainer">
                <div className="datePicker">
                    <div className="multiBtnContainer d-flex justify-content-center">
                        <button className="button firstBtn">&lt;</button>
                        <button className="button passedDate">06</button>
                        <button className="button passedDate">07</button>
                        <button className="button passedDate">08</button>
                        <button className="button currDate">09</button>
                        <button className="button commingDate active">10</button>
                        <button className="button commingDate">11</button>
                        <button className="button commingDate">12</button>
                        <button className="button commingDate">13</button>
                        <button className="button commingDate">14</button>
                        <button className="button commingDate">15</button>
                        <button className="button commingDate">16</button>
                        <button className="button commingDate">17</button>
                        <button className="button commingDate">18</button>
                        <button className="button commingDate">19</button>
                        <button className="button lastBtn">&gt;</button>
                    </div>
                </div>
            </div>

        );
    }
}
