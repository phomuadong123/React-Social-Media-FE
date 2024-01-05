import HeaderOnly from '~/layouts/HeaderOnly';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';
import Explore from '~/pages/Explore';
//public routes
const publicRoutes = [
    {path: '/',component: Home},
    {path: '/following',component: Following},
    {path: '/profile',component: Profile },
    {path: '/live',component: Live },
    {path: '/explore',component: Explore },
    {path: '/upload',component: Upload, layout:HeaderOnly },
]

const privateRoutes = [
    
]

export {publicRoutes,privateRoutes}