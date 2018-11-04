import React from 'react';
import Container from './Container';
import readFile from '../../utils/readFile';
import parser from '../../utils/parser';

const Sidebar = ({ setObject }) => {
  const onInputChange = (e) => {
    readFile(e.target.files[0])
      .then(file => {
        const obj = parser(file);
        setObject(obj);
      });
  };

  return (
    <Container>
      Sidebar
      <div>
        <input type='file' onChange={onInputChange} />
      </div>
    </Container>
  );
};

export default Sidebar;