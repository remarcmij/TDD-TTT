// The winning positions are defined as regular expressions (8 winning pattern per player)
const winningPatternsPerPlayer = [
    [/^111......$/, /^...111...$/, /^......111$/, /^1..1..1..$/, /^.1..1..1.$/, /^..1..1..1$/, /^1...1...1$/, /^..1.1.11..$/],
    [/^222......$/, /^...222...$/, /^......222$/, /^2..2..2..$/, /^.2..2..2.$/, /^..2..2..2$/, /^2...2...2$/, /^..2.2.22..$/]
]

function TicTacToe() {

    this.hasBeenStarted = false
    this.players = []

    this.start = function() {
        this.hasBeenStarted = true
    }

    this.addPlayer = function(name) {
        if (this.players.length < 2) {
            this.players.push(name)
        }
        if (this.players.length === 2) return this.start()
        return false
    }

    this.resolveWinner = function(boardConfig) {
        // Convert the boardConfig array into a string.
        // A string is in this case more convenient because
        // it is a single value and can easily be matched
        // against regular expressions.
        // e.g. [1, 1, 1, 0, 0, 0, 0, 0, 0] becomes
        // '111000000'
        let boardAsString = boardConfig.join('')

        let nameOfWinner = null

        let winningPatternsFound = 0

        winningPatternsPerPlayer.forEach((winningPatterns, playerIndex) => {
            winningPatternsFound = winningPatterns.reduce((matchCount, winningPattern) => {
                if (boardAsString.match(winningPattern)) {
                    nameOfWinner = this.players[playerIndex]
                    matchCount += 1
                }
                return matchCount
            }, winningPatternsFound)
        })

        if (winningPatternsFound > 1) {
            throw new Error('More than one winning pattern found')
        }

        return nameOfWinner
    }
}

module.exports = TicTacToe