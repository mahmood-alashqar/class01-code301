  import React from'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './component/main';
import Header from './component/header';
import Footer from './component/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render()
  {
    return (
      <div>
        <Header />
        <Main />
        <Footer/>
      </div>
    )

  };
}

export default App;