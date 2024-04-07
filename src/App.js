import './App.css';
import ResponseExample from './components/Response/ResponseExample';
import Request from './components/Request/Request';
import Responses from './components/Responses/Responses';
import success from './data/data.json';
import error from './data/error-data.json';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(success);
  const setStatusData = (status) => {
    setData(status ? success : error);
  };

  return (
    <div className='main'>
      <h2>Get current user account information</h2>
      <div className='url-main'>
        <div className='get-text'>
          GET
        </div>
        <div className='get-url'>
          https://api-v3.screenmeet.com/v3/me
        </div>
      </div>
      <div className='container'>
        {/* Left Panel */}
        <div className='left-panel'>
          <p>Get current user account information</p>
          <Request />
          <Responses data={data} setStatusData={setStatusData} />
        </div>
        {/* Right Panel */}
        <div className='right-panel'>
          <ResponseExample jsonData={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
