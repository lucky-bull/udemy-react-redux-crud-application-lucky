import React from 'react';

function App() {
  return(
    <React.Fragment>
      <label htmlFor="bar">aaa</label>
      <input type="text" onChange={() => {console.log('change')}}></input>
    </React.Fragment>
  )
}

export default App;
