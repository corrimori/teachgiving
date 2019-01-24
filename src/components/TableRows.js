import React from 'react';
import { Icon, Table } from 'semantic-ui-react';

const TableRows = props => {
  console.log('TABLEROW props---->>>>>', props);
  return props.kid.pledges.map(pledge => (
    <Table.Body>
      <Table.HeaderCell colSpan="4">
        <Table.Row>
          <Table.Cell collapsing>
            <Icon name="money" />
          </Table.Cell>
          <Table.Cell>{pledge.name}</Table.Cell>
          <Table.Cell>{pledge.pledgeAmount}</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            2 weeks
          </Table.Cell>
        </Table.Row>
      </Table.HeaderCell>
    </Table.Body>
  ));
};

export default TableRows;
