import PropTypes from 'prop-types';
import { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}</p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
