import faker from 'faker'

export const earring = () => {
  return {
    id: faker.random.number(),
    name: faker.random.arrayElement([
      'Pear Shape', 'Cross-over', 'Multi-shape', 'Kiss', 'Marquise and Round', 'Double Strand Knot', 'Emerald Cut', 'Cross', 'Spiral Pave', 'Classic Butterfly', 'Bow Pendant', 'Solar Pave',
    ]),
    selectedDelivery: 'standard',
    quantity: 1,
    subTotal: 0,
    cost: Math.ceil(faker.random.number({ min: 200, max: 2000 }) / 100) * 100,
    image: faker.random.arrayElement([
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/4131908-745.webp',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/1022474-745.webp',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/1199234-745.webp',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/1020978-745.webp',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/4818954-745.webp',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/6117961-745.webp',
        color: ['gold'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/4672100-745.webp',
        color: ['gold'],
        gender: ['Women'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/4846117-745.webp',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/5908949-745.webp',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/5908922-745.webp',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/3931692-745.webp',
        color: ['gold'],
        gender: ['Men'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/3931706-745.webp',
        color: ['gold'],
        gender: ['Men'],
      },
      {
        url: 'https://d34qiagx43sg99.cloudfront.net/9306668-745.webp',
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

export const getEarrings = () => {
  let earrings = []

  for (let i = 0; i < faker.random.number({ min: 30, max: 30 }); i++) {
    earrings.push(earring())
  }

  return earrings
}