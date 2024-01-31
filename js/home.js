let profilePic;
let interests_imgs_paths = [
  'media/portfolio/research_interests/ml.png', 
  'media/portfolio/research_interests/robo.png', 
  'media/portfolio/research_interests/nature_algo.png', 
  'media/portfolio/research_interests/opt_prob.png', 
  'media/portfolio/research_interests/finance.png', 
  'media/portfolio/research_interests/data_sci.png'
];

let interest_description = [
    "In the realm of machine learning, notable projects include the implementation of Yolov7 on FPGA for elderly fall detection, advancing healthcare technology. Innovations in robotics feature the development of a multi-fidelity optimization model, vision-based control for soft robotic hands, and the use of Shape Memory Alloys in assistive robotics. Additional work encompasses enhancing robotic arm functionality through kinematics and applying the Beetle Antennae Search algorithm for diverse applications like robotic path-planning and stock market forecasting.",
    "In the field of robotics, key projects include the development of a vision-based autonomous control system for soft robotic hands, enhancing their functionality and precision. Another significant contribution is the design of a human assistive soft arm using Shape Memory Alloys, focusing on intuitive and safe human-robot interactions. Additionally, the creation of a Stewart platform powered by soft robotic muscles showcases innovative approaches to robotic movement and stability. Further, the implementation of forward and inverse kinematic models for robotic arms like Dobot marks advancements in robotic precision and operational capabilities.",
    "In the field of robotics, key projects include the development of a vision-based autonomous control system for soft robotic hands, enhancing their functionality and precision. Another significant contribution is the design of a human assistive soft arm using Shape Memory Alloys, focusing on intuitive and safe human-robot interactions. Additionally, the creation of a Stewart platform powered by soft robotic muscles showcases innovative approaches to robotic movement and stability. Further, the implementation of forward and inverse kinematic models for robotic arms like Dobot marks advancements in robotic precision and operational capabilities.",
    "In tackling optimization problems, key projects have focused on developing and applying advanced algorithms for diverse applications. This includes the creation of a multi-fidelity optimization model, which significantly enhances the efficiency and effectiveness of solving complex problems in robotics. Additionally, the innovative use of the Beetle Antennae Search (BAS) algorithm in stock market forecasting showcases its ability to navigate the intricate landscape of financial data, optimizing investment strategies. These projects demonstrate a deep engagement with optimization challenges, leveraging algorithmic solutions to achieve precise and optimal outcomes in varied fields.",
    "In addressing finance-related challenges, key projects have centered on applying sophisticated machine learning algorithms to optimize financial strategies and detect anomalies. One notable project involved using the Beetle Antennae Search (BAS) algorithm for non-convex tax-aware portfolio optimization, showcasing an innovative approach to maximizing investment returns while minimizing tax liabilities. Another significant project focused on fraud detection in publicly traded U.S. firms, employing machine learning techniques to identify irregularities and potential fraudulent activities. These initiatives highlight the application of advanced algorithms in navigating and solving complex problems in the finance sector, enhancing accuracy and efficiency in financial decision-making and security.",
    "In the realm of data science, several projects have demonstrated innovative applications of machine learning and analytics. One such project involved the development of a comprehensive system for elderly fall detection, integrating computer vision and deep learning to analyze and interpret complex data sets for real-time monitoring. Another project focused on the strategic use of machine learning for sentiment analysis, extracting and interpreting vast amounts of unstructured data from social media and other digital platforms to gauge public opinion and trends. Additionally, efforts in predictive analytics have been made, utilizing advanced algorithms to forecast stock market trends, providing valuable insights for investment strategies. These projects underscore the power of data science in extracting meaningful insights from large and diverse data sets, driving informed decision-making across various domains.",
]

let timeline_events_paths = [
    "media/portfolio/timeline/school.png",
    "media/portfolio/timeline/college.png",
    "media/portfolio/timeline/uni_bs.png",
    "media/portfolio/timeline/ra.png",
    "media/portfolio/timeline/wedding.png",
    "media/portfolio/timeline/phd.png",
    "media/portfolio/timeline/hk_postdoc.png",
    "media/portfolio/timeline/dk_postdoc.png",

]


