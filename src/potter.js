class Potter {
  constructor() {
    this.basket = [];
  }
  addToBasket(book) {
    this.basket.push(book);
  }
  checkout() {
    return this.discount();
  }
  discount() {
    let collection = [];

    for (let i = 0; i < 5; i++) {
      const books = getBooksNumbered(i + 1, this.basket);
      collection.push(books);
    }

    let total = 0;
    const max = getNumberOfBooksWhichAppearsMost(collection);

    for (let i = 0; i < max; i++) {
      let totalBooks = 0;

      for (let j = 0; j < collection.length; j++) {
        if (collection[j][i]) {
          totalBooks++;
        }
      }

      let cost = totalBooks * 8;
      let discount = 0;

      switch (totalBooks) {
        case 2:
          discount = (cost / 100) * 5;
          cost = cost - discount;
          break;
        case 3:
          discount = (cost / 100) * 10;
          cost = cost - discount;
          break;
        case 4:
          discount = (cost / 100) * 20;
          cost = cost - discount;
          break;
        case 5:
          discount = (cost / 100) * 25;
          cost = cost - discount;
          break;
      }

      total += cost;
    }

    return Number(total.toFixed(2));
  }
  getBook(number) {
    return {
      number,
    };
  }
}

function getBooksNumbered(number, books) {
  return books.filter((book) => book.number === number);
}

function getNumberOfBooksWhichAppearsMost(collection) {
  let max = 0;
  collection.forEach(function (books) {
    if (books.length > max) {
      max = books.length;
    }
  });
  return max;
}

module.exports = Potter;
