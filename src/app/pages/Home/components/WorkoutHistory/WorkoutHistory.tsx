import * as React from "react";
import { Table } from 'reactstrap';

export interface Props {
  children?: React.ReactNode
}

export interface State {
  items: any[];
}

export default class WorkoutHistory extends React.Component<Props, State> {
  table = [];

  constructor(props: Props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/workouts')
      .then(res => res.json())
      .then(data => {
        this.createTable(data);
        this.setState({ items: data });
      })
  }

  createTable(data: any[]) {
    data.forEach((item, index) => {
      const children = []

      children.push(<th>{ index +1 }</th>);
      children.push(<td>{ item.name }</td>);
      children.push(<td>{ item.date }</td>);

      this.table.push(<tr key={index}>{children}</tr>);
    });
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {this.table}
        </tbody>
      </Table>
    )
  }
}
