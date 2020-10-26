import React, { Component } from 'react';

const LangContext = React.createContext({
  lang: '',
  toggleLang: () => { }
});

export class LangProvider extends Component<any, any>{

  toggleLang = () => {
    this.setState({ lang: this.state.lang === "fr" ? "en" : "fr"})
  }

  state = {
    lang: 'fr',
    toggleLang: this.toggleLang
  };

  render() {
    return (
      <LangContext.Provider value={this.state}>
        {this.props.children}
      </LangContext.Provider>
    );
  }
}

export const LangConsumer = LangContext.Consumer;