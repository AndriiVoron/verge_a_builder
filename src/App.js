import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import HomePage from './containers/HomePage';
import RosterPage from './containers/RosterPage';
import RulePage from './containers/RulePage';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#414042',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#f37037',
            contrastText: '#ffffff',
        },
        typography: {
            useNextVariants: true,
            fontFamaly: 'roboto',
        },
    }
});

const styles = {
    app: {
        height: '100%',
        width: '100%',
    },
};

const App = ({ classes }) => (
    <div className={ classes.app }>
        <MuiThemeProvider theme={ theme }>
            <Router>
                <Switch>
                    <Route path='/' exact component={ HomePage } />
                    <Route path='/roster/:id' component={ RosterPage } />
                    <Route path='/rules/:fraction' component={ RulePage } />
                </Switch>
            </Router>
        </MuiThemeProvider>
    </div>
);

export default withStyles(styles)(App); 
