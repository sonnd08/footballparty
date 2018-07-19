import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Users } from '../../../../lib/collections/user_profiles';
import { Clubs } from '../../../../lib/collections/clubs';
import { Meteor } from 'meteor/meteor';

class PersonalInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: true,
      updatedEmail: '',
      updatedAvatar: '',
      updatedTitle: '',
      updatedName: '',
    }
  }

  componentDidMount() {
    this.setState({ editing: false })
  }
  letsUpdateData = () => {
    this.setState({ editing: false })
    console.log(this.state);
    if(this.props.personalDetail){
      Users.update({_id: this.props.personalDetail._id},{...this.props.personalDetail,...{
        email:this.state.updatedEmail,
        avatar:this.state.updatedAvatar,
        title:this.state.updatedTitle,
        name:this.state.updatedName,
      }})
    }
  }

  render() {
    let { personalDetail, clubInfo } = this.props;
    let editing = this.state.editing;
    if (!personalDetail) return <p>Loading</p>
    if (editing)
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
                <label htmlFor="" className="col-2">Full name:</label>
                <div className="col-8">
                  <input type="email" className="mr-3 form-control" placeholder='email'
                    value={this.state.updatedName}
                    onChange={(e) => this.setState({ updatedName: e.target.value })}
                  />
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
                  <input type="email" className="mr-3 form-control" placeholder='Email'
                    value={this.state.updatedEmail}
                    onChange={(e) => this.setState({ updatedEmail: e.target.value })}
                  />
                </div>
              </div>

              <div className="inputContainer col-12 row mb-3 align-items-center">
                <label htmlFor="" className="col-2">Avatar Url:</label>
                <div className="col-8">
                  <input type="text" className="mr-3 form-control" placeholder='Avatar'
                    value={this.state.updatedAvatar}
                    onChange={(e) => this.setState({updatedAvatar: e.target.value})}
                  />
                </div>
              </div>

              <div className="inputContainer col-12 row mb-3 align-items-center">
                <label htmlFor="" className="col-2">Title:</label>
                <div className="col-8">
                  <input type="text" className="mr-3 form-control" placeholder='Title'
                    value={this.state.updatedTitle}
                    onChange={(e) => this.setState({updatedTitle: e.target.value})}
                  />
                </div>
              </div>

            </div>
            <div className="row justify-content-center">
              <button className='btn btn-success col-3 pl-3' onClick={this.letsUpdateData}>Done</button>
            </div>
          </div>
        </>
      )
    ////////////////////////////////////////////////////

    if (!editing)
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
                <label htmlFor="" className="col-2">Fullname:</label>
                <div className="col-8">
                  <p className="mr-3 mb-0">{personalDetail.name || 'Not available'}</p>
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
                  <p className="mr-3">{personalDetail.email}</p>
                </div>
              </div>

              <div className="inputContainer col-12 row mb-3 align-items-center">
                <label htmlFor="" className="col-2">Avatar Url:</label>
                <div className="col-8">
                  <p className="mr-3">{personalDetail.avatar}</p></div>
              </div>

              <div className="inputContainer col-12 row mb-3 align-items-center">
                <label htmlFor="" className="col-2">Title:</label>
                <div className="col-8">

                  <p className="mr-3">{personalDetail.title}</p>
                </div>
              </div>

            </div>
            <div className="row justify-content-center">
              <button className='btn btn-warning col-3 pl-3'
                onClick={() => {
                  this.setState({
                    editing: true,
                    updatedEmail: personalDetail.email,
                    updatedAvatar: personalDetail.avatar,
                    updatedTitle: personalDetail.title,
                    updatedName: personalDetail.name

                  })
                }}>Update</button>
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