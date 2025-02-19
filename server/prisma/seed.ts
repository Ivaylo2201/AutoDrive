import { prisma } from '@config';

async function truncate() {
  await prisma.image.deleteMany({});
  await prisma.feature.deleteMany({});
  await prisma.car.deleteMany({});
  await prisma.model.deleteMany({});
  await prisma.make.deleteMany({});
  await prisma.body.deleteMany({});
  await prisma.color.deleteMany({});
  await prisma.transmission.deleteMany({});
  await prisma.fuel.deleteMany({});
  await prisma.drivetrain.deleteMany({});
  await prisma.address.deleteMany({});
  await prisma.city.deleteMany({});

  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Image'`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Feature'`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Car'`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Make'`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Model'`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Body'`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Color'`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Transmission'`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Fuel'`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Drivetrain'`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Address'`;
  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='City'`;

  console.log('Database successfully truncated.');
}

async function main() {
  await truncate();

  console.log('Seeding started.');

  await prisma.city.createMany({
    data: [{ name: 'New York' }, { name: 'Los Angeles' }]
  });

  await prisma.address.createMany({
    data: [
      { street: '123 5th Avenue', cityId: 1 },
      { street: '456 Sunset Blvd', cityId: 2 }
    ]
  });

  const user1 = await prisma.user.create({
    data: {
      username: 'John',
      password: 'password123',
      phoneNumber: '0888888888',
      addressId: 1
    }
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'Alex',
      password: 'password456',
      phoneNumber: '0999999999',
      addressId: 2
    }
  });

  const audi = await prisma.make.create({
    data: { name: 'Audi' }
  });
  const bmw = await prisma.make.create({
    data: { name: 'BMW' }
  });
  const vw = await prisma.make.create({
    data: { name: 'VW' }
  });
  const mercedes = await prisma.make.create({
    data: { name: 'Mercedes' }
  });
  const peugeot = await prisma.make.create({
    data: { name: 'Peugeot' }
  });
  const toyota = await prisma.make.create({
    data: { name: 'Toyota' }
  });

  await prisma.model.createMany({
    data: [
      { name: 'A3', makeId: audi.id },
      { name: 'A4', makeId: audi.id },
      { name: 'X5', makeId: bmw.id },
      { name: 'M3', makeId: bmw.id },
      { name: 'Golf', makeId: vw.id },
      { name: 'Passat', makeId: vw.id },
      { name: 'C-Class', makeId: mercedes.id },
      { name: 'E-Class', makeId: mercedes.id },
      { name: '308', makeId: peugeot.id },
      { name: '508', makeId: peugeot.id },
      { name: 'Corolla', makeId: toyota.id },
      { name: 'Camry', makeId: toyota.id }
    ]
  });

  await prisma.feature.createMany({
    data: [
      { name: 'Sunroof' },
      { name: 'Bluetooth' },
      { name: 'Leather Seats' },
      { name: 'GPS Navigation' },
      { name: 'Heated Seats' },
      { name: 'Backup Camera' },
      { name: 'Parking Sensors' },
      { name: 'Remote Start' },
      { name: 'Blind Spot Monitoring' },
      { name: 'Apple CarPlay' }
    ]
  });

  await prisma.drivetrain.createMany({
    data: [{ type: 'AWD' }, { type: 'RWD' }, { type: 'FWD' }, { type: '4WD' }]
  });

  await prisma.body.createMany({
    data: [
      { type: 'SUV' },
      { type: 'Hatchback' },
      { type: 'Sedan' },
      { type: 'Coupe' }
    ]
  });

  await prisma.color.createMany({
    data: [
      { name: 'Black' },
      { name: 'White' },
      { name: 'Gray' },
      { name: 'Blue' },
      { name: 'Red' },
      { name: 'Yellow' }
    ]
  });

  await prisma.transmission.createMany({
    data: [{ type: 'Automatic' }, { type: 'Manual' }]
  });

  await prisma.fuel.createMany({
    data: [
      { type: 'Petrol' },
      { type: 'Diesel' },
      { type: 'Electric' },
      { type: 'Hybrid' }
    ]
  });

  const cars = [
    {
      make: 'VW',
      model: 'Golf',
      body: 'Hatchback',
      color: 'Red',
      transmission: 'Automatic',
      torque: 100,
      fuel: 'Petrol',
      drivetrain: 'AWD',
      year: 2022,
      price: 25000,
      ownerId: user1.id,
      features: ['Bluetooth', 'Leather Seats', 'Heated Seats'],
      images: [
        'https://carsales.pxcrush.net/carsales/car/dealer/dtk0pnihjyu9acdkjkxhk0r7t.jpg?pxc_method=fitfill&pxc_bgtype=self&height=725&width=1087'
      ]
    },
    {
      make: 'BMW',
      model: 'X5',
      body: 'SUV',
      color: 'Black',
      transmission: 'Automatic',
      torque: 150,
      fuel: 'Diesel',
      drivetrain: 'AWD',
      year: 2021,
      price: 35000,
      ownerId: user1.id,
      features: ['GPS Navigation', 'Backup Camera', 'Apple CarPlay'],
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43j8FrshV5EhfCtY0n95zbxcpqLQMo-fpCw&s'
      ]
    },
    {
      make: 'Audi',
      model: 'A3',
      body: 'Hatchback',
      color: 'White',
      transmission: 'Manual',
      torque: 125,
      fuel: 'Petrol',
      drivetrain: 'FWD',
      year: 2020,
      price: 22000,
      ownerId: user2.id,
      features: ['Sunroof', 'Leather Seats', 'Bluetooth'],
      images: [
        'https://images.ctfassets.net/c9t6u0qhbv9e/1bB4dwiBQBE5nD7FLwpL70/7e58ae77c3237c15ea37f8a9d81796de/Audi_A3_Sportback_2012_to_2020_front.jpg'
      ]
    },
    {
      make: 'Peugeot',
      model: '308',
      body: 'Hatchback',
      color: 'Blue',
      transmission: 'Automatic',
      torque: 120,
      fuel: 'Electric',
      drivetrain: 'RWD',
      year: 2023,
      price: 27000,
      ownerId: user2.id,
      features: ['Blind Spot Monitoring', 'Leather Seats', 'Parking Sensors'],
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BNy0sPgdfpOZK3Bohzses2eU9LX7QBiUkg&s'
      ]
    },
    {
      make: 'Mercedes',
      model: 'C-Class',
      body: 'Sedan',
      color: 'Gray',
      transmission: 'Automatic',
      torque: 115,
      fuel: 'Hybrid',
      drivetrain: 'AWD',
      year: 2022,
      price: 40000,
      ownerId: user1.id,
      features: ['Sunroof', 'Backup Camera', 'Bluetooth'],
      images: [
        'https://www.cnet.com/a/img/resize/290c6e1129ba5372a0a96fc8d736069e745042ed/hub/2018/06/18/7b95ee02-e5b1-48cb-a48f-a360eb2e56ea/ogi1-011-2019-mercedes-benz-c300-first-drive.jpg?auto=webp&fit=crop&height=675&width=1200'
      ]
    },
    {
      make: 'Toyota',
      model: 'Corolla',
      body: 'Sedan',
      color: 'Red',
      transmission: 'Manual',
      torque: 100,
      fuel: 'Petrol',
      drivetrain: 'FWD',
      year: 2019,
      price: 15000,
      ownerId: user1.id,
      features: ['Remote Start', 'Leather Seats', 'GPS Navigation'],
      images: [
        'https://www.carpro.com/hubfs/2023-toyota-gr-corolla-supersonic-red-1-carpro-jpg-1404x1112.jpg'
      ]
    },
    {
      make: 'BMW',
      model: 'M3',
      body: 'Coupe',
      color: 'Yellow',
      transmission: 'Manual',
      torque: 220,
      fuel: 'Petrol',
      drivetrain: 'AWD',
      year: 2022,
      price: 55000,
      ownerId: user2.id,
      features: ['Apple CarPlay', 'Heated Seats', 'Parking Sensors'],
      images: [
        'https://bringatrailer.com/wp-content/uploads/2020/10/2018_bmw_m3_competition_6-spd_1604319989a973afb5b829446DSC09781-scaled.jpg'
      ]
    },
    {
      make: 'VW',
      model: 'Passat',
      body: 'Sedan',
      color: 'White',
      transmission: 'Automatic',
      torque: 150,
      fuel: 'Diesel',
      drivetrain: 'FWD',
      year: 2021,
      price: 30000,
      ownerId: user2.id,
      features: ['Sunroof', 'Bluetooth', 'Backup Camera'],
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/7/74/2021_Volkswagen_Passat_Highline_in_Pure_White%2C_Front_Right%2C_04-24-2022.jpg'
      ]
    },
    {
      make: 'Mercedes',
      model: 'E-Class',
      body: 'Sedan',
      color: 'Black',
      transmission: 'Automatic',
      torque: 145,
      fuel: 'Hybrid',
      drivetrain: '4WD',
      year: 2023,
      price: 45000,
      ownerId: user1.id,
      features: ['Remote Start', 'Blind Spot Monitoring', 'Leather Seats'],
      images: [
        'https://bluesky.cdn.imgeng.in/cogstock-images/7283f1fc-e5b9-476b-adad-81824bc86900.jpg?imgeng=/w_960/'
      ]
    },
    {
      make: 'Audi',
      model: 'A4',
      body: 'Sedan',
      color: 'Gray',
      transmission: 'Automatic',
      torque: 155,
      fuel: 'Petrol',
      drivetrain: 'AWD',
      year: 2020,
      price: 28000,
      ownerId: user2.id,
      features: ['GPS Navigation', 'Heated Seats', 'Bluetooth'],
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8hdPtqVf286rksA1g68QF7hmdgyD-l_YFg&s'
      ]
    }
  ];

  for (const car of cars) {
    await prisma.car.create({
      data: {
        make: { connect: { name: car.make } },
        model: { connect: { name: car.model } },
        body: { connect: { type: car.body } },
        color: { connect: { name: car.color } },
        transmission: { connect: { type: car.transmission } },
        fuel: { connect: { type: car.fuel } },
        drivetrain: { connect: { type: car.drivetrain } },
        year: car.year,
        price: car.price,
        torque: car.torque,
        mileage: 10000,
        horsepower: 200,
        seats: 4,
        doors: 4,
        description: `A ${car.make} ${car.model}`,
        owner: { connect: { id: car.ownerId } },
        features: {
          connect: car.features.map((feature) => ({ name: feature }))
        },
        images: {
          create: car.images.map((image) => ({ path: image }))
        }
      }
    });
  }

  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
