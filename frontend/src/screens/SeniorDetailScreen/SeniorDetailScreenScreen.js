import React, { useState } from 'react'
import { View } from 'react-native'
import { Avatar, Card, IconButton } from 'react-native-paper'
import { styles } from './SeniorDetailScreenScreen.styles'
import { ProfileCard } from '../../../src/components/organisms/ProfileCard/ProfileCard'
import { capitalizeFirstLetter } from '../../../config/helpers'

const LeftContent = (props) => (
  <Avatar.Icon
    {...props}
    icon="account-circle"
    color={'#FFFFFF'}
    style={{ backgroundColor: '#1AA7EC' }}
  />
)

const RightContent = (props) => (
  <IconButton
    {...props}
    icon="arrow-right-thick"
    color={'#1AA7EC'}
    size={32}
    style={{ backgroundColor: 'transparent' }}
  />
)

export const SeniorDetailScreen = ({ route, navigation }) => {
  const { id, name, email } = route.params
  let seniorName = JSON.stringify(name).replace(/["]+/g, '')
  const seniorEmail = JSON.stringify(email).replace(/["]+/g, '')
  const seniorId = JSON.stringify(id).replace(/["]+/g, '')

  seniorName = capitalizeFirstLetter(seniorName)

  const params = {
    id: seniorId,
    name: seniorName,
    email: seniorEmail,
  }

  return (
    <View style={styles.view}>
      <ProfileCard name={seniorName} email={seniorEmail} />
      <Card
        style={styles.card}
        onPress={() => navigation.navigate('SeniorBloodPressureList', params)}
      >
        <Card.Title title="Ciśnienie krwi" right={RightContent} />
      </Card>
      <Card
        style={styles.card}
        onPress={() => navigation.navigate('SeniorSugarList', params)}
      >
        <Card.Title title="Poziom cukru" right={RightContent} />
      </Card>
      <Card
        style={styles.card}
        onPress={() => navigation.navigate('SeniorWeightList', params)}
      >
        <Card.Title title="Waga" right={RightContent} />
      </Card>
    </View>
  )
}
