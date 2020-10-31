import faker from 'faker'

export const necklace = () => {
  return {
    id: faker.random.number(),
    name: faker.random.arrayElement([
      'Pear Shape', 'Cross-over', 'Multi-shape', 'Kiss', 'Marquise and Round', 'Double Strand Knot', 'Emerald Cut', 'Cross', 'Spiral Pave', 'Classic Butterfly', 'Bow Pendant', 'Solar Pave',
    ]),
    cost: Math.ceil(faker.random.number({ min: 200, max: 5000 }) / 100) * 100,
    image: faker.random.arrayElement([
      {
        url: 'https://www.graff.com/wp-content/uploads/2020/03/RGP704-Laurence-Graff-Signature-Triple-Spinning-Pendant-Rose-Gold-White-Gold-1000x1000.png',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2020/03/RGP703-Laurence-Graff-Signature-Triple-Spinning-Pendant-White-Gold-version-1000x1000.png',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/06/A-Graff-Threads-Pendant_GP26372-RGP665-1000x1000.png',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/11/A-Graff-Threads-Collection-Yellow-and-White-Diamond-Necklace-RGN652-GN9173-1000x1000.png',
        color: [ 'diamond', 'gold' ],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2017/10/Classic-Graff-Marquise-and-Round-diamond-Necklace-GN7882-1000x1000.png',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2020/02/Classic-Graff-Pear-shape-Cross-over-diamond-Necklace-GN8826-RGN591-1000x1000.png',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2017/10/Classic-Graff-Sapphire-and-Diamond-Pearshape-Crossover-Graff-necklace-detail-RGN479-1-1000x1000.png',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2017/10/Classic-Graff-Cushion-Cut-Yellow-Diamond-Pendant-YCPT01-1000x1000.png',
        color: [ 'diamond', 'gold' ],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2017/10/Classic-Graff-Heart-Shape-Yellow-Diamond-Pendant-YHPT02-1000x1000.png',
        color: [ 'diamond', 'gold' ],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2017/10/Classic-Graff-Radiant-Cut-Yellow-Diamond-Pendant-RGP122-1000x1000.png',
        color: [ 'diamond', 'gold' ],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2020/02/Classic-Graff-Pear-Shape-Yellow-Diamond-Pendant-RGP678-1000x1000.png',
        color: ['gold'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/06/A-Graff-Kiss-Pav%C3%A9-Diamond-Pendant_GP26468-RGP670-1-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/06/A-Graff-Diamond-Kiss-Pendant_RGP652-GP25616-2-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2018/09/RGP599-Graff-Spiral-Pave-Diamond-Pendant-White-Gold-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/10/RGP598-Graff-Spiral-Pave-Diamond-Pendant-Rose-Gold-1000x1000.png',
        color: [ 'diamond', 'gold' ],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2020/02/Classic-Graff-Diamond-Cross-Pendant-RGP139-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2020/02/Classic-Graff-Diamond-Cross-Pendant-RGP005-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2020/02/Classic-Graff-Round-Diamond-Pendant-RGP619-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2020/02/Classic-Graff-Triple-Row-Round-Diamond-Necklace-RGN660-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
    ]),
    description1: faker.random.arrayElement([
      '40mm', '42mm', '38mm', '36mm', '44mm',
    ]),
    description2: faker.random.arrayElement([
      'Scratch-resistant sapphire',
    ]),
    description3: faker.random.arrayElement([
      'Expertly set withh round and invisibly cut diamonds',
    ]),
  }
}

export const getNecklaces = () => {
  let necklaces = []

  for (let i = 0; i < faker.random.number({ min: 30, max: 30 }); i++) {
    necklaces.push(necklace())
  }

  return necklaces
}