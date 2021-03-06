import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import AdminNav from '../../Nav/AdminNav/AdminNav';
//Style
import { Paper, Typography, Card, Button, TextField  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';



const mapStateToProps = state => ({
    user: state.user,
    person: state.getFederalReducer,
    state,
});


class FederalDate extends Component {
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
            <div className="federalReport">
                <AdminNav />
                <h2> Select a date range for the Federal Report:</h2>
                
                <div style={{align: "center", float: "left", padding: "10px"}}>
                <TextField
                    name="startDate"
                    label=" Start Date"
                    className={this.props.textField}
                    type="date"
                    margin="normal"
                    value={this.state.startDate}
                    onChange={this.handleChangeFor}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                </div>
                <div style={{align: "center", float: "left", padding: "10px"}}>
                <TextField
                    name="endDate"
                    label=" End Date"
                    className={this.props.textField}
                    type="date"
                    margin="normal"
                    value={this.state.endDate}
                    onChange={this.handleChangeFor}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                </div>
                <br />
                <br />
                <div>
                <Button
                        name="submit"
                        variant="flat"
                        color="primary"
                        onClick={this.submit}
                      >
                      Submit</Button>
                      <Button
                        name="submit"
                        variant="flat"
                        color="primary"
                        onClick={this.print}
                      >
                      Print</Button>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps)(FederalDate);