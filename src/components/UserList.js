import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const UserList = () => {
  const users = [
    {
      name: 'Vincent Porter',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      status: 'offline',
    },
    {
      name: 'Aiden Chavez',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      status: 'online',
    },
    {
      name: 'Mike Thomas',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      status: 'online',
    },
    {
      name: 'Christian Kelly',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      status: 'offline',
    },
    {
      name: 'Monica Ward',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar8.png',
      status: 'online',
    },
    {
      name: 'Dean Henry',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      status: 'offline',
    },
  ];

  const [searchUser, setsearchUser] = useState('');

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchUser.toLowerCase());
  });

  return (
    <>
      <div id="plist" className="people-list">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-search" />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchUser}
            onChange={(event) => setsearchUser(event.target.value)}
          />
        </div>
        <ul className="list-unstyled chat-list mt-2 mb-0">
          {filteredUsers.map((user) => (
            <li className="clearfix">
              <img
                src={user.avatar}
                alt="avatar"
              />
              <div className="about">
                <div className="name">{user.name}</div>
                <div className="status">
                  <i className={`fa fa-circle ${user.status}`} />{user.status}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;