import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Users } from '../../../../lib/collections/user_profiles';
import { Clubs } from '../../../../lib/collections/clubs';

class PersonalInfo extends Component {
  render() {
    let { personalDetail, clubInfo } = this.props;

    if (!personalDetail) return <p>Loading</p>
    console.log(personalDetail);
    return (
      <>
        <div className="container">
          <div className="row">

            <h1 className='col-12 mt-5 mb-5'>Personal Profile:</h1>

            <div className="inputContainer col-12 row mb-3 align-items-center">
              <label htmlFor="" className="col-2">Username:</label>
              <div className="col-8">
                <p className="mr-3 mb-0">{Meteor.user().username}</p>
              </div>
            </div>

            <div className="inputContainer col-12 row mb-3 align-items-center">
              <label htmlFor="" className="col-2">Club:</label>
              <div className="col-8">
                <p className="mr-3 mb-0">{clubInfo ? clubInfo.name : 'Not available'}</p>

              </div>
            </div>

            <div className="inputContainer col-12 row mb-3 align-items-center">
              <label htmlFor="" className="col-2">Email:</label>
              <div className="col-8">
                <input type="email" className="mr-3 form-control" placeholder='email' defaultValue={personalDetail.email} />
              </div>
              <button className='btn btn-warning col-2 pl-3'>Update</button>
            </div>

            <div className="inputContainer col-12 row mb-3 align-items-center">
              <label htmlFor="" className="col-2">Avatar Url:</label>
              <div className="col-8">
                <input type="text" className="mr-3 form-control" placeholder='avatar' defaultValue={personalDetail.avatar} />
              </div>
              <button className='btn btn-warning col-2 pl-3'>Update</button>
            </div>

            <div className="inputContainer col-12 row mb-3 align-items-center">
              <label htmlFor="" className="col-2">Title:</label>
              <div className="col-8">
                <input type="text" className="mr-3 form-control" placeholder='title' defaultValue={personalDetail.title} />
              </div>
              <button className='btn btn-warning col-2 pl-3'>Update</button>
            </div>


          </div>
        </div>
      </>
    )
  }
}

export default withTracker((props) => {
  let personalDetail;
  let clubInfo;
  Meteor.subscribe('clubs')
  if (Meteor.userId()) {
    personalDetail = Users.findOne({ meteorUserId: Meteor.userId() })
  }

  if (personalDetail) {
    clubInfo = Clubs.findOne({ founderId: personalDetail._id })
  }
  
  return {
    personalDetail,
    clubInfo
  }

})(PersonalInfo)