class Movie{
    constructor(string title, string studio, string rating)
   
       {
   
           this.title = title;
           this.studio = studio;
           this.rating = rating;
       }
   
       function getRating()
       {
           return this.rating;
       }
   
       function getTitle()
       {
           return this.title;
       }
   
   }
   
   
   movies = [
       new Movie('Casino Royale', 'Eon Productions', 'PG¬13'),
       new Movie ('Glass', 'Buena Vista International', 'PG¬13'),
       new Movie ('Spider-Man: Into the Spider-Verse', 'Columbia Pictures', 'PG')
       ];
   
   
   function getPG(array movies): array
   {
       resultArray = [];
       foreach (movies as movie)
       {
           if (movie->getRating() === 'PG')
           {
               array_push(resultArray, movie->getTitle());
           }
       }
       return resultArray;
   }
   
   var_dump(getPG(movies));
   