let timeline_description = [
    "Zoomed out of St. Joseph's English High School with a dazzling 90% in the brainy quartet of Physics, Chemistry, Mathematics, and Computer Science. Scored a full-ride scholarship to college, all thanks to hitting those academic high notes! 🌟📚🚀",
    "Blasted through Punjab College with an FSc in Pre-Engineering, not just acing it but nailing a whopping 90% score! Landed in the elite squad of top 10 hotshots in the City board exams. Talk about setting the academic stage on fire! 🚀📚🔥",
    "I rocked my Bachelor's in Electronics Engineering, diving deep into the electric universe of Electrical and Electronics, Integrated Circuits, FPGA, and Programming. Zapping through the challenges, I snagged a sizzling CGPA of 3.85 – a high-voltage testament to my tech enthusiasm and circuit-bending skills! 🌟💡🔌",
    "At The Hong Kong Polytechnic University, I was the go-to whiz for all things robotics and machine learning. Picture this: I was the puppet master behind a soft robotic hand, teaching it to pick and place like a pro with some cool vision-based tricks. Then, I jazzed up a soft robotic arm with Shape Memory Alloy – think of it as giving robots a human touch. Not stopping there, I played a key role in souping up a Stewart platform with soft robotic muscles, making it move like it's got a groove. And for my grand finale, I turned the Dobot robotic arm into a kinematic genius, mastering its every move. In short, my time at HKPolyU was like being in a high-tech, robot-choreographing dance-off! 🤖💃🌟",
    "Tied the knot with my forever favorite, Kanwal Ameer Khan, in a love story that's better than any blockbuster! It wasn't just 'I do'; it was the start of our own epic adventure. Together, we're not just a couple; we're a dynamic duo ready to rock the world, hand in hand, heart in heart. Here's to us – the unbeatable team in the game of life! 💑🌟💖🎉",
    "During my Ph.D. at The Hong Kong Polytechnic University, I embarked on an exhilarating adventure into the realm of smart spaces and articulated robots. My thesis? It was like directing a sci-fi epic: 'Metaheuristic-Based Control Framework for Articulated Robots in Smart Space.' Picture me in the lab, a conductor orchestrating a symphony of intelligent machines, each robot gracefully responding to the innovative algorithms I developed. This journey was more than just academic pursuit; it felt like I was the wizard in a futuristic world, bringing harmony between robots and the intelligent spaces they inhabit. 🌟🤖🚀",
    "In my role as a Postdoctoral Researcher at The Hong Kong Polytechnic University, I delved deep into the fascinating world of machine learning algorithms and their application in embedded systems. A significant part of my work involved implementing Yolov7 on FPGA, specifically for elderly fall detection. This project wasn't just about coding and algorithms; it was about creating a system that could potentially save lives by providing timely assistance to the elderly. The experience was incredibly rewarding, blending my passion for technology with real-world impact. 🌐🔍🤖",
    "Zipped over to the University of Copenhagen as a Postdoc, where I rocked the world of computer vision and deep learning. It was like being a tech DJ, spinning data into groundbreaking insights on straw yield estimation. In Copenhagen, I wasn't just researching; I was remixing the future of science! 🌍🔬🎧🚀"

]

let timeline_events = [];
let interests_imgs = []; // This will store the loaded images

const cardX = 100, cardY = 50, cardWidth = 600, cardHeight = 300, radius = 50;

const interestSpacing = 95;

let enlargedScale = 1.5; // Scale to enlarge images
let currentHoverIndex = -1; // Index of the interest currently being hovered


function preload() {
  profilePic = loadImage('media/portfolio/personal/me.PNG');

  // Load each interest image and store it in the interests_imgs array
  for (let i = 0; i < interests_imgs_paths.length; i++) {
    interests_imgs[i] = loadImage(interests_imgs_paths[i]);
  }

  // Load each interest image and store it in the interests_imgs array
  for (let i = 0; i < timeline_events_paths.length; i++) {
    timeline_events[i] = loadImage(timeline_events_paths[i]);
    }
}

