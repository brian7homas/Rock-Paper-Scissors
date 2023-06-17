import Data from './data'
const Rules = async (player:string, score:any) => {
  const randIndex = Math.floor(Math.random() * Data.length)
  score.house = Data[randIndex].name
  score.houseIcon = Data[randIndex].icon
  score.houseBg = Data[randIndex].color
  score.player = player
  const win = () => {
    score.message = 'YOU WIN'
    score.game = 1
    score.playerPoints = score.playerPoints + 1
    return score
  }
  const lose = () => {
    score.message = 'YOU LOSE'
    score.game = 0
    // 0 is lowest score player can have
    if(score.playerPoints > 0){
      score.playerPoints = score.playerPoints - 1
      return score
    }
  }
  const draw = () => {
    score.message = 'DRAW'
    score.game = 2
    return score
  }
  switch(player){
    case 'scissors':
      if(house == 'spock') console.log('house: spock - HOUSE WINS')
      if(house == 'lizard') console.log('house: lizard - YOU WIN')
      if(house == 'rock') console.log('house: rock - HOUSE WINS')
      if(house == 'paper') console.log('house: paper - YOU WIN')
      if(house == 'scissors') console.log('house: scissors - DRAW')
      break
    case 'paper':
      if(house == 'spock') console.log('house: spock - YOU WIN')
      if(house == 'lizard') console.log('house: lizard - HOUSE WINS')
      if(house == 'rock') console.log('house: rock - YOU WIN')
      if(house == 'paper') console.log('house: paper - DRAW')
      if(house == 'scissors') console.log('house: scissors - HOUSE WINS')
      break
    case 'rock':
      if(house == 'spock') console.log('house: spock - HOUSE WINS')
      if(house == 'lizard') console.log('house: lizard - YOU WIN')
      if(house == 'rock') console.log('house: rock - DRAW')
      if(house == 'paper') console.log('house: paper - HOUSE WINS')
      if(house == 'scissors') console.log('house: scissors - YOU WIN')
      break
    case 'lizard':
      if(house == 'spock') console.log('house: spock - YOU WIN')
      if(house == 'lizard') console.log('house: lizard - DRAW')
      if(house == 'rock') console.log('house: rock - HOUSE WINS')
      if(house == 'paper') console.log('house: paper - YOU WIN')
      if(house == 'scissors') console.log('house: scissors - HOUSE WINS')
      break
    case 'spock':
      if(house == 'spock') console.log('house: spock - DRAW')
      if(house == 'lizard') console.log('house: lizard - HOUSE WINS')
      if(house == 'rock') console.log('house: rock - YOU WIN')
      if(house == 'paper') console.log('house: paper - HOUSE WINS')
      if(house == 'scissors') console.log('house: scissors - YOU WIN')
      break
  }
}
export default Rules