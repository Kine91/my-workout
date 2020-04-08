import * as React from "react";
import { Progress } from "reactstrap";

export interface Props {
    children?: React.ReactNode
}

export interface State {
}

export default class WorkoutProgress extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <Progress multi>
                <Progress bar value="5" max={55}>5</Progress>
                <Progress bar color="success" value="15" max={55}>15</Progress>
                <Progress bar color="warning" value="10" max={55}>10</Progress>
                <Progress bar color="danger" value="10" max={55}>10</Progress>
            </Progress>
        )
    }
}
