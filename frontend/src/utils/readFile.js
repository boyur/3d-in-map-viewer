const readFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      resolve(e.target.result);
    };

    reader.readAsBinaryString(file);
  });

};

export default readFile;