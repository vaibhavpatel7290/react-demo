import React,{Component} from 'react';
import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux'; 
import AuthContext from '../context/auth-context';

// import ErrorBoundary from '../Errorboundary/Errorboundary';

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "keval", age: 24 },
      { id: "2", name: "hiren", age: 24 },
      { id: "3", name: "suhag", age: 24 }
    ],
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    authonticated:false
  };
  // swiched name
  SwitchNameHendler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 40 },
        { name: "vaibhav", age: 24 }
      ]
    });
  };
  //Chnage name
  NameChnageHendler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
      changeCounter: this.state.changeCounter + 1
    });

    this.setState((prevState, props) => {
      return { persons: persons, changeCounter: prevState.changeCounter + 1 };
    });
  };
  // toggle person div
  toggleHendler = event => {
    this.setState({ showPerson: !this.state.showPerson });
  };
  deletePersonHendler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  loginHendler = () =>  {
    this.setState({ authonticated: true }, ()=> console.log(this.state.authonticated));
    // this.setState({ authonticated: true });
  }
  render() {
    var person = null;

    if (this.state.showPerson) {
      person = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHendler}
          changed={this.NameChnageHendler}
          isLogin={this.state.authonticated}
        />
      );
    }

    return (
      
      <Aux >
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove cockpit
        </button>
        <AuthContext.Provider value={{authenticated:this.state.authonticated,login : this.loginHendler}}>
          {this.state.showCockpit ? (
            <Cockpit
              apptitle={this.props.apptitle}
              showPerson={this.state.showPerson}
              persons={this.state.persons}
              clicked={this.toggleHendler}  
            />
          ) : null}

          {person}
        </AuthContext.Provider>
        {/* simple way  */}
        {/* { this.state.showPerson ?
      <div>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.NameChnageHendler} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click = {()=> this.SwitchNameHendler('maya')} />
      </div>
     : null } */}
      </Aux>
    );
  }
}

export default withClass(App,classes.App) ;


//////////////////////////////////////////////////////////////////////////////////////////////////
//Function Component
//////////////////////////////////////////////////////////////////////////////////////////////
// import React,{useState} from 'react';
// import './App.css';
// import Person from './Person/Person';

// const App = (props) => {
//   const [ personsState,setPersonsState ] = useState({
//     persons :[{'name':'keval','age':24},{'name':'hiren','age':24}],
//     vaibhav : "I'm vaibhav"
//   })

//   const SwitchNameHendler = () =>{
//     // console.log('called');
//     setPersonsState({ persons :[{'name':'rashmin','age':40},{'name':'vaibhav','age':24}]} );
//   }

//   return (
//     <div className="App">
//      <h1>Hiii....I'm react devloper.</h1>
//      <button onClick={SwitchNameHendler}>switch name</button>
//      <Person 
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age} 
//         

//       />
//      <Person 
//         name={personsState.persons[1].name} 
//         age={personsState.persons[1].age} 
//       />
//     </div>
//   );
// }

// export default App;

