import React from "react";

import LangugageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LangugageContext;

  render() {
    const text = this.context === "english" ? "Name" : "姓名";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
