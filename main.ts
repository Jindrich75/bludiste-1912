scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
	
})
info.onScore(4, function () {
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(hrac, sprites.swamp.swampTile3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile3, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.builtin.forestTiles10)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(hrac, sprites.swamp.swampTile13)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath6, function (sprite, location) {
    game.over(true)
})
let hrac: Sprite = null
hrac = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 . 2 . . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hrac)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(hrac, sprites.castle.tilePath2)
scene.cameraFollowSprite(hrac)
