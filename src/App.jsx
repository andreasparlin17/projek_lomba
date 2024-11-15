import React from 'react';
import './index.css';
import { Map, NearestCard, OtherStops, RouteSection } from './components';

function App() {
  return(
    <div className="App mt-14">
      <Map />
      <section className='mt-14 '>
        <section className='w-full h-full flex justify-center'>
          <NearestCard />
        </section>
        <section className='flex justify-center'>
          <OtherStops />
        </section>
        <section className='flex justify-center'>
          <RouteSection />
        </section>
      </section>
    </div>
  )
}

export default App;