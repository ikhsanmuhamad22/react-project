import InvesmentApp from './pages/invesmentApp/InvesmentApp';
import PlacesPickerApp from './pages/placePickerApp/PlacePickerApp';
import ProjectMenegementApp from './pages/projectMenegementApp/projectMenegementApp';
import TimerChallengesApp from './pages/timerChallengesApp/TimerChallengesApp';

function App() {
  return (
    <div>
      <div id="modal"></div>
      {/* <TimerChallengesApp /> */}
      <ProjectMenegementApp />
      {/* <PlacesPickerApp /> */}
    </div>
  );
}

export default App;
