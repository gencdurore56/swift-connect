// Filename: ComplexApplication.js
//
// Description: This code demonstrates a complex web application built in JavaScript.
// It uses advanced concepts such as object-oriented programming, asynchronous programming,
// and modules. The application simulates an online bookstore where users can browse,
// search, and purchase books.
//
// Note: This code is an example and may not include all functionality. It is intended
// for illustrative purposes only.

// -----------------------------
// Constants
// -----------------------------
const API_BASE_URL = 'https://example.com/api/books';

// -----------------------------
// Classes
// -----------------------------

// Book class representing a single book in the store
class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  // Calculate the discounted price
  getDiscountedPrice(discount) {
    return this.price * (1 - discount);
  }
}

// Store class representing the online bookstore
class Store {
  constructor() {
    this.books = [];
  }

  // Fetch books from the API and populate the store
  async fetchBooks() {
    try {
      const response = await fetch(API_BASE_URL);
      const data = await response.json();

      this.books = data.map((bookData) => {
        return new Book(bookData.title, bookData.author, bookData.price);
      });

      console.log('Books fetched successfully');
    } catch (error) {
      console.error('Failed to fetch books:', error);
    }
  }

  // Search books based on a keyword
  searchBooks(keyword) {
    const matchingBooks = this.books.filter((book) => {
      return book.title.toLowerCase().includes(keyword.toLowerCase()) || 
             book.author.toLowerCase().includes(keyword.toLowerCase());
    });

    return matchingBooks;
  }

  // Purchase a book by providing the book ID
  async purchaseBook(bookId) {
    const bookToPurchase = this.books.find((book) => book.id === bookId);

    if (!bookToPurchase) {
      console.error('Book not found for purchase');
      return;
    }

    try {
      // Send a purchase request to the API
      const response = await fetch(`${API_BASE_URL}/${bookId}/purchase`, {
        method: 'POST',
        body: JSON.stringify({ bookId }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log(`Book "${bookToPurchase.title}" purchased successfully!`);
      } else {
        console.error('Failed to purchase the book');
      }
    } catch (error) {
      console.error('Failed to purchase the book:', error);
    }
  }
}

// -----------------------------
// Main Application
// -----------------------------

// Create a store instance
const store = new Store();

// Fetch books from the API
store.fetchBooks();

// Search for books based on a keyword
const searchResults = store.searchBooks('javascript');

// Output the search results
console.log('Search Results:');
searchResults.forEach((book) => {
  console.log(`- ${book.title} by ${book.author}: $${book.price}`);
});

// Purchase the first book from the search results
const bookToPurchase = searchResults[0];

if (bookToPurchase) {
  store.purchaseBook(bookToPurchase.id);
} else {
  console.error('No books found to purchase');
}

// -----------------------------
// End of Code
// -----------------------------