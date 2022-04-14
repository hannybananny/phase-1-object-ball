
function gameObject() {
    return {
    home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: {
            'Alan Anderson': {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
            },
            'Reggie Evans': {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            'Brook Lopez': {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15 
            },
            'Mason Plumlee': {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
            },
            'Jason Terry': {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            } ,
        }
    },
    away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
            'Jeff Adrien': {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
            'Bismak Biyombo': {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
            },
            'DeSagna Diop': {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,    
            },
            'Ben Gordon': {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0, 
            },
            'Brendon Haywood': {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
            }
        }
    }
}}

function homeTeam(){
    let object = gameObject()
    return object.home
}

function awayTeam(){
    let object = gameObject()
    return object.away
}

function players(){
    return Object.assign({}, awayTeam().players, homeTeam().players)
}

function numPointsScored(name) {
   return players()[name].points
}

function shoeSize(name) {
    return players()[name].shoe
} 

function teamName(){
    let object = gameObject()
    let teams = Object.values(object)
    return teams.map(team => team.teamName) 
}

function playerNumbers(teamName){
   let object = gameObject()
   let homeTeamName = object.home.teamName
   let awayTeamName = object.away.teamName
   if (teamName === homeTeamName) {
       let homeStats = Object.values(homeTeam().players)
       return homeStats.map(element => element.number)
   }
   else if (teamName === awayTeamName){
       let awayStats = Object.values(awayTeam().players)
       return awayStats.map(element => element.number)
   }
}

function playerStats(name){
    return players()[name]
}

function bigShoeRebound(){
    const allPlayers = players()
    let biggestShoe = 0
    let reboundNumber = 0
    for (const player in allPlayers){
        let currentPlayer = allPlayers[player]
        if (currentPlayer.shoe > biggestShoe){
            biggestShoe = currentPlayer.shoe
            reboundNumber = currentPlayer.rebounds
    }}
    return reboundNumber
}

