import React, { Component } from 'react';

import Person from './Person/Person'; 

class Persons extends Component{
    // static getDrivedStateFromProps(props,state){
    //     console.log('[Presons.js] getDrivedStateFromProps');
    //     return state;
    // }
     
    // componentWillReceiveProps(props){
    //     console.log('[Presons.js] componentWillReceiveProps');
    // }

    

    shouldComponentUpdate(nextProps,nexState){
        console.log('[Presons.js] shouldComponentUpdate');
        // if(nextProps.persons !== this.props.persons){
        //     return true;
        // } else {
            return true;
        // }
    }

    // getSnapshotBeforeUpdate(prevProps,prevStates){
    //     console.log('[Presons.js] getSnapshotBeforeUpdate');
    //     return null;
    // }
    // componentDidUpdate(){
    //     console.log('[Presons.js] componentDidUpdate');
    // }
    // componentWillUnmount(){
    //     console.log('[Presons.js] componentDidUpdate');
    // }
    render(){
        console.log('[Presons.js] rendering....');
      return  this.props.persons.map((person,index) => {
        
            return (
              <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.props.changed(event, person.id)}
              />
            );
            });
        }
    }
export default Persons;