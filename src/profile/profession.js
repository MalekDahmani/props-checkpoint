import PropTypes from "prop-types";


const Profession=(props)=>{
    return(
        <div>
           <h3 style={{color:'red'}}>{props.name}</h3>
        </div>
    )
}

Profession.defaultProps={
    name:"Student"
}

Profession.prototype={
    name: PropTypes.string
}

export default Profession