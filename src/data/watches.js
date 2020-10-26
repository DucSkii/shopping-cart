import faker from 'faker'

export const watch = () => {
  return {
    name: faker.random.word(),
    cost: Math.ceil(faker.random.number({ min: 1000, max: 20000 }) / 100) * 100,
    image: faker.random.arrayElement([
      {
        url: 'https://content.rolex.com/dam/2020/upright-bba/m226659-0002.png?impolicy=v6-upright?imwidth=350',
        color: [ 'black' ],
      },
      {
        url: ' https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0006_m126333-0010-datejust-41.jpg?imwidth=350',
        color: [ 'gold', 'silver' ],
      },
    ]),
  }
}

export const getWatches = () => {
  let watches = []

  for (let i = 0; i < faker.random.number({ min: 5, max: 20 }); i++) {
    watches.push(watch())
  }

  return watches
}