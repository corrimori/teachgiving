import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Kid = props => {
  return (
    <div>
      <Link
        to={{
          pathname: '/charities',
          kid: props.kid,
        }}>
        <Image
          src={`images/avatar/${props.avatarImage}`}
          size="small"
          circular
        />
        <h2>{props.name}</h2>
      </Link>
    </div>
  );
};

export default Kid;

//
// <Link to="/charities">
//   <Image src={`images/avatar/${props.avatarImage}`} size="small" circular />
//   <h2>{props.kidName}</h2>
// </Link>
