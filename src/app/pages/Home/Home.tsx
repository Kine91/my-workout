import * as React from "react";
import { Container, Row, Col } from 'reactstrap';
import StartWorkout from "./components/StartWorkout";
import WorkoutProgress from "./components/WorkoutProgress";

export interface Props {
  children?: React.ReactNode
}

export interface State {
  isActive: boolean;
}


export default class Home extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md="6">
            <StartWorkout></StartWorkout>
          </Col>

          <Col sm="12" md="6">
            <WorkoutProgress></WorkoutProgress>
          </Col>
        </Row>
      </Container>
    )
  }
}
