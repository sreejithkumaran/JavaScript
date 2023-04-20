class Book {
  #_author;
    constructor(author) {
      this.#_author = author;
    }

    // getter
    get writer() {
      return this.#_author;
    }

    // setter
    set writer(updatedAuthor) {
      this.#_author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer); // anonymous

  novel.writer = 'newAuthor';
  console.log(novel.writer);  // newAuthor

  console.log(novel.#_author); // SyntaxError: Private field '#_author' must be declared in an enclosing class