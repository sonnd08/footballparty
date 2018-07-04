import React, { Component } from 'react';


export default class Rating extends Component {
	render() {
    let ratingValue = this.props.value * 1;
    let fullStar = Math.floor(ratingValue);
    let halfStar = ratingValue !== fullStar;
    let content = [];

    for(let i =0; i< fullStar; i++){
      content.push("icon-star-full")
    };
    if(halfStar) content.push("icon-star-half")
    console.log('ratingValue - fullStar - halfStar');
    console.log(ratingValue);
    console.log(fullStar);
    console.log(halfStar);
    console.log(ratingValue - fullStar - halfStar);
    for(let i =0; i< 5 - ratingValue - halfStar; i++){
      content.push("icon-star-empty")
    }
    
		return (
      <div className="ratingContainer">
        {content.map((value, i)=>{
          return <i className={value} key={i}></i>
        })}
      </div>
		);
	}
}