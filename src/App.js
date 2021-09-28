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
  const [Randomcharacters, setRandomcharacters] = useState([])
  const [isItUpdating, setisItUpdating] = useState(false)
  const [swapCharacterIndex, setswapCharacterIndex] = useState(0)

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

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function shuffleCharacters() {
    // get the max lenght of array
    console.log(characters.length)
    // use a random num generator to call out the item in array by position
    let index = getRandomInt(characters.length)
    // push that new item into a new array and delete the item from the original array
    // console.log(characters[2])
    Randomcharacters.push(characters[index])
    characters.splice(index, 1)
  }

  function StartShuffle() {
    let x = 0
    while (characters.length !== 0) {
      shuffleCharacters()
      // console.log(Randomcharacters)
      // console.log(characters)
      if (x === 5) {
      console.log(x)
      break;
      } else {
        x++
      }
    }
    setcharacters(Randomcharacters)
    setRandomcharacters([])
  }

  function swapCharacters(itemAIndex, itemBIndex, array, setter) {
    let select = document.getElementById('swap');
    console.log(`showingSelected ${select.selected}`)
    // store the original value of item A and item B
    let itemA = array[itemAIndex]
    let itemB = array[itemBIndex]
    // make index of item A to be B and make index of item B to be A
    array[itemAIndex] = itemB
    array[itemBIndex] = itemA
    setter(array)
    console.log(array)
    setwhatValue('wait')
    setTimeout(function () {
      setwhatValue('play')
    }, 1000);

  }
  const [listReady, setlistReady] = useState(false)
  function PlayerListReady() {
    if (playerArrayHolder.length === characters.length) {
      setlistReady(true)
    }
    else {
      alert('Number of player is not equal to number of character selected')
    }
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
              <button onClick={() => StartShuffle ()}>Randomize</button>
            </div>
            <div>
              <h2>Player List</h2>
              {playerArrayHolder.map((player) => (
                <tr>
                  <th key={playerArrayHolder.indexOf(player)}>{player}</th>
                </tr>
              ))
              }
            </div>
            <button onClick={() => PlayerListReady()}>Use This</button>
            {/* {table()} */}
            <div className="PlayerCharacterTable">
              {listReady === true ?
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
                  :
                  temp()
                }
              <table>
                <tr>
                  <th>Character</th>
                </tr>
                {characters.map((character) => (
                  <tr>
                    <th key={characters.indexOf(character)}>{character}</th>
                    <button onClick={() => swapCharacters(characters.indexOf(character), swapCharacterIndex, characters, setcharacters)}>Swap</button>
                    {/* <th onClick={() => swapCharacters(characters.indexOf(character), swapCharacterIndex, characters, setcharacters)}>swap</th> */}
                    <select id="swap" onChange={(e) => setswapCharacterIndex(e.target.value)}>
                      {characters.map((character)=> (
                        <option value={characters.indexOf(character)}>{character}</option>
                      ))}
                      {/* <option value="en" selected>English</option>
                      <option value="es">Español</option>
                      <option value="pt">Português</option> */}
                    </select>
                  </tr>
                ))
                }
              </table>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => setwhatValue('empty')}>Back</button>
          </div>
        )
      case 'wait':
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
              <input type="text" onChange={(e) => playerInput(e.target.value)} />
              <button onClick={() => setValue()}>Set Value</button>
              <button onClick={() => StartShuffle()}>Randomize</button>
            </div>
            {/* {table()} */}
            <div className="PlayerCharacterTable">
              <h1>Wait Updating</h1>
            </div>
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
