const FullName=(props)=>{
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}
FullName.defaultProps={
    name:"Malek Dahmani"
}

export default FullName