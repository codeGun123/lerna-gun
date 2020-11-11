import React from 'react';
import Editor from 'editor';
// import test from '@editor/test';
import core from 'core';

const App = () => {
  const value = '来自实例的info';

  return (
    <div>
      <h2>实例页面： {value}</h2>
      <Editor name="big gun" address="cd" />
      {core()}
    </div>
  );
};

export default App;
