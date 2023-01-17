import * as React from 'react';

const welcome = {
  greeting: 'hello',
  title: 'Paul',
};

function getMsg(MsgObj) {
  let Msg;
  Msg = MsgObj.greeting + ' to ' + MsgObj.title
  return Msg;
}

function App() {
  let titleMsg;
  titleMsg = getMsg(welcome);

  return (
    <div>
      <h1>{titleMsg}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <h1>The final end</h1>
    </div>
  );
}

export default App;