function setup() {
    textFont('Rocher');
    canvasHeight = document.getElementById('home').offsetHeight - 10;
    let cnv = createCanvas(windowWidth, canvasHeight);
    cnv.parent('home'); // Assign the canvas to the container
    cnv.style('width', '100%');
    cnv.style('height', '100%');
}


function draw() {
    background("#e6e6e6");
    drawProfileCard();
  }
  
  function drawProfileCard() {
    // drawCardBackground(cardX, cardY, cardWidth, cardHeight);
    drawProfileImage(cardX, cardY + 50, radius);
    drawProfileName(cardX + 70, cardY);
    drawBiographyText(cardX, cardY + 150, 600, 100); // Placeholder for biography text drawing function
    drawResearchInterests(cardX, cardY + 425, cardWidth, cardHeight, radius);
    drawTimeline(cardX, cardY + 425, cardWidth, cardHeight, radius);
  }
  
  function drawCardBackground(x, y, width, height) {
    fill(255);
    rect(x, y, width, height, 10);
  }
  
  function drawProfileImage(x, y, radius) {

    // Set shadow parameters
    drawingContext.shadowOffsetX = 5; // Horizontal shadow offset
    drawingContext.shadowOffsetY = 5; // Vertical shadow offset
    drawingContext.shadowBlur = 10;   // Shadow blur amount
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.5)'; // Shadow color with alpha

    // Draw the ellipse as before (as a background for the image)
    fill('#f2ce7a'); // Golden-yellow color
    ellipse(x, y, radius * 3);


    // Reset shadow parameters so they don't affect other drawings
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 0;
  
    // Set the image mode to center so it draws from the center
    imageMode(CENTER);
  
    // Draw the image on the canvas at (x, y), scaled to fit the ellipse
    // Adjust the scale factors (third and fourth arguments) if needed
    image(profilePic, x, y, radius * 2.5, radius * 2.5);
  }
  
  function drawProfileName(x, y) {
    textStyle(BOLD);
    fill('#30333f'); // Black text
    textSize(24);
    textAlign(LEFT, CENTER);
    text("Ameer Tamoorkhan", x + 20, y);
    textFont("Arial");
    textSize(20);
    text("Ph.D. in Computing", x + 20, y + 30);
    textSize(16);
    text("October 18, 1994", x + 20, y + 50);
    textFont('Rocher');
  }


function drawBiographyText(x, y, w, h) {

    // Set shadow parameters
    drawingContext.shadowOffsetX = 5; // Horizontal shadow offset
    drawingContext.shadowOffsetY = 5; // Vertical shadow offset
    drawingContext.shadowBlur = 10;   // Shadow blur amount
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.5)'; // Shadow color with alpha

    fill('#f0f0f0');
    noStroke();
    rect(x - 75, y, w - 60, h + 80, 20)

    // Reset shadow parameters so they don't affect other drawings
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 0;

    fill('#30333f'); // Black text
    textSize(15); // Example text size, adjust as needed
    textFont("Arial");
    textStyle(NORMAL);
    // Example biography text, replace with the actual text
    let bioText = "Dr. Ameer Tamoor Khan is a maestro of machine learning, a virtuoso of algorithms who spun his Ph.D. from The Hong Kong Polytechnic University into a magical postdoc journey. With a wand of wisdom, he makes ML algorithms waltz to the rhythm of embedded systems and concocts spells of computer vision with a deep learning elixir. His quest has taken him through the labyrinths of robotics, the treasure troves of stock optimization, to the arcane arts of fraud detection. In the scholarly kingdom, he's the bard, enchanting with tales woven from data and innovation.";
    textAlign(CENTER, TOP);
    // Draw the text block with word wrap
    text(bioText, x - 70, y + 15, 525);
    textFont('Rocher');
}

