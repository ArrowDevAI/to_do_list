function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue); // Set the text content directly
    
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(li);
  
      // Attach the event handler for crossing out directly
      li.on("dblclick", function() {
        $(li).toggleClass("strike");
      });
  
      // Adding a delete button
      let crossOutButton = $('<crossOutButton>X</crossOutButton>'); 
      li.append(crossOutButton); 
 
      function deleteListItem() {
        $(this).parent().remove(); // $(this) will be what triggered the event, in this case, it is the crossOutButton
        // also, .parent is the particular line item beacuse int he cose above it was appended as a chile to the li.The next in the
        //chain is .remove so now that li will be removed when the deleteListItem is called below. 
      } 
  
      crossOutButton.on("click", deleteListItem);
    }
  }
  $('#list').sortable();

  