import PlayerChallenges from '../../components/timerChallengesApp/PlayerChallenges';
import TimerChallenge from '../../components/timerChallengesApp/TimerChallenge';
import Style from './TimerChallengesApp.module.css';
function TimerChallengesApp() {
  return (
    <>
      <div id="modal"></div>
      <div id={Style.content}>
        <header>
          <h1>
            The <em>Almost</em> Final Countdown
          </h1>
          <p>Stop the timer once you estimate that time is (almost) up</p>
        </header>
        <PlayerChallenges style={Style} />
        <div id={Style.challenges}>
          <TimerChallenge style={Style} title="Easy" targetTime={1} />
          <TimerChallenge style={Style} title="Not easy" targetTime={5} />
          <TimerChallenge style={Style} title="Getting tough" targetTime={10} />
          <TimerChallenge style={Style} title="Pros only" targetTime={15} />
        </div>
      </div>
    </>
  );
}

export default TimerChallengesApp;
