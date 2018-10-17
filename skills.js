$(document).ready(function() {
  var resources = {
    turingMachines: [
      'I took a class at Binghamton about automata theory and formal languages.',
      'Overall I find Turing Machines and automata interesting and a lot of fun.  However, I do not have much experience.'
    ],

    assembly: [
      'I have a solid understanding of what assembly is and a bit on how to write it from some classes I took.'
    ],
    c: [
      'I have done some work in C and have a basic understanding.',
      'Least comfortable with of all the programming languages I know.  However, I know basic principles.'
    ],
    cplusplus: [
      "Of all the languages I learned c++ is the one that came the most 'natural' to me.",
      "I feel comfortable writing in c++ and was the language I learned about data structures with."
    ],
    mvc: [
      'I\'ve had good experience with MVC since I have been using Angular as my front end framework.'
    ],
    python: [
      'Python was the first language I learned when I started programming',
      'I was comfortable with it and would need to shake off a little rust but would be able to get going relatively easily'
    ],
    html: [
      'Html is used in most of the things I do and I have a good understanding on the ins and outs.'
    ],
    css: [
      'I use css and sass a lot. I enjoy using it and playing around with it to make some nice designs.'
    ],
    javascript: [
      'I\'ve been working with JavaScript a lot and I am very comfortable with it. I practice with it and have read some books and articles on it.'
    ],
    jquery: [
      'I\'m familiar with most of the jQuery library I know the fundamentals.  However, I do not really use it much.'
    ],
    angular: [
      'I have used Angular a lot.  I am very comfortable using it and have built most of my apps with it.'
    ],
    karmaJasmine: [
      'I\'ve done some testing with Karma and with Jasmine. I am not particularly skilled or experienced with them but I can use them.'
    ],
    gulpGrunt: [
      'I\'ve done some work with them, but I\'m not particularly skilled or experienced.'
    ],
    node: [
      'I use Node and I have done a lot of reading about it.',
      'I am no expert but I continue to learn as I use it'
    ],
    express: [
      'I\'m comfortable with Express and I have a good amount of experience using it.',
      'I know a lot of the available features and have done readings and workshops about middleware, bodyParser, etc.'
    ],
    passport: [
      'I have some experience with passport but not much.'
    ],
    mongo: [
      'I have made CRUD apps and have used mongoose. ',
      'I am very familiar with it and have spent a good amount of time getting to know those questionable docs.'
    ],
    mochaSupertest: [
      'I\'ve written and helped written a few tests for Node backends. I do not have much expereince with mocha and supertest.'
    ],
    sql: [
      'I have done some tutorials and learned a bit at Fullstack Academy',
      'I can write queries more on a basic level but I understand how to use sql.'
    ],
    java: [
      'I learned Java at the university and it is the language I used to help learn object oriented programming',
      'It has been a while since I have used it but I was comfortable with it and can pick it right back up.'
    ],
    smartWork: [
      'When I learned about what smart work was compared to hard work something just clicked for me in how to go about programming.',
      'It is a simple concept but it is the root of all programming: if there is a easier way to do the exact same thing, do it.',
      'When I first started programming I did a lot of just making code that worked.  Now I focus on efficiency and then optimizations'
    ],
    communication: [
      'I am very good at talking to people who need help or asking for help when I need help.',
      'I am always receptive to criticism and give criticisms in a constructive manner when needed.',
      'I believe my ability to interact with others is a strength of mine and goes a long way in working with others.'
    ],
    psychology: [
      'I learned a lot at school due to my degree in Neuroscience. I believe it helped me to think more analytically.'
    ],
    git: [
      'I\'m comfortable working with Git and GitHub.',
      'I use it for version control on all of my projects',
      'I am no master of it but I am sure if there is a problem I could easily troubleshoot it due to my familiarity.'
    ],
    asp: [
      'Use at work.',
      'Know enough to read and build a front-end on top of it.'
    ],
    react: [
      'What I am currently using at work.',
      'Can very comfortably work and build with React.'
    ],
    svn: [
      'The version control we use at work',
      'Can comfortably use.'
    ]
  };

  var $h3 = $('.elaboration h3');
  var $ul = $('.elaboration ul');

  $('.skills li').on('click', function(e) {
    $ul.html('');

    var skill = $(this).attr('id');

    $h3.text($(this).text());

    resources[skill].forEach(function(line) {
      var $li = $('<li>' + line + '</li>');
      $ul.append($li);
    });
  });
});
