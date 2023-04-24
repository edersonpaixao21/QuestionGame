import React, { useEffect,useContext} from 'react'
import { QuizContext } from './context/quiz.jsx'
import './App.css'
import Welcome from '../src/components/Welcome/Index.jsx'
import Question from '../src/components/Question/Index.jsx'
import GameOver from '../src/components/GameOver/Index.jsx'


const App = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() =>{
    dispatch({type: 'REORDER_QUESTIONS'});
  },[])


  return (
    <div className='App'>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playning' && <Question />}
      {quizState.gameStage === 'End' && <GameOver />}
    </div>
  )
}

export default App

