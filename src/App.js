import './App.css';
import React, { useState } from 'react';

// images from ultimate werewolf
import Doppelganger from './images/Doppelganger.jpeg'
import Drunk from './images/Drunk.png'
import Hunter from './images/Hunter.png'
import Insomniac from './images/Insomniac.png'
import Mason from './images/Mason.png'
import Minion from './images/Minion.jpeg'
import Robber from './images/Robber.png'
import Seer from './images/Seer.png'
import Tanner from './images/Tanner.png'
import Troublemaker from './images/Troublemaker.png'
import Villager from './images/Villager.png'
import Werewolf from './images/Werewolf.jpeg'


function App() {
  const [whatValue, setwhatValue] = useState('empty')
  const instructionOrPlay = (value) => {
    switch (value) {
      case 'instruction':
        return(
          <div>
            <div class="container">
              {/* roles that do wakeup */}
              {/* first role of 4 */}
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Doppelg%C3%A4nger")}>
                <img src={Doppelganger} alt="Doppelganger" />
                {/* <p>Doppelganger</p> */}
              </div>
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Werewolf")}>
                <img src={Werewolf} alt="Werewolf" />
                {/* <p>Werewolves</p> */}
              </div>
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Minion")}>
                <img src={Minion} alt="Minion" />
                {/* <p>Minion</p> */}
              </div>
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Mason")}>
                <img src={Mason} alt="Mason" />
                {/* <p>Masons</p> */}
              </div>
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Seer ")}>
                <img src={Seer} alt="Seer" />
                {/* <p>Seer</p> */}
              </div>
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Robber")}>
                <img src={Robber} alt="Robber" />
                {/* <p>Robber</p> */}
              </div>
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Troublemaker")}>
                <img src={Troublemaker} alt="Troublemaker" />
                {/* <p>Troublemaker</p> */}
              </div>
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Drunk")}>
                <img src={Drunk} alt="Drunk" />
                {/* <p>Drunk</p> */}
              </div>
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Insomniac")}>
                <img src={Insomniac} alt="Insomniac" />
                {/* <p>Insomniac</p> */}
              </div>
              {/* roles that do not wake */}
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Villager")}>
                <img src={Villager} alt="Villager" />
                {/* <p>Villager</p> */}
              </div>
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Hunter")}>
                <img src={Hunter} alt="Hunter" />
                {/* <p>Hunter</p> */}
              </div>
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Tanner")}>
                <img src={Tanner} alt="Tanner" />
                {/* <p>Tanner</p> */}
              </div>
            </div>
            <button type="button" class="btn btn-primary" onClick={() => setwhatValue('empty')}>Back</button>
          </div>
        )
      default:
        return(
          <div>
            <h1>Please choose if you want to explain or play</h1>
            <div class="outerBox">
              <div class="buttonBox">
                <button type="button" class="btn btn-primary mr-4" onClick={() => setwhatValue('instruction')}>Instruction</button>
                <button type="button" class="btn btn-primary">Play</button>
              </div>
              <button type="button" class="btn btn-primary" onClick={() => setwhatValue('empty')}>Back</button>
            </div>
          </div>
        )
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {instructionOrPlay(whatValue)}
      </header>
    </div>
  );
}

export default App;
