import './App.css';
import ResponseExample from './components/Response/ResponseExample';
import JsonViewer from './components/Body/Body';
import data from './data.json';

function App() {
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
        <div className='left-panel'>
          <p>Get current user account information</p>
          <JsonViewer data={data} />
        </div>
        <div className='right-panel'>
          <ResponseExample />
        </div>
      </div>
    </div>
  );
}

export default App;
