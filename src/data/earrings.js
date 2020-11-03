import faker from 'faker'

export const earring = () => {
  return {
    id: faker.random.number(),
    name: faker.random.arrayElement([
      'Pear Shape', 'Cross-over', 'Multi-shape', 'Kiss', 'Marquise and Round', 'Double Strand Knot', 'Emerald Cut', 'Cross', 'Spiral Pave', 'Classic Butterfly', 'Bow Pendant', 'Solar Pave',
    ]),
    selectedDelivery: 'standard',
    quantity: 1,
    cost: Math.ceil(faker.random.number({ min: 200, max: 2000 }) / 100) * 100,
    image: faker.random.arrayElement([
      {
        url: 'https://www.graff.com/wp-content/uploads/2020/03/RGE1575-Laurence-Graff-Signature-Hoop-Earrings-White-Gold-1000x1000.png',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2020/03/RGE1576-Laurence-Graff-Signature-Hoop-Earrings-Rose-Gold-1000x1000.png',
        color: ['gold'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/12/Graff-Threads-High-Jewellery-Earrings-RGE1532-GE33705-1-1000x1000.png',
        color: [ 'diamond', 'gold' ],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2017/10/Classic-Graff-Round-Diamond-Stud-Earrings-RST02-GE20480-1000x1000.png',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2017/10/Classic-Graff-Square-Emerald-Cut-Diamond-Stud-Earrings-EST02-GE26180-1000x1000.png',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2017/11/Classic-Graff-Multi-shape-diamond-Stud-Earrings-RGE579_GE20301-1000x1000.png',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2017/10/Classic-Graff-Heart-Shape-Diamond-Stud-Earrings-GE22158-HST01-1000x1000.png',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2017/10/Classic-Graff-Square-Emerald-Cut-Yellow-diamond-Stud-Earrings-YEST01-1000x1000.png',
        color: ['gold'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2017/11/Classic-Graff-Cushion-Cut-Yellow-diamond-Stud-Earrings-YCST02-1000x1000.png',
        color: ['gold'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2020/02/Classic-Graff-Double-Strand-Diamond-Earrings-RGE668_GE24109-1000x1000.png',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2017/10/Classic-Graff-Emerald-Cut-Diamond-Earrings-ETSW02-GE17990-1000x1000.png',
        color: ['diamond'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2017/10/Classic-Graff-Cushion-Cut-Yellow-Diamond-Earrings-GE25418-1000x1000.png',
        color: [ 'diamond', 'gold' ],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/09/Graff-Spiral-diamond-Hoop-Earrings-in-rose-gold-large-RGE1514-GE33014-1000x1000.png',
        color: ['gold'],
        gender: ['Women'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2018/09/RGE1239-Graff-Spiral-Pave-Diamond-Earrings-Rose-Gold-1000x1000.png',
        color: ['gold'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2018/09/RGE1238-Graff-Spiral-Pave-Diamond-Earrings-White-Gold-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/10/Graff-Spiral-diamond-Hoop-Earrings-in-white-gold-Small_GE32163-RGE1497-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/10/Graff-Spiral-Hoop-Earrings-in-rose-gold-diamond-small-RGE1516_GE33129-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/06/A-pair-of-Graff-Kiss-Pav%C3%A9-Diamond-Earrings_GE32428-RGE1519-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/06/A-pair-of-Graff-Kiss-Pav%C3%A9-Earrings_GE32427-RGE1518-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/11/A-pair-of-Graff-Diamond-Kiss-Earrings_RGE1461-GE31342-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/06/A-Graff-Diamond-Inspired-by-Twombly-Classic-Small-Earrings-GE30423_RGE1370-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2019/06/A-Pair-of-Graff-Diamond-Inspired-by-Twombly-Swirl-Earrings-RGE1434-GE30988-1000x1000.png',
        color: ['diamond'],
        gender: ['Men'],
      },
      {
        url: 'https://www.graff.com/wp-content/uploads/2018/06/A-Pair-of-Graff-Diamond-Inspired-by-Twombly-Classic-Earrings-RGE1292-GE27896-1000x1000.png',
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