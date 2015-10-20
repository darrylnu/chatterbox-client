// YOUR CODE HERE:



var message = {
  username: prompt("what is your name"),
  text: 'tga is awesome',
  roomname: '4chan'
};

var friends = [];


// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'https://api.parse.com/1/classes/chatterbox',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message');
//   }
// });

var app = {
  init: function(){
    app.addFriend();
    app.handleSubmit();
  },
  send: function (message){

  server: 'https://api.parse.com/1/classes/chatterbox',

  $.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.dir(data);
    console.log('chatterbox: Message sent');
    },
  error: function (data) {
    console.log('data', data)
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
    }
  })
},
  fetch: function (){
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
      console.log('chatterbox: Message sent');
      },
    error: function (data) {
      console.log('data', data)
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
      }
    })
  },



  clearMessages: function(){
    // document.removeChild(document.documentElement);
    $('#chats').empty()
  },

  addMessage: function(usermessage){
    console.log(1);
    app.send(usermessage);
    $('#chats').append("<p class ='username'><span>" + message.username + ":" + '</span> <br>' + usermessage   + "</span>" + "</p>");
  },

  addRoom: function(roomName){
    $('#roomSelect').append("<p>" + roomName.text + "</p>");
  },

  addFriend: function(){
    console.log('im in addFriend');

  },
  handleSubmit: function(){
    var userMessage = $('#message').val();
    console.log('userMessage --->', userMessage)

    $('.submit').on('click',function(){
      console.log('inside handleSubmit')
      app.addMessage(userMessage);
    })

  }

}

$(document).ready(function(){

// app.handleSubmit()
  $('.submit').on('click',function(){
      event.preventDefault();
      var userMessage = $('#message').val();
      console.log('inside handleSubmit')
      app.addMessage(userMessage);
      })

  $('#chats').append("<p></p>");

  $('.username span').on('click',function() {
    prompt('Would you like to add user as friend?');
  })
  $('.clear').on('click', function() {
    app.clearMessages()
    
  })

  app.fetch()

});


// $(document).ready(function(){
//   $('#chats').append("<p class='username'>Cliff<div>" + '<strong>Cliff</strong>'  + "</div>"   + "hello world" + "</p>");

//     $('.username').on('click', function(){
//       console.log('clicked?')
//       app.addFriend()
//       var $friend = $('.username div').text();

//       friends.push($friend)
//     });
// })