import React from 'react';
import { Alert } from 'reactstrap';
import './AlertInfo.css'

const AlertInfo = (props) => {
  return (
    <div className="alert-info">
        <Alert color="primary">
        {props.message}
        </Alert>
    </div>
  );
};

export default AlertInfo