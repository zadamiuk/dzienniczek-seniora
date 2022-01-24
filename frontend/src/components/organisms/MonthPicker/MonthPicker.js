import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { List } from 'react-native-paper';
import { styles } from './MonthPicker.styles';

const MONTHS = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
                'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']

export const MonthPicker = (expanded, setMonthToDisplay, setExpanded) => {
    const [label, setLabel] = useState("Wybierz miesiąc")
    return (
        <View style={styles.root}>
        <List.Accordion
          title={label}
          expanded={expanded}
          onPress={() => setExpanded(!expanded)}
          style={styles.button} 
          titleStyle={styles.label}
        >
          <ScrollView style={styles.scroll}>
            {MONTHS.map((month) => {
                return <List.Item 
                        style={styles.item} 
                        titleStyle={styles.itemTitle} 
                        title={month} 
                        onPress={() => {
                            setMonthToDisplay(MONTHS.indexOf(month)+1)
                            setLabel(month)
                        }}
                    />
            })}
          </ScrollView>
        </List.Accordion>
        </View>
    );
}