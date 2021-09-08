import './App.css';
import { connect } from 'react-redux';
import { fetch } from './actions';

function App(props) {
  const handleClick = () => {
    props.fetch();
}
  return (
    <div className="App">
      <button onClick = { handleClick }></button>
    </div>
  );
}

export default connect( null, { fetch } )( App );
