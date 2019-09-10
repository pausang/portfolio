// Global Variables
var numberPage = $('.number-page');
var ProjectName = $('.ProjectName');
var yearText = $('.text-container-inner-plus');
var img1 = $('.img-inner1');
var img2 = $('.img-inner2');
var img3 = $('.img-inner3');
var textInner = $('.text-container-inner ');
var btn1 = $('.under-1');
var btn2 = $('.under-2');

// Project Content
var project1 = {
  name: 'Clicky Game',
  info: 'Role: Front-End Developer',
  imgs: [
    'public/images/clicky.png'
  ],
  text:
    'Create a memory game with React. This application's UI into components, 
     manage component state , and respond to user events.',
  hrefS: [
    'https://github.com/pausang/my-app',
    
  ]
};


var project2 = {
  name: 'Eat-Da-Burger!',
  info: 'Role: Full-Stack Developer',
  imgs: [
    'public/images/burger.png',
  ],
  text:
    "Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like eat so the app stores every burger in an online database. This Full-Stack App features MySQL, Node, Express and Handlebars.",
  hrefS: [
    'https://github.com/pausang/burger',
    'https://git.heroku.com/obscure-wave-68007.git'
  ]
};
var project3 = {
  name: 'FriendFinder',
  info: 'Role: Full-Stack Developer',
  imgs: [
    'public/images/friendfinder.png',
    
  ],
  text:
    "FriendFinder is basically a dating app. It takes in results from ther users' surveys, then compare their answers with those from other users and display the name of the user with the best overall match. This Full-Stack App features, Node,Express, front and back-end JS and, plain HTML and CSS.",
  hrefS: [
    'https://github.com/pausang/Friendfinder',
    'https://pure-basin-22018.herokuapp.com/'
  ]
};
var project4 = {
  name: 'Bamazon',
  info: 'Role: Back-End Developer',
  imgs: [
    'public/images/bamazon.png',
    
    
  ],
  text:
    "Bamazon is an Amazon-like storefront that runs with MySQL as Database. This back-end app takes in orders from customers and deplete stock from the store's inventory. It features Node, front and back-end JS and, plain HTML and CSS.",
  hrefS: [
    'https://github.com/pausang/bamazon',
    
  ]
};
var project5 = {
  name: 'Scrape',
  info: 'Role: Full-Stack Developer',
  imgs: [
    'public/images/scrape.png'
    
  ],
  text:
    'Scrape is Google Books Search app. It take in results from lifecycle methods to query and display books based on user searches.',
  hrefS: [
    'https://github.com/pausang/scrape',
    'https://fierce-crag-54172.herokuapp.com/'
  ]
};

// The next function set new values of every project through a hover event
function setNewValues(project) {
  $('.overlay-content-section').empty();

  var projectName = $('<h2>')
    .text(project.name)
    .addClass('ProjectName');
  var subtitle = $('<p>')
    .text(project.info)
    .addClass('subtitle mb-4');
  var textContent = $('<p>')
    .text(project.text)
    .addClass('text-container-inner mt-1 mb-4');

  var gallery = $('<div>').addClass('gallery');
  var img1 = $('<img>')
    .addClass('img-inner1 img')
    .attr('src', project.imgs[0])
    .attr('alt', project.info);
  var img2 = $('<img>')
    .addClass('ml-2 img-inner2 img')
    .attr('src', project.imgs[1])
    .attr('alt', project.info);
  var img3 = $('<img>')
    .addClass('ml-2 img-inner3 img')
    .attr('src', project.imgs[2])
    .attr('alt', project.info);
  gallery.append(img1, img2, img3);

  showImgToggle = $('<a>')
    .attr('id', 'btn-display')
    .attr('href', '#')
    .text('Show Images');

  var leftUl = $('<ul>').addClass('links-port text-right');
  var link1 = $('<li>').addClass('link-under-2');
  var link2 = $('<li>').addClass('link-under-1');
  var link1Inner = $('<a>')
    .text('SEE CODE')
    .addClass('btn btn-custom under-1')
    .attr('href', project.hrefS[0])
    .attr('target', '_blank');
  var link2Inner = $('<a>')
    .text('VISIT SITE')
    .addClass('btn btn-custom under-2 ml-2')
    .attr('href', project.hrefS[1])
    .attr('target', '_blank');
  link1.append(link1Inner);
  link2.append(link2Inner);
  leftUl.append(link1, link2);
  $('.overlay-content-section').append(
    projectName,
    subtitle,
    textContent,
    gallery,
    showImgToggle,
    leftUl
  );
}

$('.menu__link1').hover(function() {
  setNewValues(project1);
});

$('.menu__link2').hover(function() {
  setNewValues(project2);
});

$('.menu__link3').hover(function() {
  setNewValues(project3);
});

$('.menu__link4').hover(function() {
  setNewValues(project4);
});
$('.menu__link5').hover(function() {
  setNewValues(project5);
});

// The next funciton display images of every project through a click event
function displayImages() {
  event.preventDefault();
  if ($('.gallery').is(':visible'))
    $('.gallery').hide(), $('#btn-display').text('Show Images');
  else $('.gallery').show(), $('#btn-display').text('Hide Images');
}
$(document).on('click', '#btn-display', displayImages);

// The next function is activated once a email request is send it and the server has receive it.
$('#contact-form').submit(event => {
  event.preventDefault();
  if ($('[name="name"]').val() == '') {
    alert('Please enter your Full Name');
  } else if ($('[name="email"]').val() == '') {
    alert('Please enter your a valid email');
  } else if ($('[name="message"]').val() == '') {
    alert('Please enter your message');
  } else {
    const newContact = {
      name: $('[name="name"]')
        .val()
        .trim(),
      email: $('[name="email"]')
        .val()
        .trim(),
      subject: $('[name="subject"]')
        .val()
        .trim(),
      message: $('[name="message"]')
        .val()
        .trim()
    };

    $.post('/send', newContact).done(function(data) {
      if (data) {
        $('[name="name"]').val(''),
          $('[name="email"]').val(''),
          $('[name="subject"]').val(''),
          $('[name="message"]').val('');
        $('#myModal').modal('toggle');
        $('#modalBody').text(
          'Dear ' +
            data.name +
            ', thank you for contact me, I have received your menssage. As early as possible I will get back to you.'
        );
      }
    });
  }
});

// The next function shows and hice the list of projects in small screens.

$(document.body).on('click', '.closing-toggle', function() {
  var state = $(this).attr('data-state');

  if (state === 'open') {
    $(this).empty();
    $('.right-test').hide();
    var titleToggle = $('<small>').text('Projects   ');
    var icon = $('<i>');
    icon.addClass('fas');
    icon.addClass('fa-expand-arrows-alt');
    $(this).append(titleToggle, icon);
    $(this).attr('data-state', 'close');
  } else {
    $('.right-test').show();
    $(this).empty();
    var icon = $('<i>');
    icon.addClass('fas');
    icon.addClass('fa-times');
    $(this).append(icon);
    $(this).attr('data-state', 'open');
  }
});
