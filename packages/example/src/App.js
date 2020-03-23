import React from 'react';
import editor from 'editor';
import test from '@editor/test';


const App = () => { 
    
    const value = '来自实例的info';

    return (
      <div>
        <h2>实例页面： {value}</h2>
        <p>{editor()}</p>
        <p>{test()}</p>
      </div>
    );
}


export default App;