import * as React from "react";
import { Progress } from "reactstrap";
import { RootState } from "../../../../redux";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  inProgress: state.workout.inProgress
});

type Props = ReturnType<typeof mapStateToProps>

export interface State { }

export class WorkoutProgress extends React.Component<Props, State> {

    constructor(props: Props) {
      super(props)
    }

    render() {
      const inProgress = this.props.inProgress;

      return (
        <>
        {inProgress
          ? <h1>Ćwiczymy</h1>
          : <h1>Pierdzimy w stołek</h1>
        }
        </>
      )
    }
}

export default connect(
  mapStateToProps
)(WorkoutProgress);
