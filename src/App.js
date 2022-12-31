import React, {
  useState
} from "react";
import QrReader from "react-web-qr-reader";

const Example = () => {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320
  };

  const [result, setResult] = useState("Scan any QR");

  const handleScan = (result) => {
    if (result) {
      setResult(result.data);
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
        onError={handleError}
        onScan={handleScan}
      /><br/><br/><br/><br/>
      <a href={result}>{result}</p>
    </>
  );
};

export default Example;
