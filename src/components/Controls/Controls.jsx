import React from 'react';
import PropTypes from 'prop-types';
import setTimeFormat from '../../utils/helpers';

export const Controls = ({
  time,
  start,
  stop,
  reset,
  wait,
}) => (
  <>
    <section className="main">
      <div className="container">
        <p className="time">{setTimeFormat(time)}</p>
        <button type="button" className="btn" onClick={start}>
          Start
        </button>
        <button type="button" className="btn" onClick={stop}>
          Stop
        </button>
        <button type="button" className="btn" onClick={reset}>
          Reset
        </button>
        <button type="button" className="btn" onClick={wait}>
          Wait
        </button>
      </div>
    </section>
  </>
);

Controls.propTypes = {
  time: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  wait: PropTypes.func.isRequired,
};
