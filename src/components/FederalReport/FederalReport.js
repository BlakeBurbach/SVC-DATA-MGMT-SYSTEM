import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import AdminNav from '../Nav/AdminNav/AdminNav';
//Style
import { Paper, Typography, Card, Button, Grid, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';

//ReportComponents
import FederalDate from '../ReportComponents/Date/FederalDate';
import FederalTotalVictims from '../ReportComponents/Total/FederalTotalVictims';
import NewVictims from '../ReportComponents/New/NewVictimsFederal';
import FederalEthnicity from '../ReportComponents/Ethnicity/FederalEthnicity';
import FederalGender from '../ReportComponents/Gender/FederalGender';
import FederalAgeRange from '../ReportComponents/Age/FederalAgeRange';
import FederalVictimization from '../ReportComponents/Victimization/FederalVictimization';
import SpecialClassification from '../ReportComponents/SpecialClassification';
import CompensationApplication from '../ReportComponents/CompensationApplication';
import InformationReferral from '../ReportComponents/InformationReferral(A)';
import AdvocacyAccompaniment from '../ReportComponents/AdvocacyAccompaniment/AdvocacyAccompaniment(B)';
import EmotionalSupport from '../ReportComponents/EmotionalSupport(C)';
import CriminalCivilJusticeSystemAssistance from '../ReportComponents/CriminalCivilJusticeSystemAssistance(E)';
import NewVictimsFederal from '../ReportComponents/New/NewVictimsFederal';
// import FederalDate from './ReportComponents/FederalDate';
// const top = 50;
// const left = 50;
 
const mapStateToProps = state => ({
    user: state.user,
    person: state.getFederalReducer,
    state,
});
const style = {
    title: {
        backgroundColor:  teal[300],
        textAlign: 'center',
        color: 'white', 
        padding: '10px',
        
        // position: 'abosolute',
    },
    paper:{
        backgroundColor: grey[300], 
        padding: '10px',
        // margin: '50px',
        
    }
}
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class FederalReport extends Component {
    constructor() {
        super();
        this.state = {
            startDate: '',
            endDate: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }
    submit = () => {
        this.props.dispatch({
            type: 'GET_PERSON_DATA',
            payload: this.state
        })
    }
    
    print = () => {
        console.log('print button clicked');
        window.print();
    }

    componentDidMount() {

        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        console.log(this.props.state.getPersonReducer)
    }
   

    render() {
        return (
            <div>
                <div>
                    {/*  style={{ flex: .5, margin: "auto", textAlign: "center" }} */}
                <AdminNav />
                    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={40}>
                        <Grid item xs={2} sm={2} md={3}>
                        </Grid>
                        <Grid item xs={7} sm={7} md={9} lg={9} xl={12}>
                            <Paper style={style.paper}>
                                <Card style={{ margin: "10px"}}>
                                    <Typography variant="display1" style={style.title}>
                                        Federal Report
                                    </Typography>
                                </Card>
                                <Card style={{margin: "10px", padding: "20px", textAlign:"center"}}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FederalDate />
                                </Grid>
                                </Card>
                                <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FederalTotalVictims />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <NewVictimsFederal />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FederalEthnicity />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FederalGender />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FederalAgeRange />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FederalVictimization />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <SpecialClassification />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                    <h1> Direct Services</h1>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <CompensationApplication />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <InformationReferral />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <AdvocacyAccompaniment />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <EmotionalSupport />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <CriminalCivilJusticeSystemAssistance />
                                </Grid>
                                </Card>
                            </Paper>
                            <Grid item xs={3} sm={3}>
                            </Grid>
                        </Grid>
                    </Grid>
                </div> 
            </div>
        );
    }    
}

FederalReport.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(FederalReport));