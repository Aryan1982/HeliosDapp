// import React,{useState} from 'react'
// import { create } from 'ipfs-http-client'
// // connect to the default API address http://localhost:5001
// const client = create()

// function UploadFile() {
//   const [files, setFiles] = useState([]);
//   const [ipfsHash, setIpfsHash] = useState(null);

//   const handleChange = (e) => {
//     setFiles(e.target.files[0]);
//   }


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Upload the files to IPFS
//     for (const file of files) {
//       const res = await client.add(file);
//       console.log(res);
//     }
//   }

//   return (
//   	<div className = 'uploadCard'>
//     <form onSubmit={handleSubmit}>
//       <input type="file" multiple onChange={handleChange} className="inputfile"/>
//       <button type="submit" className="submitfile">Submit</button>
//       {ipfsHash && <div>IPFS Hash: {ipfsHash}</div>}
//     </form>
//     </div>
//   );
// }

// export default UploadFile;

import React, { useState } from 'react';
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";


const client = create()

function UploadFile() {
  // const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const form = event.target as HTMLFormElement;
  //   const files = (form[0] as HTMLInputElement).files;

  //   if (!files || files.length === 0) {
  //     return alert("No files selected");
  //   }

  //   const file = files[0];
  //   // upload files
  //   const result = await (ipfs as IPFSHTTPClient).add(file);

  //   setImages([
  //     ...images,
  //     {
  //       cid: result.cid,
  //       path: result.path,
  //     },
  //   ]);

  //   form.reset();
  // };

  return (
    <div className="uploadCard">
    <form>
      <input name="file" type="file" />
      <button type="submit" className="submitfile">Submit</button>
    </form>
    </div>
  );
}
export default UploadFile;