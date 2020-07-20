// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. This section holds the state. It describes the state object which is called this.state and is equal to the key:value pair of userInput: "". The state is an object that stores dynamic data and determines how the component renders and behaves.
    //Creating a state object that contains a key of "userInput" and a value of "" (empty string).
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. A method is created that will take the value from an input and save it in the state key "userInput". We know its an input because of the letter e in the argument of robot.
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. Here we deconstruct this.state.userInput.
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. Here we add onChange, which calls a method called this.robot that will collect information entered in the input and therefore update the state.*/}
          onChange={ this.robot }
          {/* 5. This refers to the state of our object. We need both value and onChange in our input. Input has its own internal state, so we have to use value and onChange to pass proper context into it. The input is re-rendered every time the state of the component changes.*/}
          value={ userInput }
        />

        <div>
          {/* 6. We call in the child component GoodRobot*/}
          <GoodRobot
            {/* 7. This refers to the state of our object. This changes according to the code that's inside the child component, GoodRobot.*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. Inside the child component, we have a div container that holds the userInput for GoodRobot.
      <div>
        <h3>Good Robot</h3>
        {/* 9. Here we see the text that GoodRobot will show once user has inputted their text on the user input field. */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. Every component must be exported.
export default GoodRobot
