import Quizbox from "./Quizbox"

const Showquiz = ({quiz , setQuizz ,setQuiz_name, setAuth}) => {
  

  return (
    
    <div className="container-quiz">
      {quiz.length > 0 ? quiz.map((quizz)=>(
        <Quizbox name={"2566"} status = {quizz.st_statuskpi} text={quizz.doc_maintopic} setQuiz_name={setQuiz_name} 
        setQuizz={setQuizz} setAuth={setAuth}/>
      )):
      <div>
        'No Quiz show'
      </div>} 
    </div>
  )
}

export default Showquiz