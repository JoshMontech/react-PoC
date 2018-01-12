import React from 'react';
import './UserOutput.css';

const userOutput = props => {
  return (
    <div className='UserOutput'>

      <p>{props.userName}</p>
      <p>Is quite honestly the best person on earth. Wow.</p>
    </div>
  );
};

export default userOutput;
