# Brixel.Findr

Findr is a streetview game where two (or maybe more?) players should find each other.
The idea is that when a player is navigating in the streetview "world", their current location is being send to the API and the other play is notified of that.

## How to play
- Create a game
- Share the link to that game to at least one other player
- All players will start at a certain location in eachother vicinity (for example, in the same city)
- Players move using the Streetview navigation indicators (the arrows)
- The players need to find each other
    - Since no real indication in streetview can be done, an external indicator is shown
    - The players need to be within a range of **TBD** meters
    - Once all players are together, they win

## API

![.NET Core Build and Deploy](https://github.com/Brixel/Brixel.Frindr/workflows/.NET%20Core%20Build%20and%20Deploy/badge.svg)

The application consists of a simple Game API managing the game state including the following:
- Games
- Players in a game
- The last used location of a player

## Clients

![Angular Build and Deploy](https://github.com/Brixel/Brixel.Frindr/workflows/Angular%20Build%20and%20Deploy/badge.svg)

Next to the API, the following end-user applications are available:
- Angular app
Webapp allowing to join a game and playing the game.


## Features

- Creating a game
- Joining a game
- Moving around using the Streetview interface

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### Installing

#### API
The API is build using .NET Core 3.1. It has just the basic dependencies.

#### Clients
##### Angular
The Angular app is running on Angular 11, so make sure you've got the correct Node.js version installed.
You'll need an Google Maps API SDK access token that has the Javascript SDK enabled. You will also need to have Billing enabled.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)