import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getPeople } from '../action';
import PeopleList from './PeopleList';
import Forms from './Forms';

export class App extends Component
{

    componentDidMount()
    {
        this.props.getPeople()
    }


    render()
    {
        return (
            <div>
                <Forms />
                <PeopleList people={this.props.allPeople} />
            </div>
        )
    }
}

function mapStateToProps(state)
{
    console.log(state)
    return {
        allPeople:state.people.getPeople
    }
}

export default connect(mapStateToProps, {getPeople}) (App)
