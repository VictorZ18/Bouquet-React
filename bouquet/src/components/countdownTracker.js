import React, { useEffect, useRef } from 'react';
import './clock.scss';

const CountdownTracker = ({ label, value }) => {
  const elRef = useRef();
  const currentValueRef = useRef();

  useEffect(() => {
    const el = elRef.current;
    const top = el.querySelector('.card__top');
    const bottom = el.querySelector('.card__bottom');
    const back = el.querySelector('.card__back');
    const backBottom = el.querySelector('.card__back .card__bottom');

    const update = (val) => {
      val = val.toString();
      val = val.length === 3 ? val : ('0' + val).slice(-2);

      if (val !== currentValueRef.current) {
        if (currentValueRef.current >= 0) {
          back.setAttribute('data-value', currentValueRef.current);
          bottom.setAttribute('data-value', currentValueRef.current);
        }

        currentValueRef.current = val;
        top.innerText = currentValueRef.current;
        backBottom.setAttribute('data-value', currentValueRef.current);

        el.classList.remove('flip');
        void el.offsetWidth; 
        el.classList.add('flip');
      }
    };

    update(value);

    return () => {
    };
  }, [value]);

  return (
    <span className="flip-clock__piece" ref={elRef}>
      <b className="flip-clock__card cardClock">
        <b className="card__top"></b>
        <b className="card__bottom"></b>
        <b className="card__back">
          <b className="card__bottom"></b>
        </b>
      </b>
    </span>
  );
};

export default CountdownTracker;
