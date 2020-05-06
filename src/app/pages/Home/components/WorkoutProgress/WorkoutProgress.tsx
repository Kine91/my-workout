import * as React from "react";
import { Progress } from "reactstrap";
import { RootState } from "../../../../redux";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  counter: state.workout.counter
});

type Props = ReturnType<typeof mapStateToProps>

export interface State {
  barValue: number;
}

export class WorkoutProgress extends React.Component<Props, State> {

    constructor(props: Props) {
      super(props);
    }

    render() {
      return (
        <div>
          <div className="text-center">{this.props.counter}%</div>
          <Progress value={this.props.counter} />
        </div>
      )
    }
}

export default connect(
  mapStateToProps
)(WorkoutProgress);
