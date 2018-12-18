import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import '../App.css';
import TableRows from './TableRows';

const DashboardTable = props => {
  console.log('In dashboard table...  props>>', props);
  return props.pledgesByKids.map(kid => (
    <div className="table-wrap">
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Icon name="child" />
              {props.pledgesByKids[0].name}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row warning>
            <Table.Cell collapsing>
              <Icon name="money" />
            </Table.Cell>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Amount</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              Number of Weeks
            </Table.Cell>
          </Table.Row>
          <TableRows pledgesByKids={props.pledgesByKids} />
        </Table.Body>
      </Table>
      <br />
    </div>
  ));
};

export default DashboardTable;
