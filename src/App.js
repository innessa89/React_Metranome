import './App.css';
import MetronomeContainer from './containers/MetronomeContainer';

function App() {
  return (
    <div>
      <embed src="success.wav" autostart="false" width="0" height="0" id="sound1" enablejavascript="true"/>
      <MetronomeContainer />
    </div>
  );
}

export default App;
