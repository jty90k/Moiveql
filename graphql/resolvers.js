const jty = {
  name: "Jty",
  age: 22,
  sex: "Man",
};

const resolvers = {
  Query: {
    person: () => jty,
  },
};

export default resolvers;
