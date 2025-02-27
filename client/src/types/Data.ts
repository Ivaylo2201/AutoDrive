import { Body } from './Body';
import { Color } from './Color';
import { Drivetrain } from './Drivetrain';
import { Feature } from './Feature';
import { Fuel } from './Fuel';
import { Make } from './Make';
import { Transmission } from './Transmission';

export type Data = {
  makes: Make[];
  colors: Color[];
  transmissions: Transmission[];
  fuels: Fuel[];
  drivetrains: Drivetrain[];
  features: Feature[];
  bodies: Body[];
};
