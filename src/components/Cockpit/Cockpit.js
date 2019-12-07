import React,{ useEffect,useRef,useContext } from 'react';
import classes from './Cockbit.css';
import AuthContext from '../../context/auth-context';
const Cockpit = (props) => {
    
    const buttonClickRef = useRef(null);
    const authContext = useContext (AuthContext); 
    console.log("call agine");
    useEffect(() => {
        // const timer = setTimeout(()=>{
        //     alert('save data to cloud!');
        // },1000);
        buttonClickRef.current.click();
        return (()=>{
            // clearTimeout(timer);
            console.log("[Cockpit.js] component for cleanup using useffect");
        });
    }, []);
    useEffect(()=>{
        console.log("[Cockpit.js] component for cleanup using 2nd useffect");
    });
    const newClasses = [];   
    let buttonClass;
    if(props.showPerson)
        buttonClass = classes.Red; 
    if(props.persons.length <= 2){
        newClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
        newClasses.push(classes.solid);
    }
    return (
        <div className={classes.Cockpit}>
        <h1>{props.apptitle}</h1>
        <p className ={newClasses.join(' ')}> It's working fine. </p>
        <button className={buttonClass} ref = {buttonClickRef} onClick={props.clicked}>{props.showPerson ? 'Hide' : 'Show' } Person</button>
            <button onClick={authContext.login} >Login</button>
        </div>
    );
}       
 
export default Cockpit;