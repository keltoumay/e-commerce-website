import React from 'react';

function UserProfile({ user }) {
	  return (
		      <div>
		        <h1>{user.name}</h1>
		        <p>{user.email}</p>
		      </div>
		    );
}

export default UserProfile;
