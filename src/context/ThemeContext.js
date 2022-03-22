import React, { Component, createContext, useState } from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = { 
    isLightTheme: true, 
    light:  {textHeader: '#333', textOptions: "#555", element: "#fbfbf9", bg: "#f6f7fb" },
    dark: {textHeader: "#fff", textOptions: "#ddd", element: "#232426", bg: "#4d5156ff"} 
  }
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    ) 
  }
}

export default ThemeContextProvider;

// function ThemeContextProvider(){
// const [isLightTheme, setIsLightTheme] = useState(true)
// toggleTheme = () => { 
//   (IsLightTheme: !isLightTheme)}

//   return (
//     ""
//   )
// }
// export default ThemeContextProvider