function drawResearchInterests(cardX, cardY, cardWidth, cardHeight, radius) {
  const interests = ['Machine Learning', 'Robotics', 'Nature Inspired Algorithms', 'Optimization Problems', 'Finance Problems', 'Data Sciences'];
  const normalSize = 50; // Normal size for images
  const enlargedSize = normalSize * 1.5; // Enlarged size for images
  let hoverIndex = -1;
  textSize(25);
  text("-- Research Interests --", cardX + 75, cardY - 75);

  textSize(15);
  textAlign(CENTER, TOP);
  textFont("Arial");
  fill("#f6931d");
  textStyle(BOLD);

  for (let i = 0; i < interests.length; i++) {
    let x = cardX + (i % 6) * interestSpacing - 40;
    let y = cardY + floor(i / 6) * interestSpacing;

    // Determine if the mouse is over this interest
    if (mouseX > x - normalSize/2 && mouseX < x + normalSize/2 &&
        mouseY > y - normalSize/2 && mouseY < y + normalSize/2) {
      hoverIndex = i;
    }
    
    // Draw images normally or enlarged if hovered
    if (hoverIndex === i) {
      drawImageAndText(x, y, interests[i], i, enlargedSize, true);
    } else {
      drawImageAndText(x, y, interests[i], i, normalSize, false);
    }
  }
}

function drawImageAndText(x, y, label, i, size, isHovered) {
    let img = interests_imgs[i];
    let ar = img.width / img.height;
    let imgW = size * ar;
    let imgH = size;
  
    // Draw the image
    imageMode(CENTER);
    image(img, x, y, imgW, imgH);
  
    // Split the label into words for multiline text
    let words = label.split(" ");
    let lineHeight = 20; // Set the line height for multiline text
  
    // Draw the text normally
    fill("#f6931d");
    textSize(15); // Normal text size
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    stroke(255);
    strokeWeight(2);
    // Draw each word on a separate line
    for (let j = 0; j < words.length; j++) {
    text(words[j], x, y + imgH / 2 + 5 + (lineHeight * j));
    }
    textStyle(NORMAL)

    if (isHovered) {
        let y_offset = 225;
        textSize(14); // Size of the text
        textAlign(CENTER, TOP); // Alignment of the text
        let rectWidth = 450; // Fixed width for the rectangle
        let padding = 20; // Padding around the text
        
        // Calculate the height of the text block
        let txtHeight = calculateTextHeight(interest_description[i], rectWidth - padding) + padding * 2;
        
        // Adjust the x position if the rectangle goes off the bounds of the canvas
        let rectX = x - rectWidth / 2;
        if (rectX < 0) {
          rectX = 0;
        } else if (rectX + rectWidth > width) {
          rectX = width - rectWidth;
        }
        
        // Adjust the y position if the rectangle goes off the bounds of the canvas
        let rectY = canvasHeight - y_offset - txtHeight;
        if (rectY < 0) {
          rectY = 0;
        } else if (rectY + txtHeight > canvasHeight) {
          rectY = canvasHeight - txtHeight;
        }
      
        // Draw the shadowed rectangle
        fill("#30333f");
        noStroke(); // No border for the rectangle
        rectMode(CORNER); // Draw the rect from the corner
        rect(rectX, rectY, rectWidth, txtHeight - 20, 20); // Rounded corners with a radius of 5
        
        // Reset shadow parameters so they don't affect other drawings
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowBlur = 0;
      
        // Draw the text within the rectangle bounds
        fill('#e6e6e6'); // Black fill for the text
        textStyle(NORMAL); // Normal text style
        textAlign(CENTER, TOP); // Align text to the top left
        text(interest_description[i], rectX + padding / 2, rectY + padding / 2, rectWidth - padding);
      }  
}


