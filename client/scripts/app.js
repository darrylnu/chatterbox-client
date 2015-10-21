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
      app.fetch();
       // app.addMessage()
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
      data: {order: '-createdAt'},
      contentType: 'application/json',
      success: function (data) {
        console.log('data from server', data)
        console.log('chatterbox: Message sent');
        app.fetchFeedToTimeline(data);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message');
      }
    });
  },

  clearMessageFeed: function(){
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

    $('#chats').append($post);
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
    $('#send .submit').on('click',function(event){
      event.preventDefault();
      message.username 
      message.text = $('#message').val(); // this is what the users inputs
      
      var $userPostDiv = $('<div class="userName" />').text(message.username)//this turns the userName of the poster to text
      
      var $userText = $("<div class='userText' />").text(message.text); 
      //This variable will create 2 divs, 1 for the username, and 1 for the text that the user posts and submits.
      app.send(message);// this sends our post to the server
      
      $('#chats').prepend($userPostDiv).append($userText); // this is where the text of our posts are inserted
    }); 
  },
  fetchFeedToTimeline: function(data){
    var otherUserPosts = data.results; //array
    
    
      


    for(var i = 0;i<otherUserPosts.length;i++){
      $('#chats').append(_.escape(
        //this turns the userName of the poster to text
        var $userPostDiv = $('<div class="userName" />') 
            .text(otherUserPosts[i].username)

      //This variable will create 2 divs, 1 for the username, and 1 for the text that the user posts and submits.
        var $userText = $("<div class='userText' />")
            .text(message.text); 


      ));    
    }
  }



}


app.init();