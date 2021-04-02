import { getMovies, getMovie } from "./db.js";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
  },
};

export default resolvers;
