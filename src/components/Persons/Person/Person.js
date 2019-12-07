import React,{Component} from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';
class Person extends Component {
  // const rnd = Math.random();
  // if(rnd > 0.7){
  //    throw new Error('Something wrong');
  // }
  
  constructor(){
   super();
   this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
   //  this.inputElement.focus();
      this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering....");
    return (
      // <div className={classes.Person}>
      <Aux>
        {/* <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authnticated !!!</p> : <p>Please Login In</p> }
        </AuthContext.Consumer>  */}
        {this.context.authenticated ? <p>Authnticated !!!</p> : <p>Please Login In</p>}
         
        <p onClick={this.props.click}>
          I'm in {this.props.name} & my age is {this.props.age}.
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          ref={this.inputElementRef} 
          value={this.props.name} 
        ></input>
        
      </Aux>
      // </div>
    );
  }
}
/////////// Ref type 1////////////////
// ref={inputEl => {
//       this.inputElement = inputEl;
//     }}


Person.propTypes = {
   click:PropTypes.func,
   name:PropTypes.string,
   age:PropTypes.number,
   changed:PropTypes.func

}

export default withClass(Person,classes.Person); 