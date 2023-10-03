import { FC } from 'react'

import SettingsTemplate from './template'
import { routeParam } from '@/constants/routeParam'

const Settings: FC = (): JSX.Element => 
    <SettingsTemplate key={routeParam} >
        <div>These are settings</div>
    </SettingsTemplate>

export default Settings