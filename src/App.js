import React from 'react';
import header from './component/header';
import main from './component/main';
import footer from './component/footer';
import HornedBeasts from './component/HornedBeasts';

class App extends React.Component {
  render()
  {
    return (
      <div>
        <header />
        <main />
        <footer/>
      </div>
    )

  };
}

export default App;
