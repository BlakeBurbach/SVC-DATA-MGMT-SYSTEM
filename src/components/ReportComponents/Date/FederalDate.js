import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import AdminNav from '../../Nav/AdminNav/AdminNav';
//Style
import { Paper, Typography, Card, Button } from '@material-ui/core';


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

    componentDidMount() {

        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        console.log(this.props.state.getPersonReducer)
    }

    render() {
        return (
            <div className="federalReport">
                <AdminNav />
                <h2> Select a date range for the Federal Report:</h2>
                
                Start Date:
                    <input type="date" name="startDate" value={this.state.startDate} onChange={this.handleChangeFor}/>
                    End Date:
                    <input type="date" name="endDate" value={this.state.endDate} onChange={this.handleChangeFor}/>
                
                    <button onClick={this.submit}>go</button>  
                    <button onClick={this.print}>Print</button>
            </div>
        );
    }
}
export default connect(mapStateToProps)(FederalDate);