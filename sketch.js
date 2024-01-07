var splashscreen, backgroundImg
var gameState = "wait"
var playButton, aboutButton
var lavaobstacle1, lavaobstacle3, lavaobstacle2, lavaobstacleImage1, lavaobstacleImage2, lavaobstacleImage3
var seaObstacle1, seaObstacle2, seaObstacle2, seaObstacleImage1, seaObstacleImage2, seaObstacleImage3
var treasureObstacle1, treasureObstacle2, treasureObstacle3, treasureObstacleImage1, treasureObstacleImage2, treasureObstacleImage3
var coin, coinImage, seacollect, seacollectImage, lavaCollect, lavaCollectImage
var treasurebox, octopus, volcano, volcanobackground, treasurebg, treasurebackground, treasureboxImage
var groundVolcano, groundoctopus, groundtreasure, ground
var score = 0
var player, playerImg


function preload() {
    splashscreen = loadImage("The.gif")
    backgroundImg = loadImage("bg3-transformed.png")
    // stoneMonster = loadImage("assets/Stone-Monster.png")
    // axeMonster = loadImage("assets/Axe-Monster.png")
    // oldRockBoss = loadImage("assets/Old-Rock-Boss.png")
    volcanoImage=loadImage("fire.png")
    selectbg = loadImage("bg2-transformed.png")
    treasureboxImage = loadImage("treasure.png")
    octopusImage = loadImage("mummy.png")

    volcanobackground = loadImage("fire.png")
    octopusbackground = loadImage("egyptianbg.png")
    treasurebackground = loadImage("horizontaldungeon.png")
    playerImg = loadImage("character2.png")




}

function setup() {
    createCanvas(windowWidth, windowHeight)

    playButton = createImg("play-removebg-preview.png")
    playButton.position(width / 2.8, height - height / 2.5)
    playButton.size(150, 70)

    aboutButton = createImg("settings-removebg-preview.png")
    aboutButton.position(width / 1.75, height - height / 2.5)
    aboutButton.size(150, 70)

    volcano = createImg("mummy.png")
     volcano.position(width / 1.8, height/4)
    volcano.size(300, 300)
    volcano.hide()

    treasurebox = createImg("treasure.png")
    treasurebox.position(width / 6, height - height / 2.15)
    treasurebox.size(250, 250)
    treasurebox.hide()


    octopus = createImg("fire.png")
    octopus.position(width - width / 2.15, height - height / 1.65)
    octopus.size(250, 250)
    octopus.hide()


    // ground=createSprite(width/4,height/3,width,height)
    // ground.addImage("volcano",volcanobackground)
    // ground.addImage("octopus",octopusbackground)
    // ground.addImage("treasure",treasurebackground)
    // ground.visible=false


    player = createSprite(width / 4, height / 3)
    player.addImage(playerImg)
    player.scale = 0.35
    player.visible = false
    camera.x = player.x
    camera.y = player.y

    imageMode("CENTER")

}

function draw() {
    if (gameState == "wait") {
        background(splashscreen)
        playButton.show()
        aboutButton.show()
        treasurebox.hide()
        volcano.hide()
        octopus.hide()
        player.visible = false
        // ground.visible=false



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
        gameState = "volcano_state"
        octopus.hide()
        player.visible = true


    })


    treasurebox.mousePressed(() => {

        playButton.hide()
        aboutButton.hide()
        volcano.hide()
        treasurebox.hide()
        // volcano.hide()
        gameState = "treasure_state"
        octopus.hide()
        player.visible = true


    })

    octopus.mousePressed(() => {

        playButton.hide()
        aboutButton.hide()
        volcano.hide()
        treasurebox.hide()
        // volcano.hide()
        gameState = "octopus_state"
        octopus.hide()
        player.visible = true


    })



    drawSprites()

    if (gameState == "volcano_state") {

      
        image(volcanobackground, -1000, -500, 5 * width, height * 2)
        player.visible = true


        // ground.velocityX=-2
        textSize(80)
        fill("red")
        stroke("yellow")
        strokeWeight(3)
        text("SCORE: " + score, -50, -50)
  
    }

    if (gameState == "treasure_state") {

        background(treasurebackground)
        textSize(40)
        fill("red")
        stroke("yellow")
        text("SCORE: " + score, 100, 50)

    }

    if (gameState == "octopus_state") {

        background(octopusbackground)
        textSize(40)
        fill("cyan")
        stroke("purple")
        strokeWeight(3)
        text("SCORE: " + score, 100, 50)
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
        imageUrl: "bg2-transformed.png",
        imageSize: "200x200",
        confirmButtonText: "LET THE QUEST BEGIN!!",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "wait"
        }
    )


}