import { useEffect, useState } from 'react';
import ApiDetails from './ApiDetails';
import apiData from './data/apis.json';
import './App.css';

function App() {
  const data = apiData.data;
  const [activeApi, setActiveApi] = useState(data[0]);
  const [rerender, setRerender] = useState(false);

  const apiClickHandler = (apiDetails) => {
    if (activeApi.id === apiDetails.id) return;
    setActiveApi(apiDetails);
    setRerender(true);
  };

  useEffect(() => {
    rerender && setRerender(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerender]);

  return (
    <div className='container'>
      <div className='menu'>
        <div className='menu-header'>API Reference</div>
        <div>
          {data.map((d) => {
            const name = 'menu-item ' + (activeApi.id === d.id ? 'menu-active' : '');
            return <div
              className={name}
              onClick={() => apiClickHandler(d)}
              key={d.id}
            >
              <span>{d.displayName}</span>
              {d.displayName === 'authorization'? (
        <p></p>
      ) : (
        <span className='float-right color-green'>{d.method}</span>
      )}


              
            </div>
          })}
        </div>
      </div>
      <div className='api-details'>
        {!rerender && <ApiDetails apiDetails={activeApi} />}
      </div>
    </div>
  );
}

export default App;
