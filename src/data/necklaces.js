import faker from 'faker'

export const necklace = () => {
  return {
    id: faker.random.number(),
    name: faker.random.arrayElement([
      'Pear Shape', 'Cross-over', 'Multi-shape', 'Kiss', 'Marquise and Round', 'Double Strand Knot', 'Emerald Cut', 'Cross', 'Spiral Pave', 'Classic Butterfly', 'Bow Pendant', 'Solar Pave',
    ]),
    selectedDelivery: 'standard',
    quantity: 1,
    subTotal: 0,
    cost: Math.ceil(faker.random.number({ min: 200, max: 5000 }) / 100) * 100,
    image: faker.random.arrayElement([
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/8496226-745.webp',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/1199242-745.webp',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/2647699-745.webp',
        color: ['gold'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/3960242-745.webp',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/4468570-745.webp',
        color: ['gold'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/9789626-745.webp',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/4584945-745.webp',
        color: ['gold'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/8432740-745.webp',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/9690174-745.webp',
        color: ['gold'],
        gender: ['Men'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/4468538-745.webp',
        color: ['gold'],
        gender: ['Men'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/3081389-745.webp',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/8214093-745.webp',
        color: ['gold'],
        gender: ['Men'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/8732620-745.webp',
        color: ['gold'],
        gender: ['Men'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/4255682-745.webp',
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