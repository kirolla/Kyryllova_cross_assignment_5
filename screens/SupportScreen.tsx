import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import OutlineButton from '../components/OutlineButton';
import { COLORS, TYPOGRAPHY, FONT_WEIGHT } from '../constants';

export default function SupportScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Підтримка</Text>
            <Card>
                <Text style={styles.text}>Email: support@cycletrack.com</Text>
                <Text style={styles.text}>Телефон: +380 44 123 4567</Text>
                <Text style={styles.text}>Години роботи: Пн-Пт 9:00-18:00</Text>
            </Card>
            <OutlineButton title="Назад" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 16,
        paddingTop: 60,
    },
    backButton: {
        marginBottom: 16,
    },
    backArrow: {
        fontSize: 24,
        fontWeight: FONT_WEIGHT.bold,
        color: COLORS.black,
    },
    title: {
        fontSize: TYPOGRAPHY.title,
        fontWeight: FONT_WEIGHT.bold,
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: COLORS.textSecondary,
        marginBottom: 12,
    },
});