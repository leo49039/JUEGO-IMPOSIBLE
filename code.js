var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c55e051d-03fc-4030-a640-a45368c2ac7f","9509cef2-f114-4791-a522-6394ddf1acff","8551b53f-c818-4db1-9fb4-47bb0271fea0","f77089f7-dae1-44bb-a0cd-79d71b75d31d","1c451cf9-f99c-4fda-824f-8c09364edc96","e7e96f44-1a07-44eb-a6c7-0a2c807e5e71","2faee822-9c28-40d1-96b6-e457fbce8478","b41d1087-7080-40fd-86b1-3af5802a5211"],"propsByKey":{"c55e051d-03fc-4030-a640-a45368c2ac7f":{"name":"pupilportrait_10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/bj5kzu_ux3FP2R.7jZ0Oi1FnHKlS7ePT/category_faces/pupilportrait_10.png","frameSize":{"x":282,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"bj5kzu_ux3FP2R.7jZ0Oi1FnHKlS7ePT","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bj5kzu_ux3FP2R.7jZ0Oi1FnHKlS7ePT/category_faces/pupilportrait_10.png"},"9509cef2-f114-4791-a522-6394ddf1acff":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"8551b53f-c818-4db1-9fb4-47bb0271fea0":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"f77089f7-dae1-44bb-a0cd-79d71b75d31d":{"name":"car_yellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"1c451cf9-f99c-4fda-824f-8c09364edc96":{"name":"car_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"e7e96f44-1a07-44eb-a6c7-0a2c807e5e71":{"name":"fondo","sourceUrl":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png"},"2faee822-9c28-40d1-96b6-e457fbce8478":{"name":"fondo1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"bKUNMPzYGyVQNqL1jZqv2JVcXbRRsdu9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/2faee822-9c28-40d1-96b6-e457fbce8478.png"},"b41d1087-7080-40fd-86b1-3af5802a5211":{"name":"fondo2","sourceUrl":"assets/api/v1/animation-library/gamelab/6S2kOlSjsXOtkjHIl15J14JY8CQIV6lX/category_backgrounds/texture_14.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"6S2kOlSjsXOtkjHIl15J14JY8CQIV6lX","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6S2kOlSjsXOtkjHIl15J14JY8CQIV6lX/category_backgrounds/texture_14.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----



//bordes superior e inferior
var borde1 = createSprite(190,100,420,6);
borde1.shapeColor="red"
var borde2 = createSprite(190,300,420,6);
borde2.shapeColor="red"
//personaje y obstaculos
var inicio = createSprite(30,200,700,195);
inicio.shapeColor="gray"
var tienda = createSprite(365,200,70,195)
tienda.shapeColor="gold"
var camino1 = createSprite(100,200,50,6)
camino1.shapeColor="white"
var camino2 = createSprite(200,200,50,6)
camino2.shapeColor="white"
var camino3 = createSprite(300,200,50,6)
camino3.shapeColor="white"
var sam = createSprite(20,190,13,13)
sam.setAnimation("pupilportrait_10_1")
sam.scale=0.1
var auto1 = createSprite(100,130,10,10);
auto1.velocityY=5
auto1.setAnimation("car_black_1")
auto1.scale=0.3
var auto2 = createSprite(230,130,10,10);
auto2.velocityY=-5
auto2.setAnimation("car_blue_1")
auto2.scale=0.3
var auto3 = createSprite(165,250,10,10);
auto3.velocityY=5
auto3.setAnimation("car_yellow_1")
auto3.scale=0.3
var auto4 = createSprite(300,250,10,10);
auto4.velocityY=-5
auto4.setAnimation("car_red_1")
auto4.scale=0.3

var vidas=5













function draw() {
background("pink")
textSize(20)
stroke("black")
fill(0)
text("vidas="+vidas,300,50)

if (keyDown(RIGHT_ARROW)) {
sam.x=sam.x +4  
}

if (keyDown(LEFT_ARROW)) {
sam.x=sam.x -4  
}

if (sam.isTouching(auto1) || sam.isTouching(auto2) || sam.isTouching(auto3) || sam.isTouching(auto4)) {
  
sam.x=20
sam.y=190 
  

    
  
  
vidas=vidas-1  
}

if (sam.isTouching(tienda)) {
stroke("black")        
fill(0)     
textSize(24)
text("Ganaste!!",150,90)  
auto1.velocityY=0  
auto2.velocityY=0  
auto3.velocityY=0  
auto4.velocityY=0  
sam.x=350
sam.y=200
}

if (vidas==0) {
 stroke("black")        
fill(0)     
textSize(24)
text("perdiste",155,90) 
auto1.velocityY=0  
auto2.velocityY=0  
auto3.velocityY=0  
auto4.velocityY=0
 sam.x=20
sam.y=190 
  
  
  
}







createEdgeSprites()
auto1.bounceOff(edges)
auto2.bounceOff(edges)
auto3.bounceOff(edges)
auto4.bounceOff(edges)
auto1.bounceOff(borde1)
auto2.bounceOff(borde1)
auto3.bounceOff(borde1)
auto4.bounceOff(borde1)
auto1.bounceOff(borde2)
auto2.bounceOff(borde2)
auto3.bounceOff(borde2)
auto4.bounceOff(borde2)
sam.bounceOff(edges)











drawSprites()  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
