import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  return <MyParagraph>{props.show ? 'money Its a paragraph with money!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);
