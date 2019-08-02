import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../theme/muiTheme';
import MainLayout from '../components/_mainLayout';

console.log(theme);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <MainLayout />
    </MuiThemeProvider>
  )
}

export default App;