import React from "react";

import UserCreate from "../components/UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          <i
            className="flag ca"
            onClick={() => this.onLanguageChange("English/French")}
          />
          <i
            className="flag cn"
            onClick={() => this.onLanguageChange("Mandarin")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
