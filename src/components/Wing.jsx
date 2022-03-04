const Wing = (props) => {
  const leftVal = props.orientation === 'left' ?  "-60px" : "1060px"
  const style = {
    backgroundColor: "#99B2DD",
    width: "50px",
    height: `${(props.end-props.start)*5.5}em`,
    position:"absolute",
    top:`${props.start*5.5}em`,
    left: leftVal
  }
  return <div className="wing" style={style}>
  </div>
  }
  
  export default Wing;