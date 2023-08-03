import React from 'react';

import Info from "../components/windows/Info"
import { WindowTypesEnum } from "../types/Enums"
import MjolnerExperience from '../components/windows/MjolnerExperience';
import TechnicalCompetencies from 'components/windows/TechnicalCompetencies';

const WindowMap = new Map<WindowTypesEnum, JSX.Element>([
  [WindowTypesEnum.Profile, Info()],
  [WindowTypesEnum.MjolnerExperience, MjolnerExperience()],
  [WindowTypesEnum.TechnicalCompetencies, TechnicalCompetencies()]
])

export default WindowMap;