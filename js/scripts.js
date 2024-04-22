function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue); 
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(li);
  
      
      li.on("dblclick", function() {
        $(li).toggleClass("strike");
      });
  
      // Adding a delete button
      let crossOutButton = $('<crossOutButton>X</crossOutButton>'); 
      li.append(crossOutButton); 
 
      function deleteListItem() {
        $(this).parent().remove(); // $(this) will be what triggered the event, in this case, it is the crossOutButton
        // also, .parent is the particular line item because in the code above it was appended as a child to the li.The next in the
        //chain is .remove so now that list item will be removed when the deleteListItem is called below. 
      } 
  
      crossOutButton.on("click", deleteListItem);
    }
  }
  $('#list').sortable();

  