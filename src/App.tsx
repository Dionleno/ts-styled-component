import * as React from "react";
import { ThemeProvider } from 'styled-components';

import themes from './theme';
import UiButton from './ui/Button/UIButton';
import UiBox from './ui/Box/UIBox';
import GlobalTheme from './theme/type';

interface StateTheme {
  UIListTheme: GlobalTheme[],
  UITheme: GlobalTheme
}

class App extends React.Component {
  state: StateTheme = {
    UIListTheme: themes,
    UITheme: themes[0]
  }

  handlerChangeTheme = (UITheme: GlobalTheme) => {
    this.setState({
      UITheme
    })
  }

  render() {
    const { UITheme, UIListTheme } = this.state;


    return (
      <ThemeProvider theme={{ ...UITheme.theme }}>
        <div>
          <h1>{UITheme.themeInfo.name}</h1>
          <UiBox>
            <UiButton color="primary">Primary</UiButton>
            <UiButton color="secondary">Secondary</UiButton>
            <UiButton color="negative">Negative</UiButton>
          </UiBox>
          {UIListTheme.map((r, i) => <UiButton key={i} onClick={() => this.handlerChangeTheme(r)}>{r.themeInfo.name}</UiButton>)}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
