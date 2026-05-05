import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import Toggle from '../components/Toggle';
import { COLORS, TYPOGRAPHY, FONT_WEIGHT } from '../constants';

export default function ProfileScreen({ navigation }: any) {
  const [reminder, setReminder] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Профіль</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👩</Text>
        </View>
        <Text style={styles.name}>Анна Коваленко</Text>

        <Card>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Тривалість циклу (дні)</Text>
            <Text style={styles.rowValue}>28</Text>
          </View>
        </Card>

        <Card>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Тривалість місячних (дні)</Text>
            <Text style={styles.rowValue}>5</Text>
          </View>
        </Card>

        <Card>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Нагадування</Text>
            <Toggle value={reminder} onValueChange={setReminder} />
          </View>
        </Card>

        <PrimaryButton title="Вийти" onPress={() => navigation.replace('Auth')} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  container: { flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 16 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  backButton: { padding: 4 },
  backArrow: { fontSize: 24, fontWeight: FONT_WEIGHT.bold, color: COLORS.black },
  title: { fontSize: TYPOGRAPHY.title, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', flex: 1 },
  placeholder: { width: 30 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: COLORS.primaryLight, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginBottom: 12 },
  avatarText: { fontSize: 40 },
  name: { fontSize: 20, fontWeight: FONT_WEIGHT.bold, color: COLORS.primary, textAlign: 'center', marginBottom: 30 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rowLabel: { fontSize: 16, fontWeight: FONT_WEIGHT.bold, color: COLORS.textSecondary },
  rowValue: { fontSize: 20, fontWeight: FONT_WEIGHT.bold, color: COLORS.textPrimary },
});