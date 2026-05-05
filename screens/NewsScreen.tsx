import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { fetchHealthTips } from '../constants/api';
import Card from '../components/Card';
import { COLORS, FONT_WEIGHT } from '../constants';

interface NewsItem {
    id: number;
    title: string;
    body: string;
}

export default function NewsScreen({ navigation }: any) {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = async () => {
        try {
            setLoading(true);
            const data = await fetchHealthTips();
            setNews(data);
        } catch (err) {
            setError('Не вдалося завантажити новини');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <SafeAreaView style={styles.center}>
                <ActivityIndicator size="large" color={COLORS.primary} />
                <Text style={styles.loadingText}>Завантаження новин...</Text>
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={styles.center}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity onPress={loadNews}>
                    <Text style={styles.retryText}>Спробувати ще раз</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                data={news}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('NewsDetails', { title: item.title, body: item.body })}>
                        <Card>
                            <Text style={styles.newsTitle}>{item.title}</Text>
                            <Text style={styles.newsBody} numberOfLines={2}>{item.body}</Text>
                            <Text style={styles.readMore}>Детальніше →</Text>
                        </Card>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: COLORS.white },
    listContainer: { paddingHorizontal: 16, paddingTop: 20 },
    newsTitle: { fontSize: 18, fontWeight: FONT_WEIGHT.bold, color: COLORS.textPrimary, marginBottom: 8 },
    newsBody: { fontSize: 14, color: COLORS.textSecondary, marginBottom: 12 },
    readMore: { fontSize: 14, fontWeight: FONT_WEIGHT.bold, color: COLORS.primary },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white },
    loadingText: { marginTop: 12, fontSize: 16, color: COLORS.textSecondary },
    errorText: { fontSize: 16, color: COLORS.primary, textAlign: 'center', marginBottom: 16 },
    retryText: { fontSize: 16, color: '#2196F3', fontWeight: FONT_WEIGHT.bold },
});