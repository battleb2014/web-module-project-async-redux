import Cards from './components/Cards';
import { connect } from 'react-redux';
import { build } from './actions';

import './App.css';

function App(props) {
  const handleClick = () => {
    props.build();
}

  return (
    <div className="App">
      <button onClick = { handleClick } className = 'deal'>Deal Hand</button>
      <Cards />
    </div>
  );
}

export default connect( null, { build } )( App );
