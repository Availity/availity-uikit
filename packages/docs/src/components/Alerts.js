import React from 'react';

const Alerts = () => (
  <div>
    <div className="alert alert-success" role="alert">
      <span className="icon icon-ok-circle" />
      <strong>Good Job!</strong> You are so good at that thing you just did! <a href="#" className="alert-link">This thing</a>
    </div>
    <div className="alert alert-info" role="alert">
      <span className="icon icon-info-circle" />
      <strong>Well Just A Note!</strong> You are so good at that thing you just did! <a href="#" className="alert-link">This thing</a>
    </div>
    <div className="alert alert-warning" role="alert">
      <span className="icon icon-info-circle" />
      <strong>Caution!</strong> Heads up at that thing you just did! <a href="#" className="alert-link">This thing</a>
    </div>
    <div className="alert alert-danger" role="alert">
      <span className="icon icon-attention-circle" />
      <strong>Oops!</strong> Something went wrong just did! <a href="#" className="alert-link">This thing</a>
    </div>
  </div>
);

export default Alerts;
