import React, { Component } from 'react'
import {
  View,
  Text,
  Alert
} from 'react-native'
import { CalendarList, Agenda } from 'react-native-calendars'
import { width, height } from 'react-native-dimension'

class Calendar extends Component {

  // when day on calendar is pressed
  onDayPress = (day) => {
    alert('Add/View Event feature coming soon!')
  }

  render() {
    return (
      <View style={styles.main}>
      <CalendarList
        calendarWidth={width(100)}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        // on day press
        onDayPress={(day) => this.onDayPress(day)}
      />
      </View>
    );
  }
}

const styles = {
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default Calendar
