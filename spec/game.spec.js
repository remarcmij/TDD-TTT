var TicTacToe = require('./../src/TicTacToe');

describe('Tic Tac Toe game start and play', () => {
    var game;
    beforeEach(() => {
        game = new TicTacToe();
    });

    it('should create a game', () => {
        expect((game instanceof TicTacToe)).toBe(true);
    });

    it('should have a method called start and if there is no player should return false', () => {
        spyOn(game, 'start');
        game.start();
        expect(game.start).toHaveBeenCalled();
        expect(game.hasBeenStarted).toBe(false);
    });

    it('should have a method for add a player and should accept a nick', () => {
        spyOn(game, 'addPlayer');
        game.addPlayer('Mauro');
        expect(game.addPlayer).toHaveBeenCalled();
    });

    it('should call start if we have add two players', () => {
        spyOn(game, 'start');
        game.addPlayer('Mauro');
        game.addPlayer('Jim');
        expect(game.start).toHaveBeenCalledTimes(1);
    });

});

describe('Tic Tac Toe with two players', () => {
    var game;
    beforeEach(() => {
        game = new TicTacToe();
        game.addPlayer('Mauro');
        game.addPlayer('Jim');
    });

    it('should set the status of the match started', () => {
        expect(game.hasBeenStarted).toBe(true);
    });

    it('should be able to only add two players to a match', () => {
        game.addPlayer('Someone else');
        expect(game.players.length).toBe(2);
    });

    it('should return the name of the first player for a corresponding winning config', () => {
        var res = game.resolveWinner([1, 1, 1, 0, 0, 0, 0, 0, 0]);
        expect(res).toBe('Mauro');
    });

    it('should return the name of the second player for a corresponding winning config', () => {
        var res = game.resolveWinner([0, 0, 0, 2, 2, 2, 0, 0, 0]);
        expect(res).toBe('Jim');
    });

    it('should return null if there is no winning config', () => {
        var res = game.resolveWinner([1, 0, 0, 0, 2, 2, 0, 0, 0]);
        expect(res).toBe(null);
    });

    it('should throw an error if there more than one winning config', () => {
        function foo() {
            var res = game.resolveWinner([1, 1, 1, 2, 2, 2, 0, 0, 0]);
        }

        expect(foo).toThrow();
    });
});