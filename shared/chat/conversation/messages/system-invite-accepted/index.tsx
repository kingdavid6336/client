import * as C from '@/constants'
import type * as T from '@/constants/types'
import * as Kb from '@/common-adapters'
import UserNotice from '../user-notice'

type Props = {
  message: T.Chat.MessageSystemInviteAccepted
  onViewTeam: () => void
  role: T.Teams.MaybeTeamRoleType
  teamname: string
  you: string
}

const connectedUsernamesProps = {
  colorFollowing: true,
  inline: true,
  onUsernameClicked: 'profile',
  type: 'BodySmallBold',
  underline: true,
} as const

const InviteAddedToTeamNotice = (props: Props) => {
  if (props.you === props.message.invitee) {
    return <YouInviteAddedToTeamNotice {...props} />
  }
  const {inviter} = props.message
  const roleLabel = props.role === 'none' ? null : C.Teams.typeToLabel[props.role]
  // There's not a lot of space to explain the adder / inviter situation,
  // just pretend they were added by the inviter for now.
  return (
    <UserNotice>
      <Kb.Text type="BodySmall">
        was added by{' '}
        {props.you === inviter ? (
          'you'
        ) : (
          <Kb.ConnectedUsernames {...connectedUsernamesProps} usernames={inviter} />
        )}
        {roleLabel && ` as a "${roleLabel.toLowerCase()}"`}.{' '}
      </Kb.Text>
    </UserNotice>
  )
}

const YouInviteAddedToTeamNotice = (props: Props) => {
  return (
    <UserNotice>
      <Kb.Text type="BodySmall">You joined the team.</Kb.Text>
      <Kb.Text type="BodySmallPrimaryLink" onClick={props.onViewTeam}>
        View all members
      </Kb.Text>
    </UserNotice>
  )
}

export default InviteAddedToTeamNotice
