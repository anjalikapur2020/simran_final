var splashscreen, backgroundImg
var gameState = "wait"
var playButton, aboutButton
var lavaobstacle1, lavaobstacle3, lavaobstacle2, lavaobstacleImage1, lavaobstacleImage2, lavaobstacleImage3
var seaObstacle1, seaObstacle2, seaObstacle2, seaObstacleImage1, seaObstacleImage2, seaObstacleImage3
var treasureObstacle1, treasureObstacle2, treasureObstacle3, treasureObstacleImage1, treasureObstacleImage2, treasureObstacleImage3
var coin, coinImage, seacollect, seacollectImage, lavaCollect, lavaCollectImage
var treasurebox, octopus, volcano, volcanobackground, treasurebg, treasurebackground, treasureboxImage
var groundVolcano, groundoctopus, groundtreasure, ground, nextButton
// var score = 0
var player, playerImg, invisibleGround
var platform1, platform2, platform3, platform4
var platform1img_volcano, platform2img_volcano, platform3img_volcano, platform4img_volcano
var platform1img_water, platform2img_water, platform3img_water, platform4img_water
var platform1img_treasure, platform2img_treasure, platform3img_treasure, platform4img_treasure
var keys, keys1, keys2, keys4
var c1img, c2img, c3img, c4img, c5img, c6img, c7img, c8img,c9img,c10img,c11img,c12img

var backgroundMusic, winsound, waterbgsound, volcanosound, treasuresound

var coinvolcano, coinwater, cointreasure
var volcanoScore = 0, treasureScore = 0, waterScore = 0

function preload() {
    splashscreen = loadImage("The.gif")
    // backgroundImg = loadImage("background.png")
    // stoneMonster = loadImage("Stone-Monster.png")
    // axeMonster = loadImage("Axe-Monster.png")
    // oldRockBoss = loadImage("Old-Rock-Boss.png")
    volcanoImage=loadImage("fire.png")
    selectbg = loadImage("bg2-transformed.png")
    treasureboxImage = loadImage("treasure.png")
    octopusImage = loadImage("mummy.png")

    volcanobackground = loadImage("bg4.PNG")
    octopusbackground = loadImage("egyptianbg.png")
    treasurebackground = loadImage("horizontaldungeon.png")
    playerImg = loadImage("character2.png")
    playerImgleft = loadImage("character2left.png")




    // platform images
    // volcano
    platform1img_volcano = loadImage("volcano_platform1.png")
    platform2img_volcano = loadImage("volcano_platform2.png")
    platform3img_volcano = loadImage("volcano_platform3.png")
    platform4img_volcano = loadImage("volcano_platform4.png")


    // water
    platform1img_water = loadImage("water_platform1.png")
    platform2img_water = loadImage("water_platform2.png")
    platform3img_water = loadImage("water_platform3.png")
    platform4img_water = loadImage("water_platform4.png")

    // treasure
    platform1img_treasure = loadImage("cave_platform1.png")
    platform2img_treasure = loadImage("cave_platform2.png")
    platform3img_treasure = loadImage("cave_platform3.png")
    platform4img_treasure = loadImage("cave_platform4.png")

    // keys
    keyvolcano = loadImage("key.gif")
    keytreasure = loadImage("goldenkey.gif")
    keywater = loadImage("silverkey.gif")

    // coins 
    c1img = loadImage("coins/c1.png")
    c2img = loadImage("coins/c2.png")
    c3img = loadImage("coins/c3.png")
    c4img = loadImage("coins/c4.png")
    c5img = loadImage("coins/c5.png")
    c6img = loadImage("coins/c6.png")
    c7img = loadImage("coins/c7.png")
    c8img = loadImage("coins/c8.png")
    c9img = loadImage("coins/c9.png")
    c10img = loadImage("coins/c10.png")
    c11img = loadImage("coins/c11.png")
    c12img = loadImage("coins/c12.png")


    // sounds
    backgroundMusic = loadSound("Bossa Antigua.mp3")
    winsound = loadSound("win.wav")
    waterbgsound = loadSound("waters.mp3")
    volcanosound = loadSound("fireSounds.wav")
    treasuresound = loadSound("dungeonsound.mp3")


}

