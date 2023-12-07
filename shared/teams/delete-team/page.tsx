import * as React from 'react'
import type * as C from '@/constants'

const DeleteTeam = React.lazy(async () => import('./container'))
type OwnProps = C.ViewPropsToPageProps<typeof DeleteTeam>

const Screen = (p: OwnProps) => (
  <React.Suspense>
    <DeleteTeam {...p.route.params} />
  </React.Suspense>
)

const Page = {getScreen: () => Screen}
export default Page
