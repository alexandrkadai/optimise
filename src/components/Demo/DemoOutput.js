import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  const some = props.show;
  console.log(some + 'Demo');
  return <p>{some ? 'Its a paragraph with money!' : ''}</p>;
};

export default React.memo(DemoOutput);
