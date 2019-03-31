import React, { Component } from 'react';

import Header from '../components/Header';
import UnitCard from '../components/UnitCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <UnitCard />
      </div>
    );
  }
}

export default App;

/*
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { searchResultsFetchData, clearSearchResults } from '../actions/search';

import Header from '../components/Header';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import VideoCard from '../components/VideoCard';

const styles = (theme) => ({
    searchPage: {
        height: '100%', 
        minHeight: '100%', 
        display: 'flex', 
        flexDirection: 'column'
    },
    content: {
        padding: '40px 50px 40px 50px',
        flex: 1,
    },
});

class SearchPage extends Component { 

    componentDidMount() {
        this.props.fetchData(this.props.match.params.searchStr);
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.searchStr !== prevProps.match.params.searchStr) {
            this.props.fetchData(this.props.match.params.searchStr);
        }
    };

    componentWillUnmount() {
        this.props.clearData();
    };

    render() {
        const { classes, searchResults, areLoading, haveError } = this.props;

        let content = null;

        if (searchResults) {
            content = (
                <Grid container spacing={ 32 }>
                    { 
                        searchResults.map(video => 
                            <Grid key={ video.id } item xs={ 12 } sm={ 6 } md={ 3 }>
                                <VideoCard key={ video.id } video={ video } searchWords={ this.props.match.params.searchStr.split(' ') } />
                            </Grid>
                        )
                    }
                </Grid>
            );
        }

        if (areLoading) {
            content = (
                <Loader size={ 80 } />
            );
        }

        if (haveError) {
            content = (
                <ErrorMessage />
            );
        }
        
        return (
            <div className={ classes.searchPage }>
                <Header />
                <div className={ classes.content }>
                    { content }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    searchResults: state.searchResults,
    areLoading: state.searchResultsAreLoading,
    haveError: state.searchResultsHaveError
});

const mapDispatchToProps = (dispatch) => ({
    clearData: () => dispatch(clearSearchResults()),
    fetchData: (str) => dispatch(searchResultsFetchData(str))
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SearchPage));
*/