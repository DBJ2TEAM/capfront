import { FC } from 'react'
import {Navigation} from '../molecules'

export const Navbar: FC = () => (
    <Navigation 
        title='동의대학교'
        items={[
            {text:'Home', path:'/'},
            {text:'About us', path:'/'},
            {text:'Reserve', path:'/'},
            {text:'Contact', path:'/'},
        ]}
        className='flex justify-between items-center h-20'
    />
)