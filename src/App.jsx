import React from 'react';
import './index.css';
import { Map, NearestCard, OtherStops } from './components';

function App() {
  return(
    <div className="App">
      <Map />
      <section className='mt-14 '>
        <div className='w-full h-full flex justify-center'>
          <NearestCard />
        </div>
        <div className='flex justify-center'>
          <OtherStops />
        </div>
      </section>
    </div>
  )
}

export default App;