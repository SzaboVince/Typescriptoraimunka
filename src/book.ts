class Book {
    private name: string;
    private rating: number;
  
    constructor(name: string, rating: number) {
      if (rating < 1 || rating > 10) {
        throw new Error('Érvénytelen értékelés, a ratingnek 1 és 10 között kell lennie.');
      }
      this.name = name;
      this.rating = rating;
    }
  
    toString(): string {
      return `Név: ${this.name}, Értékelés: ${this.rating}`;
    }
  }
  
  export default Book;
  