import faker from 'faker'

export const watch = () => {
  return {
    id: faker.random.number(),
    name: faker.random.arrayElement([
      'GMT-MASTER II', 'OYSTER PERPETUAL 41', 'SUBMARINER', 'SEA-DWELLER', 'EXPLORER', 'SKY-DWELLER', 'AIR-KING', 'COSMOGRAPH DAYTONA', 'DATEJUST 36', 'EXPLORER II', 'SUBMARINER DATE', 'YACHT-MASTER 42', 'ROLEX DEEPSEA', 'CELLINI TIME', 'PEARLMASTER 39', 'PEARLMASTER 42', 'DATEJUST 31', 'OYSTER PERPETUAL 28', 'YACHT-MASTER 37', 'EXPLORER III', 'SUBMARINER 39', 'PEARLMASTER 51', 'DATEJUST 21', 'OYSTER PERPETUAL 18', 'AIR-KING 24', 'GMT-MASTER', 'ROLEX DEEPSEA II',
    ]),
    selectedDelivery: 'standard',
    quantity: 1,
    subTotal: 0,
    cost: Math.ceil(faker.random.number({ min: 1000, max: 20000 }) / 100) * 100,
    image: faker.random.arrayElement([
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m126333-0010.png?impolicy=v6-upright&imwidth=420',
        color: ['gold', 'silver'],
        gender: ['Men'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m126711chnr-0002.png?impolicy=v6-upright&imwidth=420',
        color: ['silver', 'black', 'rose gold'],
        gender: ['Men'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m228239-0033.png?impolicy=v6-upright&imwidth=420',
        color: ['silver'],
        gender: ['Men'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m124060-0001.png?impolicy=v6-upright&imwidth=420',
        color: ['silver', 'black'],
        gender: ['Men'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m124300-0001.png?impolicy=v6-upright&imwidth=420',
        color: ['silver'],
        gender: ['Men'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m116681-0002.png?impolicy=v6-upright&imwidth=420',
        color: ['silver', 'rose gold', 'royal blue'],
        gender: ['Men'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m116515ln-0018.png?impolicy=v6-upright&imwidth=420',
        color: ['black', 'rose gold'],
        gender: ['Men'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m126603-0001.png?impolicy=v6-upright&imwidth=420',
        color: ['silver', 'black', 'gold'],
        gender: ['Men'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m326238-0009.png?impolicy=v6-upright&imwidth=420',
        color: ['black', 'gold'],
        gender: ['Men'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m50535-0002.png?impolicy=v6-upright&imwidth=420',
        color: ['black', 'rose gold'],
        gender: ['Men'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m116680-0002.png?impolicy=v6-upright&imwidth=420',
        color: ['silver', 'royal blue'],
        gender: ['Men'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m116508-0009.png?impolicy=v6-upright&imwidth=420',
        color: ['gold', 'black'],
        gender: ['Men'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m279138rbr-0015.png?impolicy=v6-upright&imwidth=420',
        color: ['gold'],
        gender: ['Women'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m86409rbr-0001.png?impolicy=v6-upright&imwidth=420',
        color: ['silver'],
        gender: ['Women'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m278384rbr-0029.png?impolicy=v6-upright&imwidth=420',
        color: ['silver', 'royal blue'],
        gender: ['Women'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m126233-0030.png?impolicy=v6-upright&imwidth=420',
        color: ['gold', 'silver'],
        gender: ['Women'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m126281rbr-0011.png?impolicy=v6-upright&imwidth=420',
        color: ['silver', 'rose gold', 'black'],
        gender: ['Women'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m126234-0015.png?impolicy=v6-upright&imwidth=420',
        color: ['silver', 'black'],
        gender: ['Women'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m126283rbr-0004.png?impolicy=v6-upright&imwidth=420',
        color: ['silver', 'gold'],
        gender: ['Women'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m278285rbr-0010.png?impolicy=v6-upright&imwidth=420',
        color: ['rose gold'],
        gender: ['Women'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m279136rbr-0001.png?impolicy=v6-upright&imwidth=420',
        color: ['silver'],
        gender: ['Women'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m278273-0016.png?impolicy=v6-upright&imwidth=420',
        color: ['silver', 'gold'],
        gender: ['Women'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m279384rbr-0018.png?impolicy=v6-upright&imwidth=420',
        color: ['silver', 'black'],
        gender: ['Women'],
      },
      {
        url: 'https://content.rolex.com/dam/2020//upright-bba-with-shadow/m279161-0017.png?impolicy=v6-upright&imwidth=420',
        color: ['silver', 'rose gold'],
        gender: ['Women'],
      },
    ]),
    description1: faker.random.arrayElement([
      '40mm', '42mm', '38mm', '36mm', '44mm',
    ]),
    description2: faker.random.arrayElement([
      'Scratch-resistant sapphire', 'Waterproof to 100 metres / 330 feet',
    ]),
    description3: faker.random.arrayElement([
      'Screw-down, Triplock triple waterproofness system', '-2/+2 sec/day, after casing',
    ]),
  }
}

export const getWatches = () => {

  let watches = []

  for (let i = 0; i < faker.random.number({ min: 30, max: 30 }); i++) {
    watches.push(watch())
  }

  return watches
}