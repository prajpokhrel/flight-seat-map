const Facility = (props) => {
  const left = `${props.y*5.5}em `;
  const top = `${props.x*5.5}em`;

  return (
    <div className = 'seat-contents facility' style={{position: "absolute", left:left, top:top, backgroundColor:"#F5EE9E"}}>
      <p>{props.code}</p>
    </div>
  )
}

export default Facility;