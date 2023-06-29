const ScoreBoard = ({ score }) => {
    return (
      <div className="score-board">
      <h1 style={{ marginLeft:"300px"}}>Total Score:</h1>
        <h2 style={{color:"red", marginLeft:"380px" }}>{score}</h2>
      </div>
    )
  }
  
  export default ScoreBoard