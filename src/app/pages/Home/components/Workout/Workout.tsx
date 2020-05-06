import * as React from 'react';
import { useEffect } from "react";
import { CardBody, CardTitle, Button } from 'reactstrap';
import { RootState } from "../../../../redux";
import { startWorkout, stopWorkout } from "../../../../redux/modules/workout";
import { connect } from "react-redux";
import WorkoutProgress from '../WorkoutProgress';

const mapStateToProps = (state: RootState) => ({
  inProgress: state.workout.inProgress,
});

const mapDispatchToProps = { startWorkout, stopWorkout };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const UnconnectedStartWorkout: React.FC<Props> = ({
  inProgress,
  startWorkout,
  stopWorkout
}) => {
  const exerciseTime = 6;
  const [ progressCount, setProgressCount ] = React.useState(0);

  useEffect(() => {
    if (inProgress) {
      const time = exerciseTime * 1000 / 100;
      setTimeout(() => {
        setProgressCount(progressCount + 1);

        if (progressCount === 100) {
          stopWorkout();
        }
      }, time);
    } else {
      setProgressCount(0);
    }
  });

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

        <WorkoutProgress barValue={progressCount}></WorkoutProgress>
      </CardBody>
  );
};

const Workout = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedStartWorkout);

export default Workout;
