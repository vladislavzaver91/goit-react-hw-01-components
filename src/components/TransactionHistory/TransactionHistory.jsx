import PropTypes from 'prop-types';
import { Table, Tbody, Thead } from "./TransactionHistory.styled";

export function TransactionHistory({ items }) {
    return (
        <Table>
        <Thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </Thead>
    {items.map(({id, type, amount, currency}) => (
        <Tbody key={id}>
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    </Tbody>
    ))}
    </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};