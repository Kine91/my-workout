import * as React from "react";
import Button from './../../components/Button';

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
    const styles = require('./Home.scss');
    return (
      <div className={styles.homePage}>
        Strona główna

        <div>
                <p className={styles.paragraph}>Ostyluj sie dziadu</p>

                <span>glowna Jestem kolorowy</span>

                <Button text="Przycisk" click="{this.toogleActive}" />
              </div>
      </div>
    )
  }
}
