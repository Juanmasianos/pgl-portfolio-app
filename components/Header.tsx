import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const header = (displayQr: React.FC) => {
  return (
    <View style={styles.container}>
      <Text style={styles.firstRow}>My Portfolio App</Text>
      <View style={styles.secondRow}>
        <Pressable onPress={() => displayQr(true)}>
          <Text style={[styles.infoButton]}>Mi info</Text>
        </Pressable>
        <Button onPress={() => displayQr(false)} title="Mi Repo" color="light-gray" accessibilityLabel='Un botón pal QR' />
      </View>
    </View>
  )
}

export default header

const styles = StyleSheet.create({
  container: {
    height: '15%',
    paddingTop: 50,
    width: '100%',
  },
  firstRow: {
    backgroundColor: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    fontSize: 30,
  },
  secondRow: {
    flexDirection: 'row',
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoButton: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
})