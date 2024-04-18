const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
const book = getBook(3);

var { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres)

const [primaryGenre, secondGenre, ...otherGenres] = genres;

// primaryGenre;
// secondGenre;
// console.log(otherGenres[1])

const newGenres = [...genres, "new genre"];
newGenres;

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",

  // Overwriting an existing property
  pages: 1210,
};

const getYear = (str) => str.split("-")[0]
updatedBook;

var {title, author, pages, publicationDate} = updatedBook;

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}`
summary;

pages > 1000 ? "Over 1 thousand" : "Less than 1 thousand"

const summary2 = `${title}, which has ${
    pages > 1000 ? "over a thousand" : "less than 1000"
  } pages, was written by ${author} and published in ${
    getYear(
      publicationDate
    )
  }`

summary2;

console.log('' && 'some string');
console.log(hasMovieAdaptation || 'some string');

const countWrong = book.reviews.librarything?.reviewsCount || "no data";
countWrong;

const count = book.reviews.librarything?.reviewsCount ?? "no data";
count;

const getTotalReviewCount = (b) => {
  return b.reviews.librarything?.reviewsCount ?? 0 + b.reviews.goodreads?.reviewsCount ?? 0
}

const totReviews = getTotalReviewCount(book);
totReviews;
*/



/*
const books = getBooks();
const getTotalReviewCount = (b) => {
  const la = b.reviews.librarything?.reviewsCount ?? 0;
  const gr = b.reviews.goodreads?.reviewsCount ?? 0;
  la;
  gr;
  return la + gr;
  
}

essentialData = books.map((b) => ({
  title: b.title,
  author: b.author,
  reviewsCount: getTotalReviewCount(b),
  pages: b.pages,
}));


console.log(essentialData)


const longBooks = books
  .filter((b) => b.pages > 500)
  .filter((b) => b.hasMovieAdaptation)
const shortBooks = books
  .filter((b) => b.pages < 500)
  .filter((b) => b.hasMovieAdaptation)

longBooks;
shortBooks;

const adventureBooks = books.filter((b) => b.genres.includes("adventure"));

adventureBooks;

const pagesAllBooks = books.reduce((acc, b) => b.pages + acc, 0)
const avgPages = pagesAllBooks / books.length;
const bookPages = books.map((b) => b.pages);
bookPages;
pagesAllBooks;
avgPages;


const arr = [3,7,1,9,6, 80];
const sortedArr = arr.slice().sort((a, b) => a - b);
sortedArr;
arr;

const sortedByPages = essentialData.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

const newBookID = essentialData.length + 1;
const newBook = {
  id: newBookID,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
}

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

const booksAfterDelete = booksAfterAdd.filter((b) => b.id != 3)
booksAfterDelete;

*/


const protocol = "https://";
const domain = "jsonplaceholder.typicode.com";
const path = "/todos";
const URL = protocol + domain + path;

/*
const resp = fetch(URL)
  .then(res => res.json())
  .then(data => console.log(data)
);

console.log("Test output")
*/


async function getTodos() {
  const res = await fetch(URL)
  const data = await res.json();
  console.log(data);
  return data;
}

const t = getTodos()
t;