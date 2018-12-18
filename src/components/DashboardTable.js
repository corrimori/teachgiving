import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import '../App.css';

const DashboardTable = props => (
  <div className="table-wrap">
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <Icon name="child" />Moose
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Icon name="money" />
          </Table.Cell>
          <Table.Cell>SPCA</Table.Cell>
          <Table.Cell>.35</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            2 weeks
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell collapsing>
            <Icon name="money" />
          </Table.Cell>
          <Table.Cell>Hamilton Families</Table.Cell>
          <Table.Cell>.10</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            3 weeks
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell collapsing>
            <Icon name="money" />
          </Table.Cell>
          <Table.Cell>SF Food Bank</Table.Cell>
          <Table.Cell>.50</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            5 weeks
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default DashboardTable;
