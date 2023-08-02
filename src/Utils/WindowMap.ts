import React from 'react';

import Info from "../components/Info"
import { WindowTypesEnum } from "../types/Enums"

const WindowMap = new Map<WindowTypesEnum, JSX.Element>([
  [WindowTypesEnum.Profile, Info()],

])

export default WindowMap;