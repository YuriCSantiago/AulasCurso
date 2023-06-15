// components
import FristComponent from "./components/FirstComponent"
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import ChallengeComponent from "./components/ChallengeComponent";

// Styles / css
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FristComponent />
      <TemplateExpressions/>
      <MyComponent/>
      <Events />
      <ChallengeComponent/>
    </div>
  );
}

export default App;
