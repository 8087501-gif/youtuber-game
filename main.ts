mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).sayText("hello", 1000, false)
})
mp.onScore(10, function (player2) {
    mp.gameOverPlayerWin(player2)
})
mp.onLifeZero(function (player2) {
    sprites.destroy(mp.getPlayerSprite(player2))
})
mp.onControllerEvent(ControllerEvent.Connected, function (player2) {
    mp.setPlayerState(player2, MultiplayerState.life, 3)
    mp.setPlayerState(player2, MultiplayerState.score, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.life, -1)
    sprite.setPosition(71, 5)
})
let mySprite = sprites.create(assets.image`gost`, SpriteKind.Enemy)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`player 1`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`player 2`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(0, 10)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(143, 8)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(-4, -5)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setPosition(155, 107)
mp.setPlayerIndicatorsVisible(true)
