import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';
import 'bootstrap/dist/css/bootstrap.css';

/*class WhoAmI extends React.Component{
  constructor (props) {
    super(props);
    this.state={
      years: 26
    }
    //this.nextYear = this.nextYear.bind(this); 
    this.nextYear=() => {
      this.setState(state => ({
         years: state.years++
      }))  
    }
  } */

  // state={
  //   years: 26
  // }

  // nextYear = () => {
  //     this.setState(state => ({
  //       years: state.years++
  //     }))
  //   }    
  // nextYear() {
  //   this.setState(state => ({
  //     years: state.years++
  //   }))
  // }
  
 /* render () {
    const {name,surname,link} = this.props;
    const {years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years = {years}</h1>
        <a href={link}>My profile</a>
      </>
    )
  }
} 


const All = () => {
  
  return (
    <>
      <WhoAmI name="Joann" surname="Smitti" link="facebook.com" />
      <WhoAmI name="Ivan" surname="Popov" link="vk.com" />
      <WhoAmI name="Conan" surname="Varvar" link="youtube.com" />  
    </>
  )
}*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <All />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

