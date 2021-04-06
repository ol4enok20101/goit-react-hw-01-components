import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

const TransactionItem = ({ id, type, amount, currency }, i) => {
  return (
    <tr key={id} className={styles.tr}>
      <td className={styles.td}>{type}</td>
      <td className={styles.td}>{amount}</td>
      <td className={styles.td}>{currency}</td>
    </tr>
  );
};

const TransactionBody = ({ items }) => {
  if (items.length === 0) return null;
  return <tbody>{items.map(TransactionItem)}</tbody>;
};
const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>

      <TransactionBody items={transactions} />
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
