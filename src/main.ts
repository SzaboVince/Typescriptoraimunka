import Book from './book.ts';

const books: Book[] = [];

for (let i = 0; i < 30; i++) {
  const randomRating = Math.floor(Math.random() * 10) + 1;
  const book = new Book(`Book #${i}`, randomRating);
  books.push(book);
}

console.log('Az összes könyv névlistája:');
books.forEach((book) => {
  console.log(book.toString());
});

console.log('Értékelés > 7 könyvek:');
const highRatedBooks = books.filter((book) => book['rating'] > 7);
highRatedBooks.forEach((book) => {
  console.log(book.toString());
});

function bestof(books: Book[]): Book | undefined {
  if (books.length === 0) {
    return undefined;
  }
  return books.reduce((prev, current) => (prev['rating'] > current['rating'] ? prev : current));
}

const bestBook = bestof(books);
console.log('A legjobb könyv:');
if (bestBook) {
  console.log(bestBook.toString());
} else {
  console.log('Nincs könyv a listában.');
}

const bookForm = document.getElementById('bookForm') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const ratingInput = document.getElementById('rating') as HTMLInputElement;
const bookList = document.getElementById('bookList') as HTMLUListElement;

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const rating = parseInt(ratingInput.value, 10);
  try {
    const newBook = new Book(name, rating);
    books.push(newBook);
    nameInput.value = '';
    ratingInput.value = '';
    const li = document.createElement('li');
    li.textContent = newBook.toString();
    bookList.appendChild(li);
  } catch (error) {
    console.error("error");
  }
});


