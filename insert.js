/*

        hystoryMessage = (data) => {  
        data.forEach(element => this.setState( {messages: [...this.state.messages, element] } ));
      };
      //прослушиванием на клиента событие ресейв, при срабатывании вызываем TO_CHAT_MESS
        hystoryListening = this.socket.on('MESS_TO_ADMIN', this.hystoryMessage );
*/
/*
  socket.on('MESS_TO_USER', function(element)
      {
      element.forEach( data => {
            if (data.role == "admin") {
                       $('.chat').append(
                      `<div class='chat__messedge ${data.role}'>
                          <p class="chat__request">
                           ${data.request}
                         </p>
                      <p class="chat__autor">
                           Оператор
                      </p>
                      <svg class="card__repeat-img" onclick="repeat('${data.msg}')"   width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.63478 4.22673L5.6307 0.0144043V2.5275H4.77938C2.13979 2.5275 0 4.58041 0 7.11301V8.44484L0.378052 8.04729C1.66369 6.69596 3.48264 5.92596 5.38965 5.92596H5.63051V8.43906L9.63478 4.22673Z" fill="#FF8108"/>
                      </svg>
                           <div class="chat__text-wrapper">
                          <p class="chat__messedge-text">
                           ${data.msg}
                          </p>
                      </div>
                  </div> `       
                );
              }  else{     
               $('.chat').append(
                ` <div class='chat__messedge ${data.role}'>
                <p class="chat__request">
                           ${data.request}
                </p>
                      <p class="chat__autor">
                           Вы
                      </p>
                           <div class="chat__text-wrapper">
                          <p class="chat__messedge-text">
                           ${data.msg}
                          </p>
                      </div>
                  </div> `       
               );
             }
        
      })})
*/
/*
    function collAuth(argument) {
      if (sessionStorage.getItem('auth_address')== undefined ) {
        auth.style.display='block'
      } else {
   socket.emit('ADD_USER', sessionStorage.getItem('auth_address'),  
          {author:sessionStorage.getItem('author'),
          auth_phone:sessionStorage.getItem('auth_phone'),
          auth_contact_number:sessionStorage.getItem('auth_contact_number'),
          auth_balance:sessionStorage.getItem('auth_balance'),
          auth_tariff_inet:sessionStorage.getItem('auth_tariff_inet'),
          auth_address:sessionStorage.getItem('auth_address')
          }
          ) 
         collChat()     
          }
    }*/