var message = {
  username: window.location.search.substr(10),
  text: '',
  roomname: ''
};


var friends = [];

var app = {
  server: 'https://api.parse.com/1/classes/chatterbox',
  userName: message.username,

  init: function(){
    //fetch will be called here
    $(document).ready(function(){
      // app.init();
      // event.preventDefault();


       // $('#send .submit').on('click',function(event){
       //    event.preventDefault();
       //    console.log('inside of handleSubmit');
       //    app.send(message)
       //  })
        app.addFriend()
       app.handleSubmit()
       app.clearMessageFeed();
    })
  },

  send: function(message){
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: app.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('data sent to sever', data)
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message');
      }
    });
  },

  fetch: function(){
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: app.server,
      type: 'GET',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('data from sever', data)
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message');
      }
    });
  },

  clearMessageFeedFromDOM: function(){
    $('#clear-messages').on('click',function(){
      $('#chats').empty();
      console.log('messages deleted from DOM')
     })
  },

  // renderMessage: function(){

  // }

  addMessage: function(message){
    var user = message.username;
    var userText = message.text;
    
    var $post = $('<div class="userName"/>')
      .text(message.username)
      .append('<div class="userMessage"/>')
      .text(userText);

    $('#chats').prepend($post);
  },

//      <option value="lobby">Please Choose Chat Room</option>

  addRoom: function(roomname){
    var room = $("<option value = ''" + roomname + "" + "/>")
    $('#roomSelect').append(room)
  },

  addFriend: function(friendName){
    friends.push(friendName);
    $('.userName').on('click',function(){
      console.log('hi');
      app.addFriend();
     })
  },

  handleSubmit: function(){
    message.text = $('#message').val(); // this is what the users inputs
    $('#send .submit').on('click',function(event){
      event.preventDefault();
      console.log('inside of handleSubmit');
      app.send(message);
      app.addMessage(message.text);

    })
  }
}


app.init()