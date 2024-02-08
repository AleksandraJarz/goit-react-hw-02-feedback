import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div>
        <h2 className={styles.h2}> {title}</h2>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
