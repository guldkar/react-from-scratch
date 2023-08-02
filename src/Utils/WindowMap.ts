import React from 'react';

import Info from "../components/windows/Info"
import { WindowTypesEnum } from "../types/Enums"
import MjolnerExperience from '../components/windows/MjolnerExperience';

const WindowMap = new Map<WindowTypesEnum, JSX.Element>([
  [WindowTypesEnum.Profile, Info()],
  [WindowTypesEnum.MjolnerExperience, MjolnerExperience()]
])

export default WindowMap;