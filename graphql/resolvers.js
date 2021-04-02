import { people, getByld } from "./db.js";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getByld(id),
  },
};

export default resolvers;
