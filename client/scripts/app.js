// YOUR CODE HERE:



var message = {
  username: 'Darryl',
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
  init: function(){},
  send: function (message){
    $.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'POST',
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
  fetch: function (){
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: undefined,
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

  addMessage: function(message){
    // console.log(message);
    $('#chats').append("<p class ='username'><span>" + message.username  + "</span>"   +  message.text + "</p>");
  },

  addRoom: function(roomName){
    $('#roomSelect').append("<p>" + roomName.text + "</p>");
  },

  addFriend: function(){
    console.log('test has ran this function')

  }

}

$(document).ready(function(){
  $('#chats').append("<p class='username'>Cliff<div>" + '<strong>Cliff</strong>'  + "</div>"   + "hello world" + "</p>");

    $('.username').on('click', function(){
      console.log('clicked?')
      app.addFriend()
      var $friend = $('.username div').text();

      friends.push($friend)
    });

  
})