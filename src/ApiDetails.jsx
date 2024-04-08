import './App.css';
import ResponseExample from './components/RightPanel/ResponseExample';
import Request from './components/Request/Request';
import Responses from './components/Responses/Responses';
import { useState } from 'react';
import RequestSample from './components/RightPanel/RequestSample';
import Parameters from './components/RightPanel/Parameters';
import LoadingIcon from './components/LoadingIcon';

const ApiDetails = ({ apiDetails }) => {
  const prodUrl = apiDetails.servers.find(({ type }) => type === 'PROD')?.url;
  const success = require('./data/' + apiDetails.files.success);
  const error = require('./data/' + apiDetails.files.error);
  const [data, setData] = useState(success);
  const [url, setUrl] = useState(prodUrl);
  const [showLoadingIcon, setShowLoadingIcon] = useState(false);
  const setStatusData = (status) => {
    setData(status ? success : error);
  };
  return (
    
    <div className='main'>
      {showLoadingIcon && <LoadingIcon />}

      {apiDetails.displayName === 'authorization' ? (
        <div>
        <h1 id="welcome-to-stackedit-">Welcome to StackEdit!</h1>
        <p>Hi! I&#39;m your first Markdown file in <strong>StackEdit</strong>. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the <strong>file explorer</strong> on the left corner of the navigation bar.</p>
        <h1 id="files">Files</h1>
        <p>StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible <strong>offline!</strong></p>
        <h2 id="create-files-and-folders">Create files and folders</h2>
        <p>The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the <strong>New file</strong> button in the file explorer. You can also create folders by clicking the <strong>New folder</strong> button.</p>
        <h2 id="switch-to-another-file">Switch to another file</h2>
        <p>All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.</p>
        <h2 id="rename-a-file">Rename a file</h2>
        <p>You can rename the current file by clicking the file name in the navigation bar or by clicking the <strong>Rename</strong> button in the file explorer.</p>
        <h2 id="delete-a-file">Delete a file</h2>
        <p>You can delete the current file by clicking the <strong>Remove</strong> button in the file explorer. The file will be move</p>
        </div>
      ) : (
        <>
        <h2>{apiDetails.displayName}</h2>
      <div className='url-main'>
        <div className='get-text'>
          {apiDetails.method} 
        </div>
        <div className='get-url'>
          {apiDetails.url}
        </div>
      </div>
      <div className='container'>
        {/* Left Panel */}
        <div className='left-panel'>
          {apiDetails.detailsText}
          {/* {apiDetails.detailsText.map((txt, i) => <p key={i}>{txt}</p>)} */}
          <Request />
          <Responses data={data} setStatusData={setStatusData} />
        </div>
        {/* Right Panel */}
        <div className='right-panel'>
          <Parameters apiDetails={apiDetails} setUrl={setUrl} setShowLoadingIcon={setShowLoadingIcon} />
          <ResponseExample jsonData={data} />
        </div>
      </div>
        </>
      )}


      

      
    </div>
  );
}

export default ApiDetails;
