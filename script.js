// Your question data
let questionData = [
    { id: 1, question: "The sun shines during the?", answer: "day", type: "Open-Ended" },
    { id: 2, question: "Which color is the sky on a clear day?", answer: "Blue", type: "Open-Ended" },
    { id: 3, question: "What animal is known as the king of the jungle?", answer: "Lion", type: "Open-Ended" },
    { id: 4, question: "Who grows food for us", answer: "Farmer", type: "Open-Ended" },
    { id: 5, question: "What is the color of grass?", answer: "Green", type: "Open-Ended" },
    { id: 6, question: "We smell with our?", answer: "nose", type: "Open-Ended" },
    { id: 7, question: "We eat food with our?", answer: "mouth", type: "Open-Ended" },
    { id: 8, question: "What do we get from bees ?", answer: "Honey", type: "Open-Ended" },
    { id: 9, question: "A mango is a?", answer: "fruit", type: "Open-Ended" },
    { id: 10, question: "What is the name of the planet we live on?", answer: "Earth", type: "Open-Ended" },
    { id: 11, question: "We wear sweaters in ?", answer: "winter", type: "Open-Ended" },
    { id: 12, question: "A cars moves on the ?", answer: "road", type: "Open-Ended" },
    { id: 13, question: "What do we need to breathe?", answer: "Air", type: "Open-Ended" },
    { id: 14, question: "Which animal says meow ?", answer: "cat", type: "Open-Ended" },
    { id: 15, question: "What do we see in the sky at night?", answer: "Moon", type: "Open-Ended" },
    { id: 16, question: "Which one is a living thing? ( Dog, Rock, Car)", answer: "dog", type: "Open-Ended" },
    { id: 17, question: "What should you do before eating food?___ (Wash your hands, Play, Sleep)", answer: "wash your hands", type: "Open-Ended" },
    { id: 18, question: "What do plants need to grow?____ ( Water, Food, Toys)", answer: "water", type: "Open-Ended" },
    { id: 19, question: "What do we call the home of birds?_____ ( Nest, Kennel, Pond)", answer: "nest", type: "Open-Ended" },
    { id: 20, question: "What do birds use to fly? ( Wings, Legs, Tail)", answer: "Moon", type: "Open-Ended" },

    
    
        
];

// Dynamically render questions
let questionContainer = document.getElementById('question-container');
questionData.forEach((data, index) => {
    let questionDiv = document.createElement('div');
    questionDiv.classList.add('question-block');

    // Add question label
    let questionLabel = document.createElement('label');
    questionLabel.innerText = `${index + 1}. ${data.question}`;
    questionDiv.appendChild(questionLabel);

    // Add input field for the answer
    let answerInput = document.createElement('input');
     answerInput.placeholder =`Write your ans...`
    answerInput.type = 'text';
   
    answerInput.name = `question-${data.id}`;
    answerInput.dataset.answer = data.answer; // Store the correct answer for scoring
    questionDiv.appendChild(answerInput);

    questionContainer.appendChild(questionDiv);
});

// Submit button logic
document.getElementById('Submit-btn').addEventListener('click', function () {
    let inputs = document.querySelectorAll('#question-container input');
    let score = 0;

    inputs.forEach(input => {
        if (input.value.trim().toLowerCase() === input.dataset.answer.toLowerCase()) {
            score++;
        }
    });

    // Show score
    document.getElementById('score').innerText = `${score}/${questionData.length}`;
    document.getElementById('thank-you-message').style.display = 'block';
    document.getElementById('score-message').style.display = 'block';
    document.getElementById('text-heading').style.display = 'block';
    document.getElementById('question-container').style.display='none';
    document.getElementById('Submit-btn').style.display='none';
    document.getElementById('text-heading-data').style.display='none';
});
