import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';
import { Fragment } from 'react';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Fragment>
      {total === 0 ? (
        <p className={css.noFeedback}>No feedback given</p>
      ) : (
        <ul className={css.list}>
          <li>
            Good:
            <span className={css.value}>{good}</span>
          </li>
          <li>
            Neutral:
            <span className={css.value}>{neutral}</span>
          </li>
          <li>
            Bad:
            <span className={css.value}>{bad}</span>
          </li>
          <li>
            Total:
            <span className={css.value}>{total}</span>
          </li>
          <li>
            Positive feedback:
            <span className={css.value}>{positivePercentage}%</span>
          </li>
        </ul>
      )}
    </Fragment>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
