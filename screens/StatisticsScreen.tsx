import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import { fetchHealthTips } from '../constants/api';
import { COLORS, TYPOGRAPHY, FONT_WEIGHT } from '../constants';

interface HealthTip {
  id: number;
  title: string;
  body: string;
}

export default function StatisticsScreen({ navigation }: any) {
  const [tips, setTips] = useState<HealthTip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTips();
  }, []);

  const loadTips = async () => {
    try {
      setLoading(true);
      const data = await fetchHealthTips();
      setTips(data);
    } catch (err) {
      setError('Не вдалося завантажити поради');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Статистика</Text>
          <View style={styles.placeholder} />
        </View>

        <Card>
          <Text style={styles.statLabel}>Середня тривалість циклу</Text>
          <Text style={styles.statValue}>28 днів</Text>
        </Card>

        <Card>
          <Text style={styles.statLabel}>Наступні місячні</Text>
          <Text style={styles.statDate}>28 квітня 2026</Text>
        </Card>

        <Card>
          <Text style={styles.historyTitle}>Історія циклів</Text>
          <Text style={styles.historyItem}>- Січень 2026 – 29 днів</Text>
          <Text style={styles.historyItem}>- Лютий 2026 – 27 днів</Text>
          <Text style={styles.historyItem}>- Березень 2026 – 28 днів</Text>
          <Text style={styles.historyItem}>- Квітень 2026 – 30 днів</Text>
        </Card>

        <Text style={styles.tipsTitle}>💡 КОРИСНІ ПОРАДИ:</Text>
        <Card>
          {loading ? (
            <ActivityIndicator size="small" color={COLORS.primary} />
          ) : error ? (
            <View>
              <Text style={styles.errorText}>{error}</Text>
              <TouchableOpacity onPress={loadTips}>
                <Text style={styles.retryText}>Спробувати ще раз</Text>
              </TouchableOpacity>
            </View>
          ) : (
            tips.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.tipItem}
                onPress={() => navigation.navigate('TipDetails', { title: item.title, body: item.body })}
              >
                <Text style={styles.tipTitle}>{item.title.substring(0, 40)}</Text>
                <Text style={styles.readMore}>→</Text>
              </TouchableOpacity>
            ))
          )}
        </Card>
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
  title: { fontSize: TYPOGRAPHY.title, fontWeight: FONT_WEIGHT.bold, color: COLORS.textPrimary, textAlign: 'center', flex: 1 },
  placeholder: { width: 30 },
  statLabel: { fontSize: 16, fontWeight: FONT_WEIGHT.bold, color: COLORS.textSecondary, textAlign: 'center', marginBottom: 8 },
  statValue: { fontSize: 24, fontWeight: FONT_WEIGHT.bold, color: COLORS.primary, textAlign: 'center', marginBottom: 12 },
  statDate: { fontSize: 24, fontWeight: FONT_WEIGHT.bold, color: COLORS.primary, textAlign: 'center' },
  historyTitle: { fontSize: 16, fontWeight: FONT_WEIGHT.bold, color: COLORS.textSecondary, marginBottom: 12 },
  historyItem: { fontSize: 14, color: COLORS.textSecondary, marginBottom: 6 },
  tipsTitle: { fontSize: 16, fontWeight: FONT_WEIGHT.bold, color: COLORS.primary, marginTop: 16, marginBottom: 8 },
  tipItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  tipTitle: { fontSize: 14, color: COLORS.textPrimary, flex: 1 },
  readMore: { fontSize: 18, color: COLORS.primary, marginLeft: 8 },
  errorText: { fontSize: 14, color: COLORS.primary, textAlign: 'center', marginBottom: 8 },
  retryText: { fontSize: 14, color: '#2196F3', textAlign: 'center', fontWeight: FONT_WEIGHT.bold },
});