import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const sharedRoutes: Routes = [
    {
        key: 'homePage',
        path: `/hello`,
        component: lazy(() => import('@/views')),
        authority: []
    },
    // In future, add more shared routes here
]

export default sharedRoutes