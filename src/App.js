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
  const [playerInputValue, setplayerInputValue] = useState('empty')
  const [playerArrayHolder, setplayerArrayHolder] = useState([])
  const [characters, setcharacters] = useState([])
  const [isItUpdating, setisItUpdating] = useState(false)

  const playerInput = (value) => {
    setplayerInputValue(value)
  }
  const setValue = () => {
    setplayerArrayHolder((initialValue) => [...initialValue, playerInputValue])
  }

  function addCharacter(characterToAdd) {
    setcharacters((initialvalue) => [...initialvalue, characterToAdd])
  }

  function deleteCharacter(role) {
    setisItUpdating(true)
    characters.splice(characters.indexOf(role), 1)
    setTimeout(function () {
      //your code to be executed after 1 second
      setisItUpdating(false)
    }, 500);
    // setisItUpdating(false)

  }
  function temp() {
    let x =1
  }

  const TableCharacters = (isItUpdating) => {
    if (isItUpdating === true ) {
      return (
        <h2>Please wait we are updating</h2>
      )
    } else {
      return (
        characters.map((character) => (
          <tr>
            <th key={characters.indexOf(character)}>{character}</th>
            <button onClick={() => deleteCharacter(character)}>delete</button>
          </tr>
        ))
      )
    }
  }

  const showPlayButton = (value) => {
    console.log(value)
    if (value.length !== 0) {
      return (
        <button type="button" className="btn btn-primary" onClick={() => setwhatValue('play')}>Play</button>
      )
    } else {
      temp()
    }
  }

  const instructionOrPlay = (value) => {
    switch (value) {
      case 'character':
        return(
          <div>
            <table>
              <tr>
                <th>Character Added</th>
              </tr>
              {TableCharacters(isItUpdating)}
            </table>
            <div className="container">
              {/* roles that do wakeup */}
              {/* first role of 4 */}
              {/* <div onClick={() => window.open("https://one-night.fandom.com/wiki/Doppelg%C3%A4nger")}>
                <img src={Doppelganger} alt="Doppelganger" />
              </div> */}
              <div onClick={() => addCharacter('werewolf')}>
                <img src={Werewolf} alt="Werewolf" />
                {/* <p>Werewolves</p> */}
              </div>
              {/* <div onClick={() => window.open("https://one-night.fandom.com/wiki/Minion")}>
                <img src={Minion} alt="Minion" />
              </div> */}
              {/* <div onClick={() => window.open("https://one-night.fandom.com/wiki/Mason")}>
                <img src={Mason} alt="Mason" />
              </div> */}
              <div onClick={() => addCharacter('Seer')}>
                <img src={Seer} alt="Seer" />
                {/* <p>Seer</p> */}
              </div>
              <div onClick={() => addCharacter('Robber')}>
                <img src={Robber} alt="Robber" />
                {/* <p>Robber</p> */}
              </div>
              <div onClick={() => addCharacter('Troublemaker')}>
                <img src={Troublemaker} alt="Troublemaker" />
                {/* <p>Troublemaker</p> */}
              </div>
              {/* <div onClick={() => window.open("https://one-night.fandom.com/wiki/Drunk")}>
                <img src={Drunk} alt="Drunk" />
              </div> */}
              <div onClick={() => addCharacter('Insomniac')}>
                <img src={Insomniac} alt="Insomniac" />
                {/* <p>Insomniac</p> */}
              </div>
              {/* roles that do not wake */}
              <div onClick={() => addCharacter('Villager')}>
                <img src={Villager} alt="Villager" />
                {/* <p>Villager</p> */}
              </div>
              <div onClick={() => addCharacter('Hunter')}>
                <img src={Hunter} alt="Hunter" />
              </div>
              {/* <div onClick={() => window.open("https://one-night.fandom.com/wiki/Tanner")}>
                <img src={Tanner} alt="Tanner" />
              </div> */}
            </div>
            <div className="my-3">
              <button type="button" className="btn btn-primary" onClick={() => setwhatValue('empty')}>Back</button>
            </div>
            {showPlayButton(characters)}
            {/* <button type="button" className="btn btn-primary" onClick={() => setwhatValue('play')}>Play</button> */}
          </div>
        )
      case 'play':
        return (
          <div>
            <div className="container">
              <table>
                <tr>
                  <th>Character Added</th>
                </tr>
                {TableCharacters(isItUpdating)}
              </table>
              <h1>input names to randomize</h1>
              <input type="text" onChange={(e) => playerInput(e.target.value)}/>
              <button onClick={() => setValue()}>Set Value</button>
            </div>
            {/* {table()} */}
            <div className="PlayerCharacterTable">
              <table>
                <tr>
                  <th>Name Added</th>
                </tr>
                {playerArrayHolder.map((player) => (
                  <tr>
                    <th key={playerArrayHolder.indexOf(player)}>{player}</th>
                  </tr>
                ))
                }
              </table>
              <table>
                <tr>
                  <th>Character</th>
                </tr>
                {characters.map((character) => (
                  <tr>
                    <th key={characters.indexOf(character)}>{character}</th>
                  </tr>
                ))
                }
              </table>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => setwhatValue('empty')}>Back</button>
          </div>
        )
      case 'instruction':
        return (
          <div>
            <div className="container">
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Werewolf")}>
                <img src={Werewolf} alt="Werewolf" />
                {/* <p>Werewolves</p> */}
              </div>
              {/* <div onClick={() => window.open("https://one-night.fandom.com/wiki/Minion")}>
                <img src={Minion} alt="Minion" />
              </div> */}
              {/* <div onClick={() => window.open("https://one-night.fandom.com/wiki/Mason")}>
                <img src={Mason} alt="Mason" />
              </div> */}
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Seer ")}>
                <img src={Seer} alt="Seer" />
              </div>
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Robber")}>
                <img src={Robber} alt="Robber" />
              </div>
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Troublemaker")}>
                <img src={Troublemaker} alt="Troublemaker" />
              </div>
              {/* <div onClick={() => window.open("https://one-night.fandom.com/wiki/Drunk")}>
                <img src={Drunk} alt="Drunk" />
              </div> */}
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Insomniac")}>
                <img src={Insomniac} alt="Insomniac" />
              </div>
              {/* roles that do not wake */}
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Villager")}>
                <img src={Villager} alt="Villager" />
              </div>
              <div onClick={() => window.open("https://one-night.fandom.com/wiki/Hunter")}>
                <img src={Hunter} alt="Hunter" />
              </div>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => setwhatValue('empty')}>Back</button>
          </div>
        )
      default:
        return(
          <div>
            <h1>Please choose if you want to explain or play</h1>
            <div className="outerBox">
              <div className="buttonBox">
                <button type="button" className="btn btn-primary mr-4" onClick={() => setwhatValue('instruction')}>Instruction</button>
                <button type="button" className="btn btn-primary" onClick={() => setwhatValue('character')}>Character Selection</button>
              </div>
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
