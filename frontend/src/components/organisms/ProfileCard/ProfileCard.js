import React from 'react'
import { Avatar, Card } from 'react-native-paper'
import { styles } from './ProfileCard.styles'

const LeftContent = (props) => (
  <Avatar.Icon
    {...props}
    icon="account-circle"
    color={'#FFFFFF'}
    style={{ backgroundColor: '#1AA7EC' }}
  />
)

export const ProfileCard = ({ name, email }) => {
  return (
    <Card style={styles.profileCard}>
      <Card.Title title={name} subtitle={email} left={LeftContent} />
    </Card>
  )
}
