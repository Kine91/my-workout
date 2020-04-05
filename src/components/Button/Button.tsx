import * as React from 'react';

interface ToggleProps {
  text: string;
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(Props: ToggleProps) {
    return <button onClick={Props.ClickHandler}>{Props.text}</button>
}