function setup() {
    createCanvas(windowWidth, windowHeight)

    playButton = createImg("play-removebg-preview.png")
    playButton.position(width / 2.8, height - height / 2.5)
    playButton.size(150, 70)

    aboutButton = createImg("settings-removebg-preview.png")
    aboutButton.position(width / 1.75, height - height / 2.5)
    aboutButton.size(150, 70)

    // nextButton = createImg("right.gif")
    // nextButton.position(500,200)
    // nextButton.size(250,250)
    // nextButton.hide()

    volcano = createImg("fire.png")
    volcano.position(width/2.25, height/3.15)
    volcano.size(200, 200)
    volcano.hide()

    treasurebox = createImg("treasure_box.png")
    treasurebox.position(width / 5.2, height - height / 1.75)
    treasurebox.size(250, 250)
    treasurebox.hide()


    octopus = createImg("mummy.png")
    octopus.position(width - width / 2.15, 170)
    octopus.size(250, 250)
    octopus.hide()




    player = createSprite(-width / 5, height / 3)
    player.addImage("right",playerImg)
    player.addImage("left",playerImgleft)
    player.scale = 1.5
    player.visible = false
    camera.x = player.x
    camera.y = player.y
    console.log(window.height)
    invisibleGround = createSprite(width / 2, height * 1.64, width * 5, 2)
    invisibleGround.visible = false
    // invisibleGround.debug = true

    // player.debug = true
    player.setCollider("rectangle",0,0,player.width/2,player.height/1.5)

    //player.debug=true
    // player.setCollider("rectangle", 0, height / 6.5, player.width / 2, player.height - height / 1.5)



    // platforms for the game

    platform1 = createSprite(-1557, 400, 100, 20)
    platform2 = createSprite(-957, 600, 100, 20)
    platform3 = createSprite(-57, 400, 100, 20)
    platform4 = createSprite(357, 600, 100, 20)

    platform1.visible = false
    platform2.visible = false
    platform3.visible = false
    platform4.visible = false


    // coins volcano
    keys = createSprite(750, 700, 100, 100)
    keys.scale = 0.5

    c1 = createSprite(platform1.x, platform1.y - 100)
    c1.scale = 0.25

    c2 = createSprite(platform2.x, platform2.y - 100)
    c2.scale = 0.25

    c4 = createSprite(platform4.x, platform4.y - 100)
    c4.scale = 0.25

    c3 = createSprite(platform3.x, platform3.y - 100)
    c3.scale = 0.25




    //    coins water
    keys1 = createSprite(750, 700, 100, 100)
    keys1.scale = 0.5

    c5 = createSprite(platform1.x, platform1.y - 100)
    c5.scale = 0.25

    c6 = createSprite(platform2.x, platform2.y - 100)
    c6.scale = 0.25

    c7 = createSprite(platform4.x, platform4.y - 100)
    c7.scale = 0.25

    c8 = createSprite(platform3.x, platform3.y - 100)
    c8.scale = 0.25

    //    coins treasure
    keys2 = createSprite(750, 700, 100, 100)
    keys2.scale = 0.5

    c9 = createSprite(platform1.x, platform1.y - 100)
    c5.scale = 0.25

    c10 = createSprite(platform2.x, platform2.y - 100)
    c6.scale = 0.25

    c11 = createSprite(platform4.x, platform4.y - 100)
    c7.scale = 0.25

    c12 = createSprite(platform3.x, platform3.y - 100)
    c8.scale = 0.25

    keys.visible = false
    c1.visible = false
    c2.visible = false
    c3.visible = false
    c4.visible = false

    keys1.visible = false
    c5.visible = false
    c6.visible = false
    c7.visible = false
    c8.visible = false

    keys2.visible = false
    c9.visible = false
    c10.visible = false
    c11.visible = false
    c12.visible = false



    c1.scale=2
    c2.scale=2
    c3.scale=2
    c4.scale=2
    c5.scale=2
    c6.scale=2
    c7.scale=2
    c8.scale=2
    c9.scale=2
    c10.scale=2
    c11.scale=2
    c12.scale=2


}

