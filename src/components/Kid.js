import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Kid = props => (
  <div>
    <Link
      to={{
        pathname: '/charities',
        state: {
          kidsOfUser: ['Lucy'],
        },
      }}>
      <h2>{props.kidName}</h2>
    </Link>
  </div>
);

export default Kid;

//
// <Link to="/charities">
//   <Image src={`images/avatar/${props.avatarImage}`} size="small" circular />
//   <h2>{props.kidName}</h2>
// </Link>
