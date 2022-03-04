const Exit = (props) => {

  const styleLeft = {
    position: "absolute",
    left: "-65px", 
    top: `${props.row*5}em`,
    backgroundColor: "#499167",
  }

  const styleRight = {
    position: "absolute",
    left: "950px", 
    top: `${props.row*5}em`,
    backgroundColor: "#499167"
  }
  return <div className="exit" >
    <span style={styleLeft}>EXIT</span>
    <span style={styleRight}>EXIT</span>
  </div>
  }
  
  export default Exit;