import { seatMap } from './data/seatmap';
import { useState } from 'react';
import Deck from './components/Deck';
import axios from 'axios';

function App() {

  const [formData, setFormData] = useState({
    bookingId: ''
  });
  const [flightSeatMap, setFlightSeatMap] = useState({});

  const inputChangeHandler = (event) => {
    event.preventDefault();
    setFormData({...formData, [event.target.name]: event.target.value});
  }

  const getFlightSeatMap = async (event) => {
    event.preventDefault();
    // let url = `https://booking-api.codesathi.com/api/v1/shopping/seatmaps?flight-orderId=${bookingReference}`;
    const seats = await axios.get(`https://booking-api.codesathi.com/api/v1/shopping/seatmaps?flight-orderId=${formData.bookingId}`);
    setFlightSeatMap({...seats.data});
    console.log(seats.data);
  }

  return (
    <div className="App">
      <div className='container'>

        <div className='row mb-2'>
          <div className='col-10 text-center m-auto'>
            <h1>Flight Seat Map API</h1>
            <span className='lead'>Please enter your booking id to select seat map.</span>
            <br></br>
            <input onChange={inputChangeHandler} name="bookingId" className='me-2' style={{width: '60%'}} type="text" placeholder="Enter your booking id..." /> 
            <button onClick={getFlightSeatMap} style={{width: '10%'}}>Fetch</button>
          </div>
        </div>


        <div className='seat-map-wrapper'>

          {Object.keys(flightSeatMap).length !== 0 ? flightSeatMap.data[0].decks.map((deck, i) => (
            <Deck deck={deck} key={i} />
          )) : 'Loading your flight data....'}
        </div>
      </div>
    </div>
  );
}

export default App;
