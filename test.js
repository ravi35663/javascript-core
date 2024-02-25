setImmediate(() => {
    console.log('This will be executed first');
  });
  
  setTimeout(() => {
    console.log('This will be executed second');
  }, 0);
  
  setImmediate(() => {
    console.log('This will be executed third');
  });