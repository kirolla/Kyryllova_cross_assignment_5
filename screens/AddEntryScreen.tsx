import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import Checkbox from '../components/Checkbox';
import { COLORS, TYPOGRAPHY, FONT_WEIGHT } from '../constants';

export default function AddEntryScreen({ navigation }: any) {
  const [symptoms, setSymptoms] = useState({
    pain: false,
    headache: false,
    bloating: false,
    breastTenderness: false,
    moodSwings: false,
  });
  const [discharge, setDischarge] = useState<string | null>(null); // 'рідкі', 'густі', 'кров'янисті'

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Додати запис</Text>
          <View style={styles.placeholder} />
        </View>

        <Card>
          <Text style={styles.cardTitle}>Симптоми</Text>
          <Checkbox label="Біль унизу живота" checked={symptoms.pain} onPress={() => setSymptoms({ ...symptoms, pain: !symptoms.pain })} />
          <Checkbox label="Головний біль" checked={symptoms.headache} onPress={() => setSymptoms({ ...symptoms, headache: !symptoms.headache })} />
          <Checkbox label="Здуття" checked={symptoms.bloating} onPress={() => setSymptoms({ ...symptoms, bloating: !symptoms.bloating })} />
          <Checkbox label="Нагрубання грудей" checked={symptoms.breastTenderness} onPress={() => setSymptoms({ ...symptoms, breastTenderness: !symptoms.breastTenderness })} />
          <Checkbox label="Перепади настрою" checked={symptoms.moodSwings} onPress={() => setSymptoms({ ...symptoms, moodSwings: !symptoms.moodSwings })} />
        </Card>

        <Card>
          <Text style={styles.cardTitle}>Настрій</Text>
          <Text style={styles.emojiRow}>😊 😐 😢 😡</Text>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>Виділення</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity style={styles.radioOption} onPress={() => setDischarge('рідкі')}>
              <View style={[styles.radioCircle, discharge === 'рідкі' && styles.radioSelected]} />
              <Text style={styles.radioText}>Рідкі</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.radioOption} onPress={() => setDischarge('густі')}>
              <View style={[styles.radioCircle, discharge === 'густі' && styles.radioSelected]} />
              <Text style={styles.radioText}>Густі</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.radioOption} onPress={() => setDischarge('кров\'янисті')}>
              <View style={[styles.radioCircle, discharge === 'кров\'янисті' && styles.radioSelected]} />
              <Text style={styles.radioText}>Кров'янисті</Text>
            </TouchableOpacity>
          </View>
        </Card>

        <PrimaryButton title="Зберегти" onPress={() => navigation.goBack()} />
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
    paddingTop: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    padding: 4,
  },
  backArrow: {
    fontSize: 24,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.black,
  },
  title: {
    fontSize: 20,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.textPrimary,
    textAlign: 'center',
    flex: 1,
  },
  placeholder: {
    width: 30,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 12,
  },
  emojiRow: {
    fontSize: TYPOGRAPHY.emoji,
    textAlign: 'center',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    gap: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
  },
  radioSelected: {
    backgroundColor: COLORS.primary,
  },
  radioText: {
    fontSize: 14,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.textSecondary,
  },
});