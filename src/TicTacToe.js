// The winning positions are defined as regular expressions (8 winning pattern per player)
const winningPatternsPerPlayer = [
    [/^111......$/, /^...111...$/, /^......111$/, /^1..1..1..$/, /^.1..1..1.$/, /^..1..1..1$/, /^1...1...1$/, /^..1.1.1..$/],
    [/^222......$/, /^...222...$/, /^......222$/, /^2..2..2..$/, /^.2..2..2.$/, /^..2..2..2$/, /^2...2...2$/, /^..2.2.2..$/]
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
        let boardAsString = boardConfig.join('')
        let nameOfWinner = null
        let playerIndex = 0

        for (let winningPatterns of winningPatternsPerPlayer) {
            for (let winningPattern of winningPatterns) {
                if (boardAsString.match(winningPattern)) {
                    if (nameOfWinner) {
                        throw new Error('More than one winning pattern found')
                    }
                    nameOfWinner = this.players[playerIndex]
                }
            }
            playerIndex += 1
        }

        return nameOfWinner
    }
}

module.exports = TicTacToe