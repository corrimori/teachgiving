import React from 'react';
import { Icon, Table } from 'semantic-ui-react';

const TableRows = props => {
  console.log('TABLEROW props---->>>>>', props);
  return props.pledgesByKids.map(pledge => (
    <Table.Body>
      <Table.HeaderCell colSpan="4">
        <Table.Row>
          <Table.Cell collapsing>
            <Icon name="money" />
          </Table.Cell>
          <Table.Cell>{pledge.pledges[0].name}</Table.Cell>
          <Table.Cell>{pledge.pledges[0].pledgeAmount}</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            2 weeks
          </Table.Cell>
        </Table.Row>
      </Table.HeaderCell>
    </Table.Body>
  ));
};

export default TableRows;
