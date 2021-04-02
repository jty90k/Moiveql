export const people = [
  {
    id: "0",
    name: "Jty",
    age: 22,
    sex: "Male",
  },
  {
    id: "1",
    name: "Kim",
    age: 16,
    sex: "Female",
  },
  {
    id: "2",
    name: "Lee",
    age: 16,
    sex: "Female",
  },
  {
    id: "3",
    name: "Park",
    age: 16,
    sex: "Female",
  },
  {
    id: "4",
    name: "Natasha",
    age: 16,
    sex: "Female",
  },
  {
    id: "5",
    name: "Japan Girl",
    age: 16,
    sex: "Female",
  },
  {
    id: "6",
    name: "USA Girl",
    age: 16,
    sex: "Female",
  },
  {
    id: "7",
    name: "German",
    age: 16,
    sex: "Female",
  },
];

export const getByld = (id) => {
  const filteredPeople = people.filter((person) => people.id === id);
  return filteredPeople[0];
};
