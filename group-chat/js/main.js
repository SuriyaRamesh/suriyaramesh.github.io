//$(document).ready(function() {
   
     var userA_messages = [];
        
        (function(){
            for (var i = 0; i < userA_messages.length; i++) {
                $('.message-window').append(userA_messages[i]);
                
            }
        })();
        
        function collectUserAData() {
        
            
            var name = document.querySelector("#username").value;
            console.log("UserName = "+ name);
            var msg = document.querySelector("#message").value;
            console.log("Message = "+ msg);
            
            var msg_box = document.createElement('li');
            var full_msg = msg+"<br><strong>"+name+"</strong>";
            msg_box.innerHTML = full_msg;
            msg_box.style.cssText = "color: #fff; font-size: 12px; padding: 10px; margin: 15px 50px 2px 50px; width: fit-content; border-radius: 5px; ; background-color: rgb(41 118 174);";
            
            console.log(msg_box);
            msg_box.setAttribute('class', 'align-self-end');
            console.log(typeof msg_box);
            $('.message-window').append(msg_box);
            
            var messages = document.querySelectorAll('li');
            console.log(messages);
            var last_message = messages[messages.length-1];
            console.log(last_message);
            last_message.scrollIntoView();
            
            userA_messages.push(msg_box);
            console.log(userA_messages.length);
            
           document.querySelector("#username").value = "";
            document.querySelector("#message").value = "";
            
        }
        
        function collectUserBData() {
            
            var name = document.querySelector("#userB").value;
            console.log("UserName = "+ name);
            var msg = document.querySelector("#messageB").value;
            console.log("Message = "+ msg);
            
            var msg_box = document.createElement('li');
            var full_msg = msg+"<br><strong>"+name+"</strong>";
            msg_box.innerHTML = full_msg;
            msg_box.style.cssText = "color: #000; font-size: 12px; padding: 10px; margin: 15px 50px 2px 50px; width: fit-content; border-radius: 5px; ; background-color: #eeeeee;";

            console.log(msg_box);
            msg_box.setAttribute('class', 'align-self-start');
            console.log(typeof msg_box);
            $('.message-window').append(msg_box);
            
            var messages = document.querySelectorAll('li');
            console.log(messages);
            var last_message = messages[messages.length-1];
            console.log(last_message);
            last_message.scrollIntoView();
            
            userA_messages.push(msg_box);
            console.log(userA_messages.length);
            
           document.querySelector("#userB").value = "";
            document.querySelector("#messageB").value = "";
        }
    
//});