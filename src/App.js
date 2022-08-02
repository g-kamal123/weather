import classes from './App.module.css';
import Weather from './component/Weather';

function App() {
  return (
    <div className={classes.app}>
      <Weather />
    </div>
  );
}

export default App;
