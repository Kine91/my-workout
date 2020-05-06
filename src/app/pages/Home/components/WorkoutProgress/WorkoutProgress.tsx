import * as React from "react";
import { Progress } from "reactstrap";
import { RootState } from "../../../../redux";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  counter: state.workout.counter
});

interface Props {
  barValue: number;
}

interface State {
  barValue: number;
}

export default class WorkoutProgress extends React.Component<Props, State> {

    constructor(props: Props) {
      super(props);
    }

    render() {
      return (
        <div>
          <div className="text-center">{this.props.barValue}%</div>
          <Progress value={this.props.barValue} />
        </div>
      )
    }
}
