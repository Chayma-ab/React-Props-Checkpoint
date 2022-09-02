import React from 'react'
import PropTypes from "prop-types";


function Profile(props) {

  const styleObject = { color: "red" , outline: 'auto' }

  const {
    FullName,
    Bio,
    Profession,
    handelAlert
  } = props ;

  

  var user= "Chaima";
  return (
    <div>
      <h1> {FullName} </h1>
      <h1> {Bio} </h1>
      <h1> {Profession} </h1>
      <button onClick={ ()=> handelAlert(user) }style={styleObject}> Click me </button>
      {props.children}
    </div>
  )
}

Profile.defaultProps = {
  FullName : "AB_Chaima",
  Bio : "BIO",
  Profession : "Engineer"

}


Profile.propTypes = {
  FullName: PropTypes.string ,
  Bio : PropTypes.string ,
  Profession: PropTypes.string ,
  handelAlert: PropTypes.func,
};

export default Profile