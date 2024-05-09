// Define the questions and their corresponding result mappings
var questions = [
    {
        question: "I see myself as someone who is...",
        options: {
            low: "Reserved, prefers routine",
            high: "Open to new experiences, curious"
        }
    },
    {
        question: "I see myself as someone who is...",
        options: {
            low: "Disorganized, careless",
            high: "Organized, reliable"
        }
    },
    {
        question: "I see myself as someone who is...",
        options: {
            low: "Reserved, quiet",
            high: "Outgoing, sociable"
        }
    },
    {
        question: "I see myself as someone who is...",
        options: {
            low: "Critical, quarrelsome",
            high: "Empathetic, cooperative"
        }
    },
    {
        question: "I see myself as someone who is...",
        options: {
            low: "Calm, emotionally stable",
            high: "Anxious, easily stressed"
        }
    }
];

// Add event listener for the submit button
document.getElementById('submitBtn').addEventListener('click', function () {
    var resultKey = '';

    // Iterate through each question
    for (var i = 0; i < questions.length; i++) {
        var question = questions[i];
        var answer = document.querySelector('input[name="q' + (i + 1) + '"]:checked');

        // Check if user has answered all questions
        if (!answer) {
            alert('Please answer all questions.');
            return; // Exit the function early if any question is unanswered
        }

        // Concatenate user's selections to form a unique key
        resultKey += answer.value + "_";
    }

    // Remove trailing underscore
    resultKey = resultKey.slice(0, -1);

    // Calculate the personality result using the calculatePersonality function
    var result = calculatePersonality(resultKey);

    // Display the result on the webpage
    document.getElementById('result').innerText = result || "No matching personality description found.";

    // Disable radio buttons and submit button after submitting the test
    disableTest();
});

// Function to disable radio buttons and submit button after submitting the test
function disableTest() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    var submitButton = document.getElementById('submitBtn');

    radioButtons.forEach(function (radioButton) {
        radioButton.disabled = true;
    });

    submitButton.disabled = true;
}



// Function to calculate personality based on the Big Five model
// Function to calculate personality based on the Big Five model
// Function to calculate personality based on the Big Five model
function calculatePersonality(resultKey) {
    // Split the resultKey into individual trait scores
    var scores = resultKey.split('_');

    // Define trait interpretations
    var interpretations = ['low', 'medium', 'high'];

    // Interpret each trait score
    var personalityTraits = [
        'Openness',
        'Conscientiousness',
        'Extraversion',
        'Agreeableness',
        'Neuroticism'
    ];
    var personalityResult = '';
    for (var i = 0; i < scores.length; i++) {
        var traitScore = scores[i];
        if (traitScore === 'low') {
            personalityResult += 'You have low scores on ' + personalityTraits[i] + ', ';
        } else if (traitScore === 'high') {
            personalityResult += 'You have high scores on ' + personalityTraits[i] + ', ';
        } else {
            // Handle unexpected values
            console.error('Unexpected value in result key:', traitScore);
        }
    }

    // Remove trailing comma and space
    personalityResult = personalityResult.slice(0, -2);

    // Return the personality result
    return personalityResult;
}


// Generate the quiz form dynamically
var form = document.getElementById('quizForm');
for (var i = 0; i < questions.length; i++) {
    var question = questions[i];
    var questionHTML = '<div class="question">' +
        '<p>' + question.question + '</p>';
    for (var option in question.options) {
        if (question.options.hasOwnProperty(option)) {
            questionHTML += '<input type="radio" id="q' + (i + 1) + option + '" name="q' + (i + 1) + '" value="' + option + '">' +
                '<label for="q' + (i + 1) + option + '">' + question.options[option] + '</label>';
        }
    }
    questionHTML += '</div>';
    form.innerHTML += questionHTML;
}