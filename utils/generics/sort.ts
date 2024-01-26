interface IItem {
    id: number
}

const data = [
    { id: 1, name: '1'},
    { id: 2, name: '2'},
    { id: 3, name: '3'}
];

enum SortTypes {
    asc = 'asc',
    desc = 'desc'
}
type ISortTypes = keyof typeof SortTypes;


function sort<T extends IItem>(data: T[], type: ISortTypes = SortTypes.asc): T[] {
  return data.sort((a: T, b: T): number => {
      switch (type) {
          case SortTypes.desc:
              return a.id - b.id;
          case SortTypes.asc:
              return b.id - a.id;
          default:
              return 0
      }
  })
}

console.log(sort(data, SortTypes.desc))
console.log(sort(data, SortTypes.asc))