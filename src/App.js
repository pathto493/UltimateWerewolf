import './App.css';
import React, { useState } from 'react';

// images from ultimate werewolf
import Doppelganger from './images/Doppelganger.jpeg'
import Drunk from './images/Drunk.png'
import Hunter from './images/HunterNew.png'
import Insomniac from './images/InsomniacNew.png'
import Mason from './images/Mason.png'
import Minion from './images/Minion.jpeg'
import Robber from './images/RobberNew.png'
import Seer from './images/SeerNew.png'
import Tanner from './images/Tanner.png'
import Troublemaker from './images/TroubleMakerNew.png'
import Villager from './images/VillagerNew1.png'
import Werewolf from './images/werewolfNew.jpg'

// buttons
import CharacterSelection from './images/CharacterSelectionpng.png'
import instruction from './images/instruction.png'

function App() {
  const [whatValue, setwhatValue] = useState('empty')
  const [playerInputValue, setplayerInputValue] = useState('empty')
  const [playerArrayHolder, setplayerArrayHolder] = useState([])
  const [characters, setcharacters] = useState([])
  const [Randomcharacters, setRandomcharacters] = useState([])
  const [isItUpdating, setisItUpdating] = useState(false)
  const [isItUpdatingPlayerList, setisItUpdatingPlayerList] = useState(false)
  const [swapCharacterIndex, setswapCharacterIndex] = useState(0)

  // duplicate counter
  const [WereWolfCount, setWereWolfCount] = useState(0)
  const [VillagerCount, setVillagerCount] = useState(0)

  const playerInput = (value) => {
    setplayerInputValue(value)
  }
  const setValue = () => {
    setplayerArrayHolder((initialValue) => [...initialValue, playerInputValue])
  }

  function deletePlayer(role) {
    setisItUpdatingPlayerList(true)
    playerArrayHolder.splice(playerArrayHolder.indexOf(role), 1)
    setTimeout(function () {
      setisItUpdatingPlayerList(false)
    }, 500);
  }

  function addCharacter(characterToAdd) {
    switch (characterToAdd) {
      case 'werewolf':
        setWereWolfCount(WereWolfCount + 1)
        if (WereWolfCount !== 0) {
          let duplicateCharacter = `${characterToAdd}${WereWolfCount}`
          setcharacters((initialvalue) => [...initialvalue, duplicateCharacter])
        } else {
          setcharacters((initialvalue) => [...initialvalue, characterToAdd])
        }
        break;
      case 'villager':
        setVillagerCount(VillagerCount + 1)
        if (VillagerCount !== 0) {
          let duplicateCharacterVIllager = `${characterToAdd}${VillagerCount}`
          setcharacters((initialvalue) => [...initialvalue, duplicateCharacterVIllager])
        } else {
          setcharacters((initialvalue) => [...initialvalue, characterToAdd])
        }
        break;
      default:
        setcharacters((initialvalue) => [...initialvalue, characterToAdd])
    }
    // let CharacterName = characterToAdd
    // let marker = 1
    // if (characters.includes(characterToAdd) === true) {
    //   CharacterName = `${characterToAdd} ${marker}`
    //   if (characters.includes(CharacterName) === true) {
    //     marker ++
    //     CharacterName = `${characterToAdd} ${marker}`
    //     setcharacters((initialvalue) => [...initialvalue, CharacterName])
    //   } else {
    //     setcharacters((initialvalue) => [...initialvalue, CharacterName])
    //   }
    // } else {
    //   setcharacters((initialvalue) => [...initialvalue, characterToAdd])
    // }
  }

  function deleteCharacter(role) {
    setisItUpdating(true)
    if (role.includes('werewolf') === true) {
      setWereWolfCount(WereWolfCount - 1)
    } else {
      if (role.includes('villager') === true) {
        setVillagerCount(VillagerCount - 1)
      } else {
        temp()
      }
    }
    characters.splice(characters.indexOf(role), 1)
    setTimeout(function () {
      setisItUpdating(false)
    }, 500);
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
  const [shuffleStatus, setshuffleStatus] = useState(false)
  function StartShuffle() {
    console.log(characters)
    console.log(characters.length)
    let x = 0
    while (characters.length !== 0) {
      setshuffleStatus(true)
      shuffleCharacters()
      console.log(Randomcharacters)
      console.log(characters)
      if (x === 10) {
      console.log(x)
      break;
      } else {
        x++
      }
    }
    setcharacters(Randomcharacters)
    setRandomcharacters([])
    setTimeout(function () {
      setshuffleStatus(false)
    }, 500);
  }

  const isitShuffling = (yesOrNo,classForRow) => {
    if (yesOrNo === true) {
      return (
        <h2>Please wait we are shuffling</h2>
      )
    } else {
      return (
        <table>
          <tr className="mb-4">
            <th>Character</th>
          </tr>
          {characters.map((character) =>
            (
            <tr key={characters.indexOf(character)} className={classForRow}>
                <p className="playCharacter">{character}</p>
              <button className="btn btn-secondary" onClick={() => swapCharacters(characters.indexOf(character), swapCharacterIndex, characters, setcharacters)}>Swap</button>
                <select id="swap" onChange={(e) => setswapCharacterIndex(e.target.value)}>
                  {characters.map((character) => (
                    <option value={characters.indexOf(character)}>{character}</option>
                  ))}
                </select>
              </tr>
            )
          )
          }
        </table>
      )
    }
  }

  function swapCharacters(itemAIndex, itemBIndex, array, setter) {
    let select = document.getElementById('swap');
    // store the original value of item A and item B
    let itemA = array[itemAIndex]
    let itemB = array[itemBIndex]
    // make index of item A to be B and make index of item B to be A
    array[itemAIndex] = itemB
    array[itemBIndex] = itemA
    setter(array)
    setwhatValue('wait')
    setTimeout(function () {
      setwhatValue('play')
    }, 1000);

  }
  const [listReady, setlistReady] = useState(false)
  function PlayerListReady() {
    if (playerArrayHolder.length === characters.length) {
      setwhatValue('play')
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
          <tr className="characterListTable">
            <th key={characters.indexOf(character)}>{character}</th>
            <button onClick={() => deleteCharacter(character)}>delete</button>
          </tr>
        ))
      )
    }
  }

  const playerList = (isItUpdating) => {
    if (isItUpdating === true) {
      return (
        <h2>Please wait we are updating</h2>
      )
    } else {
      return (
          playerArrayHolder.map((player) => (
            <tr className="characterListTable">
              <th key={playerArrayHolder.indexOf(player)}>{player}</th>
              <button onClick={() => deletePlayer(player)}>delete</button>
            </tr>
          ))
      )
    }
  }

  const showPlayButton = (value) => {
    if (value.length !== 0) {
      return (
        <button type="button" className="btn btn-success btn-lg" onClick={() => setwhatValue('playerInput')}>Add Players</button>
      )
    } else {
      temp()
    }
  }

  const instructionOrPlay = (value) => {
    switch (value) {
      case 'character':
        return(
          <div className="CharacterSelectionMainContainer">
            <div className="TopBar">
              <div className="CharacterSelectionInstruction">
                <h1>Click on the characters cards to select it</h1>
              </div>
              <div className="CharacterAdded">
                <h1>{characters.length} Character Added</h1>
              </div>
            </div>
            <div className="CharacterSelectionBox">
              <div>
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
                  <div onClick={() => addCharacter('villager')}>
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
                <div className="characterSelectionbackButton">
                  <button type="button" className="btn btn-primary btn-lg" onClick={() => setwhatValue('empty')}>Back</button>
                  {showPlayButton(characters)}
                </div>

                {/* <button type="button" className="btn btn-primary" onClick={() => setwhatValue('play')}>Play</button> */}
              </div>
              <table className="SelectedCharacterDisplayTable">
                  {/* <tr>
                    <th>Character Added</th>
                  </tr> */}
                  {TableCharacters(isItUpdating)}
              </table>
            </div>
          </div>
        )
      case 'playerInput':
        return (
          <div className="CharacterSelectionMainContainer">
            <div className="TopBar">
              <div className="CharacterSelectionInstruction">
                <h1>Add Player</h1>
              </div>
              <div>
                <h1>{playerArrayHolder.length} Players</h1>
              </div>
              <div className="CharacterAdded">
                <h1>{characters.length} Characters</h1>
              </div>
            </div>
            <div className="CharacterSelectionBox">
              <div>
                <div className="playerAddBox">
                  {/* <h1>input names to randomize</h1> */}
                  <input type="text" onChange={(e) => playerInput(e.target.value)} />
                  <button onClick={() => setValue()}>Add Player</button>
                  {/* <button onClick={() => StartShuffle()}>Randomize</button> */}
                </div>
              </div>
              <table>
                {playerList(isItUpdatingPlayerList)}
              </table>
              <table className="SelectedCharacterDisplayTable">
                {TableCharacters(isItUpdating)}
              </table>
            </div>
            <div className="characterSelectionbackButton">
              <button type="button" className="btn btn-primary btn-lg" onClick={() => setwhatValue('character')}>Back</button>
              {/* {showPlayButton(characters)} */}
              <button className="btn btn-success btn-lg" onClick={() => PlayerListReady()}>play</button>
            </div>
          </div>
        )
      case 'play':
        console.log(characters)
        return (
          <div className="playMainContainer">
            <div className="PlayerCharacterTable">
              <table>
                <tr className="mb-4">
                  <th>Name Added</th>
                </tr>
                {playerArrayHolder.map((player) => (
                  <tr className="playerRow">
                    <th key={playerArrayHolder.indexOf(player)}>{player}</th>
                  </tr>
                ))
                }
              </table>
              {isitShuffling(shuffleStatus, "characterRow")}
              {/* <table>
                <tr className="mb-4">
                  <th>Character</th>
                </tr>
                {characters.map((character) => (
                  <tr key={characters.indexOf(character)} className="characterRow">
                    <p className="playCharacter">{character}</p>
                    <button onClick={() => swapCharacters(characters.indexOf(character), swapCharacterIndex, characters, setcharacters)}>Swap</button>
                    <select id="swap" onChange={(e) => setswapCharacterIndex(e.target.value)}>
                      {characters.map((character)=> (
                        <option value={characters.indexOf(character)}>{character}</option>
                      ))}
                    </select>
                  </tr>
                ))
                }
              </table> */}
            </div>
            <div className="playPageButtonBox">
              <button className="btn btn-secondary btn-lg" onClick={() => StartShuffle()}>Randomize</button>
              <button type="button" className="btn btn-dark btn-lg" onClick={() => setwhatValue('playerInput')}>Back</button>
            </div>
          </div>
        )
      case 'wait':
        return (
          <div className="PlayerCharacterTable">
            <h1>Please Wait We Are Updating</h1>
          </div>
        )
      case 'instruction':
        return (
          <div>
            <h1 className="instructionTitle">Click on Character for Instructions</h1>
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
            <button type="button" className="btn btn-secondary btn-lg" onClick={() => setwhatValue('empty')}>Back</button>
          </div>
        )
      default:
        return(
          <div className="defaultPageBox">
            <h1>ULTIMATE WEREWOLF ONLINE</h1>
            <div className="outerBox">
              <div className="buttonBox">
                <img src={instruction} alt="instruction" onClick={() => setwhatValue('instruction')}/>
                <img src={CharacterSelection} alt="instruction" onClick={() => setwhatValue('character')}/>
                {/* <button type="button" className="btn btn-secondary btn-lg mr-4" onClick={() => setwhatValue('instruction')}>Instruction</button>
                <button type="button" className="btn btn-dark btn-lg" onClick={() => setwhatValue('character')}>Character Selection</button> */}
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
