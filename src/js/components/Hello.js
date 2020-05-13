
var React = require('react');
var ReactDOM = require('react-dom');
import  '../components/file.css';

 
class Hello extends React.Component {
  render() {
    return <div id="hello">Hello World!!!!!!</div>;
  }
}
 


export default Hello;

const rootid = document.getElementById("container");
ReactDOM.render(<Hello />, rootid);
