// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Switch, Route } from "react-router-dom";
// import { createBrowserHistory } from 'history';
// import MusicMaster from "./projects/music-master/components/App"
// import WeatherCity from "./projects/weather-app/components/App"
// import App from "./components/App";
// import Jokes from "./components/Jokes";
// import Header from "./components/Header";
// import "./index.css";

const express = require("express");
const app = express();
const path = require('path')
const publicDir = path.join(__dirname, 'public')

app.use('/', express.static(publicDir))
app.get("/ping", (req, res) => {
    res.send("pong")
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));


// ReactDOM.render(
//     <Router history={createBrowserHistory()}>
//         <Switch>
//             <Route exact path="/" render={() => <Header><App /></Header>} />
//             <Route path="/jokes" render={() => <Header><Jokes /></Header>} />
//             <Route path="/music-master" render={() => <Header><MusicMaster /></Header>} />
//             <Route path="/weather-app" render={() => <Header><WeatherCity /></Header>} />
//             <Route path="/getaway-meditation" render={() => <Header><WeatherCity /></Header>} />
//         </Switch>
//     </Router>,
//     document.getElementById('root')
// );
