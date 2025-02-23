import { prisma, SALT_ROUNDS } from '@config';
import bcrypt from 'bcrypt';

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
  await prisma.user.deleteMany({});

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

  console.log('Database successfully truncated.');
}

async function main() {
  await truncate();

  console.log('Seeding started.');

  const user1 = await prisma.user.create({
    data: {
      username: 'John',
      password: await bcrypt.hash('password123', SALT_ROUNDS),
      phoneNumber: '0888888888'
    }
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'Alex',
      password: await bcrypt.hash('password123', SALT_ROUNDS),
      phoneNumber: '0999999999'
    }
  });

  const toyota = await prisma.make.create({ data: { name: 'toyota' } });
  const audi = await prisma.make.create({ data: { name: 'audi' } });
  const bmw = await prisma.make.create({ data: { name: 'bmw' } });
  const mercedes = await prisma.make.create({ data: { name: 'mercedes' } });
  const vw = await prisma.make.create({ data: { name: 'volkswagen' } });
  const ford = await prisma.make.create({ data: { name: 'ford' } });
  const honda = await prisma.make.create({ data: { name: 'honda' } });
  const nissan = await prisma.make.create({ data: { name: 'nissan' } });
  const kia = await prisma.make.create({ data: { name: 'kia' } });
  const hyundai = await prisma.make.create({ data: { name: 'hyundai' } });
  const tesla = await prisma.make.create({ data: { name: 'tesla' } });
  const peugeot = await prisma.make.create({ data: { name: 'peugeot' } });
  const renault = await prisma.make.create({ data: { name: 'renault' } });
  const chevrolet = await prisma.make.create({ data: { name: 'chevrolet' } });
  const mazda = await prisma.make.create({ data: { name: 'mazda' } });
  const subaru = await prisma.make.create({ data: { name: 'subaru' } });
  const jaguar = await prisma.make.create({ data: { name: 'jaguar' } });
  const porsche = await prisma.make.create({ data: { name: 'porsche' } });
  const lexus = await prisma.make.create({ data: { name: 'lexus' } });

  const hatchback = await prisma.body.create({ data: { type: 'hatchback' } });
  const sedan = await prisma.body.create({ data: { type: 'sedan' } });
  const suv = await prisma.body.create({ data: { type: 'suv' } });
  const coupe = await prisma.body.create({ data: { type: 'coupe' } });
  const convertible = await prisma.body.create({
    data: { type: 'convertible' }
  });
  const wagon = await prisma.body.create({ data: { type: 'wagon' } });
  const pickup = await prisma.body.create({ data: { type: 'pickup' } });
  const van = await prisma.body.create({ data: { type: 'van' } });
  const minivan = await prisma.body.create({ data: { type: 'mini Van' } });

  await prisma.model.createMany({
    data: [
      { name: 'corolla', makeId: toyota.id, bodyId: sedan.id },
      { name: 'camry', makeId: toyota.id, bodyId: sedan.id },
      { name: 'hilux', makeId: toyota.id, bodyId: pickup.id },
      { name: 'rav4', makeId: toyota.id, bodyId: suv.id },
      { name: 'land cruiser', makeId: toyota.id, bodyId: suv.id },
      { name: 'highlander', makeId: toyota.id, bodyId: suv.id },
      { name: 'yaris', makeId: toyota.id, bodyId: hatchback.id },
      { name: 'avalon', makeId: toyota.id, bodyId: sedan.id },
      { name: 'sienna', makeId: toyota.id, bodyId: minivan.id },
      { name: 'venza', makeId: toyota.id, bodyId: suv.id },

      { name: 'a3', makeId: audi.id, bodyId: hatchback.id },
      { name: 'a4', makeId: audi.id, bodyId: sedan.id },
      { name: 'a6', makeId: audi.id, bodyId: sedan.id },
      { name: 'a8', makeId: audi.id, bodyId: sedan.id },
      { name: 'q3', makeId: audi.id, bodyId: suv.id },
      { name: 'q5', makeId: audi.id, bodyId: suv.id },
      { name: 'q7', makeId: audi.id, bodyId: suv.id },
      { name: 'q8', makeId: audi.id, bodyId: suv.id },
      { name: 'rs7', makeId: audi.id, bodyId: sedan.id },
      { name: 'r8', makeId: audi.id, bodyId: coupe.id },

      { name: 'x3', makeId: bmw.id, bodyId: suv.id },
      { name: 'x5', makeId: bmw.id, bodyId: suv.id },
      { name: 'm3', makeId: bmw.id, bodyId: coupe.id },
      { name: 'm4', makeId: bmw.id, bodyId: coupe.id },
      { name: '3 series', makeId: bmw.id, bodyId: sedan.id },
      { name: '5 series', makeId: bmw.id, bodyId: sedan.id },
      { name: '7 series', makeId: bmw.id, bodyId: sedan.id },
      { name: 'x6', makeId: bmw.id, bodyId: suv.id },
      { name: 'x1', makeId: bmw.id, bodyId: suv.id },
      { name: 'z4', makeId: bmw.id, bodyId: convertible.id },

      { name: 'a-class', makeId: mercedes.id, bodyId: hatchback.id },
      { name: 'c-class', makeId: mercedes.id, bodyId: sedan.id },
      { name: 'e-class', makeId: mercedes.id, bodyId: sedan.id },
      { name: 's-class', makeId: mercedes.id, bodyId: sedan.id },
      { name: 'gla', makeId: mercedes.id, bodyId: suv.id },
      { name: 'glc', makeId: mercedes.id, bodyId: suv.id },
      { name: 'gle', makeId: mercedes.id, bodyId: suv.id },
      { name: 'g-class', makeId: mercedes.id, bodyId: suv.id },
      { name: 'amg gt', makeId: mercedes.id, bodyId: coupe.id },
      { name: 'cla', makeId: mercedes.id, bodyId: sedan.id },

      { name: 'golf', makeId: vw.id, bodyId: hatchback.id },
      { name: 'passat', makeId: vw.id, bodyId: sedan.id },
      { name: 'jetta', makeId: vw.id, bodyId: sedan.id },
      { name: 'tiguan', makeId: vw.id, bodyId: suv.id },
      { name: 'touareg', makeId: vw.id, bodyId: suv.id },
      { name: 'arteon', makeId: vw.id, bodyId: sedan.id },
      { name: 'polo', makeId: vw.id, bodyId: hatchback.id },
      { name: 'id.4', makeId: vw.id, bodyId: suv.id },
      { name: 'id.3', makeId: vw.id, bodyId: hatchback.id },
      { name: 'transporter', makeId: vw.id, bodyId: van.id },
      { name: 'fiesta', makeId: ford.id, bodyId: hatchback.id },
      { name: 'focus', makeId: ford.id, bodyId: sedan.id },
      { name: 'mustang', makeId: ford.id, bodyId: coupe.id },
      { name: 'explorer', makeId: ford.id, bodyId: suv.id },
      { name: 'edge', makeId: ford.id, bodyId: suv.id },
      { name: 'f-150', makeId: ford.id, bodyId: pickup.id },
      { name: 'escape', makeId: ford.id, bodyId: suv.id },
      { name: 'ranger', makeId: ford.id, bodyId: pickup.id },
      { name: 'bronco', makeId: ford.id, bodyId: suv.id },
      { name: 'expedition', makeId: ford.id, bodyId: suv.id },

      { name: 'civic', makeId: honda.id, bodyId: sedan.id },
      { name: 'accord', makeId: honda.id, bodyId: sedan.id },
      { name: 'cr-v', makeId: honda.id, bodyId: suv.id },
      { name: 'pilot', makeId: honda.id, bodyId: suv.id },
      { name: 'fit', makeId: honda.id, bodyId: hatchback.id },
      { name: 'hr-v', makeId: honda.id, bodyId: suv.id },
      { name: 'insight', makeId: honda.id, bodyId: sedan.id },
      { name: 'odyssey', makeId: honda.id, bodyId: minivan.id },
      { name: 'passport', makeId: honda.id, bodyId: suv.id },
      { name: 'ridgeline', makeId: honda.id, bodyId: pickup.id },

      { name: 'altima', makeId: nissan.id, bodyId: sedan.id },
      { name: 'sentra', makeId: nissan.id, bodyId: sedan.id },
      { name: 'maxima', makeId: nissan.id, bodyId: sedan.id },
      { name: '370z', makeId: nissan.id, bodyId: coupe.id },
      { name: 'rogue', makeId: nissan.id, bodyId: suv.id },
      { name: 'murano', makeId: nissan.id, bodyId: suv.id },
      { name: 'pathfinder', makeId: nissan.id, bodyId: suv.id },
      { name: 'frontier', makeId: nissan.id, bodyId: pickup.id },
      { name: 'juke', makeId: nissan.id, bodyId: hatchback.id },
      { name: 'leaf', makeId: nissan.id, bodyId: hatchback.id },

      { name: 'sportage', makeId: kia.id, bodyId: suv.id },
      { name: 'sorento', makeId: kia.id, bodyId: suv.id },
      { name: 'stinger', makeId: kia.id, bodyId: sedan.id },
      { name: 'optima', makeId: kia.id, bodyId: sedan.id },
      { name: 'k900', makeId: kia.id, bodyId: sedan.id },
      { name: 'forte', makeId: kia.id, bodyId: sedan.id },
      { name: 'picanto', makeId: kia.id, bodyId: suv.id },
      { name: 'niro', makeId: kia.id, bodyId: hatchback.id },
      { name: 'cadenza', makeId: kia.id, bodyId: sedan.id },
      { name: 'seltos', makeId: kia.id, bodyId: suv.id },

      { name: 'elantra', makeId: hyundai.id, bodyId: sedan.id },
      { name: 'sonata', makeId: hyundai.id, bodyId: sedan.id },
      { name: 'tucson', makeId: hyundai.id, bodyId: suv.id },
      { name: 'santa fe', makeId: hyundai.id, bodyId: suv.id },
      { name: 'kona', makeId: hyundai.id, bodyId: suv.id },
      { name: 'palisade', makeId: hyundai.id, bodyId: suv.id },
      { name: 'ioniq', makeId: hyundai.id, bodyId: hatchback.id },
      { name: 'veloster', makeId: hyundai.id, bodyId: hatchback.id },
      { name: 'kona electric', makeId: hyundai.id, bodyId: suv.id },
      { name: 'nexo', makeId: hyundai.id, bodyId: suv.id },

      { name: 'model s', makeId: tesla.id, bodyId: sedan.id },
      { name: 'model 3', makeId: tesla.id, bodyId: sedan.id },
      { name: 'model x', makeId: tesla.id, bodyId: suv.id },
      { name: 'model y', makeId: tesla.id, bodyId: suv.id },
      { name: 'roadster', makeId: tesla.id, bodyId: coupe.id },
      { name: 'cybertruck', makeId: tesla.id, bodyId: pickup.id },
      { name: 'semi', makeId: tesla.id, bodyId: pickup.id },
      { name: 'plaid', makeId: tesla.id, bodyId: sedan.id },
      { name: 'long range', makeId: tesla.id, bodyId: sedan.id },
      { name: 'standard range', makeId: tesla.id, bodyId: sedan.id },

      { name: '308', makeId: peugeot.id, bodyId: hatchback.id },
      { name: '508', makeId: peugeot.id, bodyId: sedan.id },
      { name: '3008', makeId: peugeot.id, bodyId: suv.id },
      { name: '2008', makeId: peugeot.id, bodyId: suv.id },
      { name: '5008', makeId: peugeot.id, bodyId: suv.id },
      { name: 'traveller', makeId: peugeot.id, bodyId: minivan.id },
      { name: 'partner', makeId: peugeot.id, bodyId: van.id },
      { name: 'rifter', makeId: peugeot.id, bodyId: van.id },
      { name: 'expert', makeId: peugeot.id, bodyId: van.id },
      { name: 'bipper', makeId: peugeot.id, bodyId: van.id },

      { name: 'clio', makeId: renault.id, bodyId: hatchback.id },
      { name: 'megane', makeId: renault.id, bodyId: sedan.id },
      { name: 'talisman', makeId: renault.id, bodyId: sedan.id },
      { name: 'captur', makeId: renault.id, bodyId: suv.id },
      { name: 'koleos', makeId: renault.id, bodyId: suv.id },
      { name: 'kadjar', makeId: renault.id, bodyId: suv.id },
      { name: 'espace', makeId: renault.id, bodyId: minivan.id },
      { name: 'scenic', makeId: renault.id, bodyId: minivan.id },
      { name: 'lodgy', makeId: renault.id, bodyId: minivan.id },
      { name: 'twizy', makeId: renault.id, bodyId: hatchback.id },

      { name: 'malibu', makeId: chevrolet.id, bodyId: sedan.id },
      { name: 'cruze', makeId: chevrolet.id, bodyId: sedan.id },
      { name: 'impala', makeId: chevrolet.id, bodyId: sedan.id },
      { name: 'equinox', makeId: chevrolet.id, bodyId: suv.id },
      { name: 'traverse', makeId: chevrolet.id, bodyId: suv.id },
      { name: 'tahoe', makeId: chevrolet.id, bodyId: suv.id },
      { name: 'silverado', makeId: chevrolet.id, bodyId: pickup.id },
      { name: 'colorado', makeId: chevrolet.id, bodyId: pickup.id },
      { name: 'camaro', makeId: chevrolet.id, bodyId: coupe.id },
      { name: 'corvette', makeId: chevrolet.id, bodyId: coupe.id },

      { name: 'mazda3', makeId: mazda.id, bodyId: sedan.id },
      { name: 'mazda6', makeId: mazda.id, bodyId: sedan.id },
      { name: 'cx-3', makeId: mazda.id, bodyId: suv.id },
      { name: 'cx-5', makeId: mazda.id, bodyId: suv.id },
      { name: 'cx-9', makeId: mazda.id, bodyId: suv.id },
      { name: 'mx-5 miata', makeId: mazda.id, bodyId: coupe.id },
      { name: 'mazda2', makeId: mazda.id, bodyId: hatchback.id },
      { name: 'rx-8', makeId: mazda.id, bodyId: coupe.id },
      { name: 'mx-30', makeId: mazda.id, bodyId: suv.id },
      { name: 'tribute', makeId: mazda.id, bodyId: suv.id },

      { name: 'impreza', makeId: subaru.id, bodyId: sedan.id },
      { name: 'outback', makeId: subaru.id, bodyId: suv.id },
      { name: 'forester', makeId: subaru.id, bodyId: suv.id },
      { name: 'crosstrek', makeId: subaru.id, bodyId: suv.id },
      { name: 'ascent', makeId: subaru.id, bodyId: suv.id },
      { name: 'legacy', makeId: subaru.id, bodyId: sedan.id },
      { name: 'brz', makeId: subaru.id, bodyId: coupe.id },
      { name: 'wrx', makeId: subaru.id, bodyId: sedan.id },
      { name: 'xv', makeId: subaru.id, bodyId: suv.id },
      { name: 'baja', makeId: subaru.id, bodyId: pickup.id },

      { name: 'xe', makeId: jaguar.id, bodyId: sedan.id },
      { name: 'xf', makeId: jaguar.id, bodyId: sedan.id },
      { name: 'xj', makeId: jaguar.id, bodyId: sedan.id },
      { name: 'f-type', makeId: jaguar.id, bodyId: coupe.id },
      { name: 'e-pace', makeId: jaguar.id, bodyId: suv.id },
      { name: 'i-pace', makeId: jaguar.id, bodyId: suv.id },
      { name: 'f-pace', makeId: jaguar.id, bodyId: suv.id },
      { name: 'xk', makeId: jaguar.id, bodyId: coupe.id },
      { name: 'xkr', makeId: jaguar.id, bodyId: coupe.id },
      { name: 'f-pace svr', makeId: jaguar.id, bodyId: suv.id },

      { name: '911', makeId: porsche.id, bodyId: coupe.id },
      { name: 'cayenne', makeId: porsche.id, bodyId: suv.id },
      { name: 'macan', makeId: porsche.id, bodyId: suv.id },
      { name: 'panamera', makeId: porsche.id, bodyId: sedan.id },
      { name: 'taycan', makeId: porsche.id, bodyId: sedan.id },
      { name: 'boxster', makeId: porsche.id, bodyId: convertible.id },
      { name: 'cayman', makeId: porsche.id, bodyId: coupe.id },
      { name: '911 turbo', makeId: porsche.id, bodyId: coupe.id },
      { name: '718', makeId: porsche.id, bodyId: coupe.id },
      { name: 'porsche 918 spyder', makeId: porsche.id, bodyId: coupe.id },

      { name: 'rx', makeId: lexus.id, bodyId: suv.id },
      { name: 'nx', makeId: lexus.id, bodyId: suv.id },
      { name: 'lx', makeId: lexus.id, bodyId: suv.id },
      { name: 'is', makeId: lexus.id, bodyId: sedan.id },
      { name: 'es', makeId: lexus.id, bodyId: sedan.id },
      { name: 'gs', makeId: lexus.id, bodyId: sedan.id },
      { name: 'ls', makeId: lexus.id, bodyId: sedan.id },
      { name: 'rc', makeId: lexus.id, bodyId: coupe.id },
      { name: 'lc', makeId: lexus.id, bodyId: coupe.id },
      { name: 'ux', makeId: lexus.id, bodyId: suv.id }
    ]
  });

  await prisma.feature.createMany({
    data: [
      { name: 'sunroof' },
      { name: 'panoramic sunroof' },
      { name: 'bluetooth' },
      { name: 'leather seats' },
      { name: 'gps navigation' },
      { name: 'heated seats' },
      { name: 'ventilated seats' },
      { name: 'cooled seats' },
      { name: 'massage seats' },
      { name: 'power-adjustable seats' },
      { name: 'memory seats' },
      { name: 'sport seats' },
      { name: 'bucket seats' },
      { name: 'heated steering wheel' },
      { name: 'backup camera' },
      { name: '360-degree camera' },
      { name: 'parking sensors' },
      { name: 'parking assist' },
      { name: 'adaptive cruise control' },
      { name: 'lane departure warning' },
      { name: 'lane keep assist' },
      { name: 'blind spot monitoring' },
      { name: 'rear cross-traffic alert' },
      { name: 'automatic emergency braking' },
      { name: 'forward collision warning' },
      { name: 'pedestrian detection' },
      { name: 'night vision' },
      { name: 'apple carplay' },
      { name: 'android auto' },
      { name: 'wireless charging' },
      { name: 'usb-c ports' },
      { name: 'head-up display' },
      { name: 'digital instrument cluster' },
      { name: 'rain-sensing wipers' },
      { name: 'power liftgate' },
      { name: 'hands-free liftgate' },
      { name: 'remote start' },
      { name: 'keyless entry' },
      { name: 'push-button start' },
      { name: 'proximity key' },
      { name: 'power folding mirrors' },
      { name: 'self-dimming mirrors' },
      { name: 'tow package' },
      { name: 'roof rails' },
      { name: 'all-wheel drive' },
      { name: 'hill start assist' },
      { name: 'traction control' },
      { name: 'electronic stability control' },
      { name: 'air suspension' },
      { name: 'adaptive suspension' },
      { name: 'sport mode' },
      { name: 'eco mode' },
      { name: 'off-road mode' },
      { name: 'drive mode selector' },
      { name: 'led headlights' },
      { name: 'adaptive headlights' },
      { name: 'fog lights' },
      { name: 'ambient lighting' },
      { name: 'rear sunshade' },
      { name: 'acoustic glass' },
      { name: 'run-flat tires' },
      { name: 'spare tire' },
      { name: 'digital rearview mirror' },
      { name: 'rear entertainment system' },
      { name: 'premium sound system' },
      { name: 'wifi hotspot' },
      { name: 'voice control' }
    ]
  });

  await prisma.drivetrain.createMany({
    data: [{ type: 'awd' }, { type: 'rwd' }, { type: 'fwd' }, { type: '4wd' }]
  });

  await prisma.color.createMany({
    data: [
      { name: 'black' },
      { name: 'white' },
      { name: 'grey' },
      { name: 'blue' },
      { name: 'red' },
      { name: 'yellow' },
      { name: 'green' },
      { name: 'orange' },
      { name: 'purple' },
      { name: 'brown' },
      { name: 'pink' },
      { name: 'cyan' },
      { name: 'magenta' },
      { name: 'lime' },
      { name: 'indigo' },
      { name: 'violet' },
      { name: 'teal' },
      { name: 'beige' },
      { name: 'maroon' },
      { name: 'navy' }
    ]
  });

  await prisma.transmission.createMany({
    data: [{ type: 'automatic' }, { type: 'manual' }]
  });

  await prisma.fuel.createMany({
    data: [
      { type: 'petrol' },
      { type: 'diesel' },
      { type: 'electric' },
      { type: 'hybrid' }
    ]
  });

  await prisma.car.create({
    data: {
      make: { connect: { name: 'volkswagen' } },
      model: { connect: { name: 'golf' } },
      color: { connect: { name: 'red' } },
      transmission: { connect: { type: 'automatic' } },
      fuel: { connect: { type: 'petrol' } },
      drivetrain: { connect: { type: 'awd' } },
      year: 2022,
      price: 25000,
      torque: 100,
      mileage: 150000,
      horsepower: 150,
      seats: 5,
      doors: 5,
      description: 'A nice car',
      features: {
        connect: [{ id: 4 }, { id: 5 }]
      },
      images: {
        create: [{ path: 'vw.jpg' }]
      },
      user: { connect: { id: user1.id } }
    }
  });

  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
