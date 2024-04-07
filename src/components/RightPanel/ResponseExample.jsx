import React from 'react';
import JsonWithLineNumbers from './JsonWithLineNumbers';
import './Response.css';

const ResponseExample = (jsonData) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonData)
      .then(() => {
        console.log('Text copied to clipboard:', jsonData);
      })
      .catch(error => {
        console.error('Failed to copy text:', error);
      });
  };

  return (
    <div className='response-container' style={{ marginTop: 50 }}>
      <div className='response-header'>
        <div className='response-example'>Response Example</div>
        <div className='copy-button' onClick={copyToClipboard}>Copy</div>
      </div>
      <div className='response-json'>
        <JsonWithLineNumbers data={jsonData} />
      </div>
    </div>
  );
};

export default ResponseExample;