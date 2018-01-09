class Book{
  constructor(title, author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}


class UI{

  addBookToList(book){
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class='delete'>X</a></td>
    `;
    list.appendChild(row);
  }

  showAlert(message,className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // can only get child elements/nodes of parent
    container.insertBefore(div,form);

    setTimeout(function(){
      document.querySelector('.alert').remove();
    },3000);

  }

  deleteBook(target){
    if(target.className = 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// listen for submit button on form
document.getElementById('book-form').addEventListener('submit', function(e){

  // get variables from form
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // instantiate classes
    let book = new Book(title,author,isbn);
    let ui = new UI

    // validation
    
    if(title === "" || author === "" || isbn === ""){
      ui.showAlert("Please fill in all fields","error");
    } else { 
    
      // add book to listing
      ui.addBookToList(book);
    
      // Show success message
      ui.showAlert("Book added to list...yay!","Success");
    
      // clear fields for next entry
      ui.clearFields(); 
    
      e.preventDefault();
    
    }
});



// delete item event listener
document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteBook(e.target);
  
  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});