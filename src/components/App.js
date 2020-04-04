import React from "react";

import UserCreate from "../components/UserCreate";

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
        <UserCreate />
      </div>
    );
  }
}

export default App;
