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
  {
    id: "8",
    name: "Brazil Girl",
    age: 16,
    sex: "Female",
  },
  {
    id: "9",
    name: "England Girl",
    age: 16,
    sex: "Female",
  },
  {
    id: "10",
    name: "Franch Girl",
    age: 16,
    sex: "Female",
  },
  {
    id: "11",
    name: "Grace Girl",
    age: 16,
    sex: "Female",
  },
  {
    id: "12",
    name: "Swiden Girl",
    age: 16,
    sex: "Female",
  },
];

export const getByld = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
