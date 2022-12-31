import './App.css';
import {useEffect,useState} from 'react'
import QrReader from 'react-web-qr-reader';


function App() {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const [result, setResult] = useState('No result');

  const handleScan = (result) => {
    if (result) {
      setResult(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };
  return (
    <>
      <QrReader
        delay={delay}
        style={previewStyle}
        // onError={handleError}
        onScan={handleScan}
      /><br/><br/><br/><br/>
      <a href={result}>{result}</a>
    </>

     );
}

export default App;