function drawTimeline(cardX, cardY, cardWidth, cardHeight, radius) { 

    years = ['2011', '2013', '2017', '2017', '2022', '2022', '2023', '2023*']

    const normalSize = 50; // Normal size for images
    const enlargedSize = normalSize * 1.5; // Enlarged size for images
    let hoverIndex = -1;
    
    // Draw the main timeline
    stroke(0);
    strokeWeight(6);
    line(cardX + 500, cardY - 375, width - 100, cardY - 375);
    strokeWeight(0);
    
    // Calculate spacing based on the canvas width and number of events
    let spacing = ((width - 500) / (timeline_events.length - 1)) - 30;
    
    for (let i = 0; i < timeline_events.length; i++) {
      let x = cardX + 500 + i * spacing;
      let y = cardY - 375;

        imageMode(CENTER);
        image(timeline_events[i], x, y - normalSize - 15, normalSize, normalSize);

          // Determine if the mouse is over this interest
        if (mouseX > x - normalSize / 2 && mouseX < x + normalSize / 2 &&
            mouseY > y - normalSize / 2 && mouseY < y + normalSize / 2) {
            hoverIndex = i;
        }

        // Draw images normally or enlarged if hovered
        if (hoverIndex === i) {
            drawTimelineImagesAndText(x, y, years[i], i, enlargedSize * 0.8, true);
        } else {
            drawTimelineImagesAndText(x, y, years[i], i, normalSize * 0.8, false);
        }
    }
    
}

function drawTimelineImagesAndText(x, y, label, i, size, isHovered) {
    let img = timeline_events[i];
    // let ar = img.width / img.height;
    // let imgW = size * ar;
    // let imgH = size;

    someMinimumHeight = 50;
  
    // Draw the circles on the timeline
    fill(80);
    stroke(255);
    strokeWeight(2);
    ellipse(x, y, size, size);
    stroke(255);
  
    // Split the label into words for multiline text
    let words = label.split(" ");
    let lineHeight = 20; // Set the line height for multiline text
  
    // Draw the text normally
    textFont('Rocher');
    fill("#f6931d");
    textSize(22); // Normal text size
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    // Draw each word on a separate line
    for (let j = 0; j < words.length; j++) {
        text(words[j], x, y + size / 2 + 5 + (lineHeight * j));
    }
    textFont('Arial');

    // Inside your draw function or a specific item hover function
    if (isHovered) {
        textSize(14); // Size of the text
        textAlign(CENTER, TOP); // Alignment of the text
        textStyle(NORMAL);
        let rectWidth = 450; // Fixed width for the rectangle
        let padding = 20; // Padding around the text
        
        // Simulate text wrapping to calculate the height
        let txtHeight = calculateTextHeight(timeline_description[i], rectWidth - padding) + padding * 2;
      
        // Now adjust the rectWidth and txtHeight if they are too big
        // Check if the text block height is greater than needed
        if (txtHeight < someMinimumHeight) {
          txtHeight = someMinimumHeight; // Set it to some minimum height if it's smaller
        }
        
        // Ensure the rectangle stays within the canvas
        let rectX = x - rectWidth / 2;
        let rectY = y + 60;
        if (rectX < 0) rectX = 0;
        if (rectX + rectWidth > width) rectX = width - rectWidth;
        if (rectY + txtHeight > height) rectY = height - txtHeight;

        // Draw the shadowed rectangle
        drawingContext.shadowOffsetX = 5;
        drawingContext.shadowOffsetY = 5;
        drawingContext.shadowBlur = 10;
        drawingContext.shadowColor = 'rgba(0, 0, 0, 0.5)';
        fill("#30333f");
        noStroke();
        rectMode(CORNER);
        rect(rectX, rectY, rectWidth, txtHeight - 20, 20); // Rounded corners

        // Reset shadow parameters
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowBlur = 0;

        // Draw the text within the bounds
        fill('#e6e6e6');
        text(timeline_description[i], rectX + padding / 2, rectY + padding / 2, rectWidth - padding);
    }

  }


// A function to calculate the height of the text block
function calculateTextHeight(str, maxWidth) {
    let words = str.split(' ');
    let line = '';
    let lineHeight = textSize() * 1.2; // Line height is typically 1.2 times the text size
    let h = lineHeight;
  
    for (let i = 0; i < words.length; i++) {
      let testLine = line + words[i] + ' ';
      let testWidth = textWidth(testLine);
      if (testWidth > maxWidth && i > 0) {
        line = words[i] + ' ';
        h += lineHeight;
      } else {
        line = testLine;
      }
    }
  
    return h;
  }
  
function mouseMoved() {

    redraw(); // Redraw the sketch to show enlarged image and text box
}

