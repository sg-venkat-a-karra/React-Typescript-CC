import React from 'react';

/**
 *
 */
type StatusProps = {
  status: 'loading' | 'waiting' | 'complete';
};

const Status = (props: StatusProps) => {
  let message;
  if (
    props.status === 'loading' ||
    props.status === 'waiting' ||
    props.status === 'complete'
  ) {
    message = props.status;
  }
  return (
    <div>
      <h4>Status- {message}</h4>
    </div>
  );
};

export default Status;
