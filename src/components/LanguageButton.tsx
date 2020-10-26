import React, { Component } from "react"


export class LanguageButton extends Component<any, any> {
  
  render() {
    return(
      <span onClick={() => this.props.toggleLanguage()}></span>
    )
  }
}