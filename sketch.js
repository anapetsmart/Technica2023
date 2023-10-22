let lanternX = -window.innerWidth/2;
let lanternY = -window.innerHeight;

let movingDown = false;
let movingRight = false;
let movingLeft = false;

let direction = [onClickUp, onClickLeft, onClickRight];

var track = 0;
var bottom = document.getElementById('bottom'); 

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
}

function preload() {
  lantern = loadImage('background.JPG');

  //new addition
  bearBack = loadImage('bear back.png');
  bearLeft = loadImage('bear left.png');
  bearRight = loadImage('bear right.png');
  bearFront = loadImage('bear front.png');
}

function draw() {
  image(lantern, lanternX, lanternY, 2*window.innerWidth, 2*window.innerHeight);
  
  if (movingDown == true) {
    image(bearBack, canvas.width/3, canvas.height/2 + 100, 200, 200);
  } else if(movingLeft == true) {
    image(bearLeft, canvas.width/3, canvas.height/2 + 100, 200, 200);
  } else if (movingRight == true) {
    image(bearRight, canvas.width/3, canvas.height/2 + 100, 200, 200);
  } else {
    image(bearFront, canvas.width/3, canvas.height/2 + 100, 200, 200);
  }
  
  if (movingDown == true) {
    lanternY = lanternY + 1;
    if (lanternY % 350 == 0) {
      movingDown = false;
    }
  }
  
  if (movingRight == true) {
    lanternX = lanternX - 1;
    if (lanternX % 350 == 0) {
      movingRight = false;
    }
  }
  
  if (movingLeft == true) {
    lanternX = lanternX + 1;
    if (lanternX % 350 == 0) {
      movingLeft = false;
    }
  }
}
function show_bottom(){
  // while (movingDown != true || movingLeft != true || movingRight != true || movingLeft != true){
    bottom.style.display = 'block'
    console.log('test')
  // }
}
function initial_question(){
    var hide = document.getElementById("initial");
    console.log(hide)
    hide.style.display = "none";
    movingDown = true;
    setTimeout(function(){
      bottom.style.display = 'block'
   }, 1000)
}
function myFunction(){
    var x = document.getElementById("myDIV")
    x.classList.toggle("hidden")
}

window.onload = function () {
    bottom.style.display= 'none';
    myFunction()
    draw()
}

function player_choice(){
    // let index = Math.random() * 3;
    if (document.getElementById('humid') != null){
    if (humid.innerHTML === "I just want to avoid the humidity"){
        document.getElementById('text1').textContent = "Do you like warm or cold temperatures"
        document.getElementById("humid").textContent = "Cold";
        document.getElementById('humid').id = 'Cold';
        movingLeft = true;
        bottom.style.display = 'none'
        setTimeout(function(){
          bottom.style.display = 'block'
       }, 2000)
            document.getElementById("Cold").addEventListener('click', function(){
                myFunction()
                document.getElementById('change').textContent = "You have obtained a Madagascar periwinkle! Madagascar periwinkle is a pink flowering plant native and endemic to Madagascar. It is typically found in the dunes, grassland, scrub and chaparral habitat. These plants are toxic and the symptoms include fever, nausea, vomiting, nerve damage, etc. However, small ingestions are unlikely to result in symptoms. In fact, these plants are beneficial in making medicine to treat health conditions like cancer, diabetes, sore throat, etc. ";
                bottom.style.display = "none";
          })
        document.getElementById('shade').textContent = "Warm"
        document.getElementById('shade').id = 'Warm'
        document.getElementById("Warm").addEventListener('click', function(){
                myFunction()
                document.getElementById('change').textContent = "You have obtained a Belladonna Lilly! Belladonna Lily is a pink summer wildflower that is native to South Africa. These have a low poisonous severity level but they still cause poison symptoms like vomiting, diarrhea, abdominal pain, etc. Belladonna lily is used as an aid to treat arthritis pain, hemorrhoids, Parkinson's disease, motion sickness, etc. Fun fact: The Belladonna Lily is most commonly known as The Jersey Lily because it was named after a famous painting of a famous English actress, Lily Langtry, holding the flower.";
                bottom.style.display = "none";   
            })
        document.getElementById('pretty').style.display = "none"
        
    }
}
}

