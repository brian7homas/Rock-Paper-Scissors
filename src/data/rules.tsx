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
      if(score.house == 'spock') lose()
      if(score.house == 'lizard') win()
      if(score.house == 'rock') lose()
      if(score.house == 'paper') win()
      if(score.house == 'scissors') draw()
      break
    case 'paper':
      if(score.house == 'spock') win()
      if(score.house == 'lizard') lose()
      if(score.house == 'rock') win()
      if(score.house == 'paper') draw()
      if(score.house == 'scissors') lose()
      break
    case 'rock':
      if(score.house == 'spock') lose()
      if(score.house == 'lizard') win()
      if(score.house == 'rock') draw()
      if(score.house == 'paper') lose()
      if(score.house == 'scissors') win()
      break
    case 'lizard':
      if(score.house == 'spock') win()
      if(score.house == 'lizard') draw()
      if(score.house == 'rock') lose()
      if(score.house == 'paper') win()
      if(score.house == 'scissors') lose()
      break
    case 'spock':
      if(score.house == 'spock') draw()
      if(score.house == 'lizard') lose()
      if(score.house == 'rock') win()
      if(score.house == 'paper') lose()
      if(score.house == 'scissors') win()
      break
  }
}
export default Rules