import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS, TYPOGRAPHY, FONT_WEIGHT } from '../constants';

export default function HomeScreen({ navigation }: any) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  const dates = [null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, null, null, null];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.greeting}>Вітаємо, Анна! 👩</Text>

        <Card style={styles.cycleCard}>
          <Text style={styles.cycleDayLabel}>День циклу</Text>
          <Text style={styles.cycleDayNumber}>14</Text>
          <Text style={styles.cycleDayInfo}>Висока ймовірність овуляції</Text>
        </Card>

        {/* Календар */}
        <Card>
          <Text style={styles.monthTitle}>Квітень 2026</Text>
          <View style={styles.weekDaysRow}>
            {weekDays.map(day => <Text key={day} style={styles.weekDayText}>{day}</Text>)}
          </View>
          <View style={styles.datesGrid}>
            {dates.map((date, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.dateBox, date !== null && selectedDate === date && styles.selectedDateBox, date === null && styles.emptyDateBox]}
                onPress={() => date !== null && setSelectedDate(date)}
                disabled={date === null}
              >
                {date !== null && <Text style={[styles.dateText, selectedDate === date && styles.selectedDateText]}>{date}</Text>}
              </TouchableOpacity>
            ))}
          </View>
        </Card>

        <PrimaryButton title="+ Додати запис" onPress={() => navigation.navigate('AddEntry')} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
  },
  greeting: {
    fontSize: TYPOGRAPHY.greeting,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  cycleCard: {
    borderWidth: 1,
    borderColor: '#FCE4EC',
    backgroundColor: COLORS.white,
  },
  cycleDayLabel: {
    fontSize: 14,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 4,
  },
  cycleDayNumber: {
    fontSize: TYPOGRAPHY.cycleDay,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 4,
  },
  cycleDayInfo: {
    fontSize: 14,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  monthTitle: {
    fontSize: TYPOGRAPHY.title,
    fontWeight: FONT_WEIGHT.bold,
    textAlign: 'center',
    marginBottom: 16,
  },
  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  weekDayText: {
    fontSize: 14,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.textSecondary,
    width: 40,
    textAlign: 'center',
  },
  datesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  dateBox: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDateBox: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    backgroundColor: COLORS.primaryLight,
  },
  emptyDateBox: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  dateText: {
    fontSize: 16,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.textPrimary,
  },
  selectedDateText: {
    color: COLORS.primary,
  },
});