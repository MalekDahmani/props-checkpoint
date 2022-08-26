import PropTypes from "prop-types";

const HandleName=(props)=>{
    return(
      <div>
         <button onClick={() => props.alertMyInput(`Malek Dahmani `)}>
     ClickMe
   </button>
      </div>
    )
}

export default HandleName
