import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import UserList from './components/UserList';
import Chat from './components/Chat';


const App = () => {
  return (
    <>
    <div className="main_div">
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
              <UserList />
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App