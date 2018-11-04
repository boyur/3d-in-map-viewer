import React from 'react';
import Container from './Container';
import readFile from '../../utils/readFile';

const OBJ = require('webgl-obj-loader');

const Sidebar = ({ setObject }) => {
  const onInputChange = (e) => {
    console.log(e.target.files[0]);

    // loadFile(url, OBJLoader).then(data => {
    //   // Application code here
    // ...
    // });
    readFile(e.target.files[0])
      .then(file => {
        console.log(OBJ);
        const obj = new OBJ.Mesh(file);
        setObject(obj);
      });
  };

  return (
    <Container>
      <div>
        <input type='file' onChange={onInputChange} />
      </div>
    </Container>
  );
};

export default Sidebar;