function player_choice2(){
    if (document.getElementById('humid') != null){
        if (humid.innerHTML === "I just want to avoid the humidity"){
            document.getElementById('text1').textContent = "Would you like to take some back with you?"
            document.getElementById("humid").textContent = "yes";
            document.getElementById('humid').id = 'yea'
            movingLeft= true;
            bottom.style.display = 'none'
            setTimeout(function(){
              bottom.style.display = 'block'
           }, 2000)
                document.getElementById("yea").addEventListener('click', function(){
                    myFunction()
                    document.getElementById('change').textContent = "You have obtained Oleander!. Oleander is a shrub or small tree that can be served as an ornamental and landscaping plant. However, it is toxic to humans and pets with even a small amount of it can lead to death. The symptoms include serious heart rhythm disorders, dizziness, visual disturbances, etc. Oleander is native to North Africa and the eastern Mediterranean.";
                    bottom.style.display = "none";
                })
            document.getElementById('shade').textContent = "no"
            document.getElementById('shade').id = 'nope'
            document.getElementById("nope").addEventListener('click', function(){
                    
                    myFunction()
                    document.getElementById('change').textContent = "You have obtained Trillium! Trillium is found in wet areas at low to mid-elevations but prefers semi-shade. It is becoming more rare due to environmental changes like the increase of transportation and use of natural resources. This herbal plant can be used to aid childbirth, as astringents, coagulants, as a treatment for menstrual period pains, etc. ";
                    bottom.style.display = "none";
                    
                })
            document.getElementById('pretty').style.display = "none"
            
        }
    }
}
function player_choice3(){
    if (document.getElementById('shade') != null){
    if (shade.innerHTML === "Anywhere in the shade!"){
        document.getElementById('text1').textContent = "What's your favorite color"
        document.getElementById("humid").textContent = "white";
        document.getElementById('humid').id = 'white'
        movingDown= true;
        bottom.style.display = 'none'
        setTimeout(function(){
          bottom.style.display = 'block'
       }, 6000)
            document.getElementById('white').addEventListener("click", function(){
      //         movingLeft= true;
      //   bottom.style.display = 'none'
      //   setTimeout(function(){
      //     bottom.style.display = 'block'
      //  }, 4000)
                document.getElementById('text1').textContent = "Oh! I noticed you're not feeling that well. Would you like some tea?"
                document.getElementById("white").textContent = "Oh, it's just a cough";
                document.getElementById('white').id = 'cough'
                document.getElementById("cough").addEventListener('click', function(){
                myFunction()
                document.getElementById('change').textContent = "You have obtained Bloodrot! Bloodroot is a fragile spring flower that grows in rich woodlands of North America with clear, white, petaled blossoms. These are poisonous to humans if ingested in large doses. The underground stem called rhizome is used to make medicine to treat cancer, inflammation, cough, infections, etc.";
                bottom.style.display = "none";
            })
                document.getElementById("purple").textContent = "Thanks! Yes my knees have been acting up!";
                document.getElementById('purple').id = 'knees'
                document.getElementById("knees").addEventListener('click', function(){
                    myFunction()
                    document.getElementById('change').textContent = "You have obtained Azalea! Azalea are flowering shrubs that bloom in the spring but prefer shady areas like under trees. Even though this plant is poisonous, they are ornamental and can be planted in the backyard. The root can also be used to treat arthritis, traumatic injuries, etc. This plant is native to several continents including North America, particularly Southern North America, Asia, and Europe.";
                    bottom.style.display = "none";
                    
                })
            })
            // if document.getElementById('white') = "Oh! I noticed you're not feeling that well. Would you like some tea"
        document.getElementById('shade').textContent = "purple"
        document.getElementById('shade').id = 'purple'
        // movingDown = true;
        // bottom.style.display = 'none'
        // setTimeout(function(){
        //   bottom.style.display = 'block'
      //  }, 4000)
            document.getElementById('purple').addEventListener("click", function(){
              //   movingLeft = true
              //   bottom.style.display = 'none'
              //   setTimeout(function(){
              //     bottom.style.display = 'block'
              //  }, 4000)
                document.getElementById('text1').textContent = "Are you hungry? We have some berries right here"
                document.getElementById("white").textContent = "yes";
                document.getElementById('white').id = 'yes1'
                document.getElementById("yes1").addEventListener('click', function(){    
                myFunction()
                document.getElementById('change').textContent = "You have died :(. We'll mourn you. Remember this next time not to take berries from strangers in the woods. Obtaining deadly nightshade is not a positive ending to this journey. These plants grow sweet-tasting purple-black berries that pose the greatest danger to children as symptoms of poisoning include rapid heart beat, dilated pupils, hallucinations and death due to respiratory failure.";
                bottom.style.display = "none";
            })
                document.getElementById("purple").textContent = "no";
                document.getElementById('purple').id = 'no1'
                movingLeft= true;
                bottom.style.display = 'none'
                setTimeout(function(){
                  bottom.style.display = 'block'
               }, 2000)
                document.getElementById("no1").addEventListener('click', function(){
                    bottom.style.display = 'none'
                    myFunction()
                    document.getElementById('change').textContent = "You have obtained Nightshdade! Belladonna is an extremely poisonous plant found in Western Europe to the Himalayas as well as the United States. These plants grow sweet-tasting purple-black berries that pose the greatest danger to children as symptoms of poisoning include rapid heart beat, dilated pupils, severe dermatitis, hallucinations and death due to respiratory failure. There are also medicinal benefits with the most common use in pupil dilation solution. Other medicinal uses include the assistance of creating lotions, plasters and salves.                    ";
                    bottom.style.display = "none";
            })
        })
        document.getElementById('pretty').style.display = "none"
    }
}
}

function onClickUp() {
  if (button.name == "up") {
    if(movingDown == true) {
      movingDown = false
    } else {
      movingDown = true;
    }
  }
}

function onClickRight() {
  if (button2.name == "right") {
    if(movingRight == false) {
      movingRight = true;
    } else {
      movingRight = false;
    }
  }
}

function onClickLeft() {
  if (button3.name == "left") {
    if(movingLeft == false) {
      movingLeft = true;
    } else {
      movingLeft = false;
    }
  }
}
