import PropTypes from "prop-types";


const Bio=(props)=>{
    return(
        <div>
            <p style={{backgroundColor:"grey",color:"white"}}>{props.text}</p>
        </div>
    )
}

Bio.defaultProps={
    text:"Hello Everyone I'm taking a web development course and I'm learning new skills"
}

Bio.prototype={
    text:PropTypes.string
}

export default Bio