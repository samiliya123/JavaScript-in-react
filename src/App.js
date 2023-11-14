import React from "react"

const Pet = () => {
  return React.createElement('div', {},  [
    React.createElement('h1' , {}, 'AlexA'),
    React.createElement('h2' , {}, 'Dog'),
    React.createElement('h3' , {}, 'breed'),
  ])
}





const App = () => {
  return React.createElement('div', {}, [ React.createElement('h1', {}, 'Adopt Me!'),
  React.createElement(Pet),
  React.createElement(Pet),
  React.createElement(Pet),

])
}
export default App

// const container  = document.getElementById('root')
// const root =  ReactDOM.createRoot(container)
// root.render(React.createElement(App))

 
