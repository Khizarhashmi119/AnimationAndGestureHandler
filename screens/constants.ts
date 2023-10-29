import { RouteProp } from '@react-navigation/native';

import FlingGesture from './FlingGesture';
import LongPressGesture from './LongPressGesture';
import PanGesture from './PanGesture';
import PinchGesture from './PinchGesture';
import Playground from './Playground';
import RotationGesture from './RotationGesture';
import TapGesture from './TapGesture';

import { TAppParamsList } from '../types/AppParamsList';

export type TScreen = {
  component:
    | React.ComponentType<{
        route: RouteProp<TAppParamsList, keyof TAppParamsList>;
        navigation: any;
      }>
    | React.ComponentType<{}>;
  name: keyof TAppParamsList;
  text: string;
};

export const SCREENS: TScreen[] = [
  {
    component: Playground,
    name: 'PLAYGROUND',
    text: 'Playground',
  },
  {
    component: PanGesture,
    name: 'PAN_GESTURE',
    text: 'Pan gesture',
  },
  {
    component: FlingGesture,
    name: 'FLING_GESTURE',
    text: 'Fling gesture',
  },
  {
    component: PinchGesture,
    name: 'PINCH_GESTURE',
    text: 'Pinch gesture',
  },
  {
    component: RotationGesture,
    name: 'ROTATION_GESTURE',
    text: 'Rotation gesture',
  },
  {
    component: TapGesture,
    name: 'TAP_GESTURE',
    text: 'Tap gesture',
  },
  {
    component: LongPressGesture,
    name: 'LONG_PRESS_GESTURE',
    text: 'Long press gesture',
  },
];
