import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import { COLORS, TYPOGRAPHY, FONT_WEIGHT } from '../constants';

export default function NewsDetailsScreen({ route, navigation }: any) {
    const { title, body } = route.params;

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Деталі новини</Text>
                    <View style={styles.placeholder} />
                </View>

                <Card>
                    <Text style={styles.newsTitle}>{title}</Text>
                    <Text style={styles.newsBody}>{body}</Text>
                </Card>
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
        fontSize: TYPOGRAPHY.title,
        fontWeight: FONT_WEIGHT.bold,
        color: COLORS.textPrimary,
        textAlign: 'center',
        flex: 1,
    },
    placeholder: {
        width: 30,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: FONT_WEIGHT.bold,
        color: COLORS.textPrimary,
        marginBottom: 12,
    },
    newsBody: {
        fontSize: 14,
        color: COLORS.textSecondary,
        lineHeight: 22,
    },
});