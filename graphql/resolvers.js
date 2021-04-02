import { people, getByld } from "./db.js";

const resolvers = {
  Query: {
    people: () => people,
    person: () => getByld(),
  },
};

export default resolvers;

// 보다시피 여기가 자신의 DataSouce이다. 곧 Database가 되겠지. GraphQL을 통하면 뭐든지 가능해
