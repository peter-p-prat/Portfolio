import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import './styles/fonts/shrimp.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MyThemeProvider } from "./components/context/ThemeContext";
import { GraphQLClient, ClientContext } from 'graphql-hooks';

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": "Bearer 90e90f013784a4024e642a41425ba8",
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MyThemeProvider>
      <ClientContext.Provider value={client}>
        <App />
      </ClientContext.Provider>
     </MyThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
