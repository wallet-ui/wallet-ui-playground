import { Navigate, useRoutes } from 'react-router'
import { lazy } from 'react'

const AccountDetailFeature = lazy(() => import('@/features/account/account-feature-detail.tsx'))
const AccountIndexFeature = lazy(() => import('@/features/account/account-feature-index.tsx'))
const PlaygroundFeature = lazy(() => import('@/features/playground/playground-feature.tsx'))

export function AppRoutes() {
  return useRoutes([
    { index: true, element: <Navigate to="/playground" replace /> },
    {
      path: 'account',
      children: [
        { index: true, element: <AccountIndexFeature /> },
        { path: ':address', element: <AccountDetailFeature /> },
      ],
    },
    { path: 'playground', element: <PlaygroundFeature /> },
  ])
}
