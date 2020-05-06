import * as React from "react";
import { Container, Row, Col, Card } from 'reactstrap';
import StartWorkout from "./components/StartWorkout";
import WorkoutProgress from "./components/WorkoutProgress";
import WorkoutHistory from "./components/WorkoutHistory";

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
            <Card>
              <StartWorkout></StartWorkout>
              <WorkoutProgress></WorkoutProgress>
            </Card>
          </Col>

          <Col sm="12" md="6">
            <Card>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="6">
            <Card className="full-size">
              <WorkoutHistory></WorkoutHistory>
            </Card>
          </Col>

          <Col sm="12" md="6">
            <Card>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
