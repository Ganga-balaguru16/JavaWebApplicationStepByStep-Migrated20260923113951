import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div>
      <Header />
      <TodoList errorMessage={errorMessage} />
      <TodoForm />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
import React, { useState } from 'react';

function Footer() {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Footer</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;