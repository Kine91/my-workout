import * as React from "react";
import { CardBody, CardTitle, Button } from 'reactstrap';
import { RootState } from "../../../../redux";
import { startWorkout, stopWorkout } from "../../../../redux/modules/workout";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  inProgress: state.workout.inProgress,
});

const mapDispatchToProps = { startWorkout, stopWorkout };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const UnconnectedStartWorkout: React.FC<Props> = ({
  inProgress

  startWorkout,
  stopWorkout
}) => {
  return (
      <CardBody>
        <CardTitle>
          {inProgress
            ? <h1>Ćwiczymy nie śpimy</h1>
            : <h1>Rusz dupe leniu i zaczynaj</h1>
          }
        </CardTitle>

        {inProgress
          ? <Button onClick={() => stopWorkout()}>Stop</Button>
          : <Button onClick={() => startWorkout()}>Start</Button>
        }
      </CardBody>
  );
};


const StartWorkout = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedStartWorkout);

export default StartWorkout;