function draw() {
    if (gameState == "wait") {
        background(splashscreen)
        treasuresound.stop()
        waterbgsound.stop()
        volcanosound.stop()

        if (!backgroundMusic.isPlaying()) {
            backgroundMusic.play()
            backgroundMusic.setVolume(1.5)
        }
        playButton.show()
        aboutButton.show()
        treasurebox.hide()
        volcano.hide()
        octopus.hide()
        player.visible = false
        // ground.visible=false
        platform1.visible = false
        platform2.visible = false
        platform3.visible = false
        platform4.visible = false
        // nextButton.hide()


    }

    playButton.mousePressed(() => {
        background(selectbg)
        gameState = "play"
        playButton.hide()
        aboutButton.hide()
    })
    aboutButton.mousePressed(() => {
        about()
        playButton.hide()
        aboutButton.hide()

    })

    volcano.mousePressed(() => {

        playButton.hide()
        aboutButton.hide()
        volcano.hide()
        treasurebox.hide()
        // volcano.hide()
        gameState = "about_volcano_state"
        octopus.hide()
        // player.visible = true
        backgroundMusic.stop()
        treasuresound.stop()
        waterbgsound.stop()

        if (!volcanosound.isPlaying()) {
            volcanosound.play()
            volcanosound.setVolume(1.5)
        }

    })


    treasurebox.mousePressed(() => {

        playButton.hide()
        aboutButton.hide()
        volcano.hide()
        treasurebox.hide()
        // volcano.hide()
        gameState = "about_treasure_state"
        octopus.hide()
        player.visible = true

        backgroundMusic.stop()
        volcanosound.stop()
        waterbgsound.stop()

        if (!treasuresound.isPlaying()) {
            treasuresound.play()
            treasuresound.setVolume(1.5)
        }


    })

    octopus.mousePressed(() => {

        playButton.hide()
        aboutButton.hide()
        volcano.hide()
        treasurebox.hide()
        // volcano.hide()
        gameState = "about_octopus_state"
        octopus.hide()
        player.visible = true


        backgroundMusic.stop()
        treasuresound.stop()
        volcanosound.stop()

        if (!waterbgsound.isPlaying()) {
            waterbgsound.play()
            waterbgsound.setVolume(1.5)
        }

    })

    // nextButton.mousePressed(() =>{
    //     gamestate="wait"
    // } )


    if (gameState == "about_volcano_state") {
        aboutVolcano()
    }


    if (gameState == "about_octopus_state") {
        aboutoctopus()
    }

    if (gameState == "about_treasure_state") {
        abouttreasure()
    }



    if (gameState == "volcano_state") {
        image(volcanobackground, -width * 6, -height * 1.5, width * 7, height * 3.5)
        player.visible = true
        player.collide(invisibleGround)
        playermovement()

        camera.x = player.x
        camera.y = player.y
        console.log(player.x + "  " + player.y)


        platform1.visible = true
        platform2.visible = true
        platform3.visible = true
        platform4.visible = true
        keys.visible = true
        c1.visible = true
        c2.visible = true
        c3.visible = true
        c4.visible = true


        platform1.addImage("volcanop1", platform1img_volcano)
        platform2.addImage("volcanop2", platform2img_volcano)
        platform3.addImage("volcanop3", platform3img_volcano)
        platform4.addImage("volcanop4", platform4img_volcano)
platform1.setCollider("rectangle",0,0,platform1.width,platform1.height/10)
platform2.setCollider("rectangle",0,0,platform2.width,1)
platform3.setCollider("rectangle",0,0,platform2.width,platform3.height/10)
platform4.setCollider("rectangle",0,0,platform2.width,platform4.height/10)

        keys.addImage("key1", keyvolcano)
        c1.addImage(c1img)
        c2.addImage(c2img)
        c3.addImage(c3img)
        c4.addImage(c4img)

        if (player.isTouching(platform1)) {
            player.collide(platform1)

        }

        if (player.isTouching(platform2)) {
            player.collide(platform2)

        }


        if (player.isTouching(platform3)) {
            player.collide(platform3)

        }


        if (player.isTouching(platform4)) {
            player.collide(platform4)

        }

        // coin touching
        if (player.isTouching(c1)) {
            c1.destroy()
            volcanoScore += 5
            console.log("c1")

        }
        if (player.isTouching(c2)) {
            c2.destroy()
            volcanoScore += 5
            console.log("c2")


        }
        if (player.isTouching(c3)) {
            c3.destroy()
            volcanoScore += 5
            console.log("c3")


        }
        if (player.isTouching(c4)) {
            c4.destroy()
            volcanoScore += 5
            console.log("c4")


        }

        if (volcanoScore >= 20 && player.isTouching(keys)) {
            // nextButton.show()
            keys.destroy()
            win()
        }


    }

    if (gameState == "octopus_state") {
        image(octopusbackground, -width * 6, -height * 1.5, width * 7, height * 3.5)
        player.visible = true
        player.collide(invisibleGround)
        playermovement()

        camera.x = player.x
        camera.y = player.y



        platform1.visible = true
        platform2.visible = true
        platform3.visible = true
        platform4.visible = true
        keys.visible = true
        c5.visible = true
        c6.visible = true
        c7.visible = true
        c8.visible = true


        platform1.addImage("waterp1", platform1img_water)
        platform2.addImage("waterp2", platform2img_water)
        platform3.addImage("waterp3", platform3img_water)
        platform4.addImage("waterp4", platform4img_water)
        keys.addImage("key2", keywater)
        c5.addImage(c9img)
        c6.addImage(c10img)
        c7.addImage(c11img)
        c8.addImage(c12img)


        if (player.isTouching(platform1)) {
            player.collide(platform1)

        }

        if (player.isTouching(platform2)) {
            player.collide(platform2)

        }


        if (player.isTouching(platform3)) {
            player.collide(platform3)

        }


        if (player.isTouching(platform4)) {
            player.collide(platform4)

        }



        // coin touching
        if (player.isTouching(c5)) {
            c5.destroy()
            waterScore += 5
            console.log("c1")

        }
        if (player.isTouching(c6)) {
            c6.destroy()
            waterScore += 5
            console.log("c2")


        }
        if (player.isTouching(c7)) {
            c7.destroy()
            waterScore += 5
            console.log("c3")


        }
        if (player.isTouching(c8)) {
            c8.destroy()
            waterScore += 5
            console.log("c4")


        }

        if (waterScore >= 20 && player.isTouching(keys1)) {
            // nextButton.show()
            keys1.destroy()
            win()
        }



    }

    if (gameState == "treasure_state") {
        image(treasurebackground, -width * 6, -height * 1.5, width * 7, height * 3.5)
        player.visible = true
        player.collide(invisibleGround)
        playermovement()
        player.velocityY += 0.8

        camera.x = player.x
        camera.y = player.y




        platform1.visible = true
        platform2.visible = true
        platform3.visible = true
        platform4.visible = true
        keys.visible = true
        c9.visible = true
        c10.visible = true
        c11.visible = true
        c12.visible = true
        c9.scale = 1
        c10.scale = 1
        c11.scale = 1
        c12.scale = 1




        platform1.addImage("treasurep1", platform1img_treasure)
        platform2.addImage("treasurep2", platform2img_treasure)
        platform3.addImage("treasurep3", platform3img_treasure)
        platform4.addImage("treasurep4", platform4img_treasure)
        keys.addImage("key3", keytreasure)
        c9.addImage(c5img)
        c10.addImage(c6img)
        c11.addImage(c7img)
        c12.addImage(c8img)

        if (player.isTouching(platform1)) {
            player.collide(platform1)

        }

        if (player.isTouching(platform2)) {
            player.collide(platform2)

        }


        if (player.isTouching(platform3)) {
            player.collide(platform3)

        }


        if (player.isTouching(platform4)) {
            player.collide(platform4)

        }


        // coin touching
        if (player.isTouching(c9)) {
            c9.destroy()
            treasureScore += 5
            console.log("c1")

        }
        if (player.isTouching(c10)) {
            c10.destroy()
            treasureScore += 5
            console.log("c2")


        }
        if (player.isTouching(c11)) {
            c11.destroy()
            treasureScore += 5
            console.log("c3")


        }
        if (player.isTouching(c12)) {
            c12.destroy()
            treasureScore += 5
            console.log("c4")


        }

        if (treasureScore >= 20 && player.isTouching(keys)) {
            // nextButton.show()
            keys2.destroy()
            win()
        }




    }


    drawSprites()

    if (gameState == "volcano_state") {



        // ground.velocityX=-2
        textSize(40)
        fill("red")
        stroke("yellow")
        strokeWeight(3)
        text("SCORE: " + volcanoScore, player.x - 750, player.y - 200)

    }

    if (gameState == "treasure_state") {

        textSize(40)
        fill("red")
        stroke("yellow")
        strokeWeight(3)
        text("SCORE: " + treasureScore, player.x - 750, player.y - 200)

    }

    if (gameState == "octopus_state") {

        textSize(40)
        fill("red")
        stroke("yellow")
        strokeWeight(3)
        text("SCORE: " + waterScore, player.x - 750, player.y - 200)
    }

    if (gameState == "play") {
        volcano.show()
        treasurebox.show()
        octopus.show()

    }

}


