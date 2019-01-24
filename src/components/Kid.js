import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Kid = props => {
  console.log('in Kid component &&&&& props>>', props);
  return (
    <div>
      <Link
        onClick={() => props.onSelect(props.kid)}
        to={{
          pathname: '/charities',
          kid: props.kid,
        }}>
        <Image
          src={`images/avatar/${props.avatarImage}`}
          size="small"
          circular
        />
        <h2 className="name-spacer">{props.name}</h2>
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
