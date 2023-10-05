
import './App.css';
import CountriesContainer from './containers/CountriesContainer';
import CountriesList from './components/CountriesList';
import Countries from './components/Countries';

function App() {
  return (
    <div className="App">
      <>
      <CountriesContainer/>
      <CountriesList/>
      <Countries/>
      </>
    </div>
  );
}

export default App;