function about() {
    swal({
        title: "HOW TO PLAY THE GAME !!!",
        text: "Go to a landmark by clicking on it. \n Each landmark has a different quest.",
        textAlign: "center",
        imageUrl: "splash.gif",
        imageSize: "200x200",
        confirmButtonText: "LET THE QUEST BEGIN!!",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "wait"
        }
    )


}


function playermovement() {

    if (keyDown("RIGHT_ARROW")) {
        player.x += 5
        player.changeImage("right",playerImg)
    }

    if (keyDown("LEFT_ARROW")) {
        player.x -= 5
     
        player.changeImage("left",playerImgleft)
    }


    if (keyDown("space") & player.y >= 400) {
        player.velocityY -= 2
    }
    player.velocityY += 0.8


}


function aboutVolcano() {
    swal({
        title: "The time is Running OUT!!",
        text: "Collect various safety items  to clear the game. \n Don't forget to keep yourself SAFE...",
        textAlign: "center",
        imageUrl: "fire.png",
        imageSize: "200x200",
        confirmButtonText: "HURRY",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "volcano_state"
        }
    )


}

function aboutoctopus() {
    swal({
        title: "The time is Running OUT!!",
        text: "Collect various safety items to clear the game.\n Don't forget to keep yourself SAFE...",
        textAlign: "center",
        imageUrl: "mummy.png",
        imageSize: "200x200",
        confirmButtonText: "HURRY",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "octopus_state"
        }
    )


}

function abouttreasure() {
    swal({
        title: "The time is Running OUT!!",
        text: "Collect the KEYS to Unlock Treasure.\n Don't forget to keep yourself SAFE...",
        textAlign: "center",
        imageUrl: "treasure_box.png",
        imageSize: "200x200",
        confirmButtonText: "HURRY",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "treasure_state"
        }
    )


}


function win() {
    winsound.play()
    swal({
        title: "WON!!",
        text: "You have Won it...\n You can try more options \n",
        textAlign: "center",
        imageUrl: "treasure_box.png",
        imageSize: "200x200",
        confirmButtonText: "Try Again",
        confirmButtonColor: "green"
    },
        function (isConfirm) {
            if (isConfirm) {
                gameState = "wait"
                location.reload();

            }
        }
    )

}