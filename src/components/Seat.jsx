import {useState} from 'react';
import CommonModal from "./CommonModal";

const Seat = (props) => {

  const [modalToggle, setModalToggle] = useState(false);


  const color = props.availability === 'AVAILABLE' ? "#37B880" : "#E52528";
  const style = {
    position: "absolute",
    left: `${props.y*5.5}em`, 
    top: `${props.x*5.5}em`,
    backgroundColor: color,
    color: "white"
  }

  const handleModalToggle = () => {
    setModalToggle(!modalToggle);
  }

  return (
    <>
      <div onClick={handleModalToggle} className='seat-contents seat' style={style}>
        <p>{props.number}</p>
      </div>
      <CommonModal number={props.number} cabin={props.cabin} status={props.status} modalOpen={modalToggle} modalClose={handleModalToggle} />
    </>
  )
}

export default Seat;