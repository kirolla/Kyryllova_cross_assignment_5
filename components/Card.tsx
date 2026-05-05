import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS, SIZES } from '../constants';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'pink';
  style?: any;
}

export default function Card({ children, variant = 'default', style }: CardProps) {
  const { width } = useWindowDimensions();
  const cardWidth = width - 32;

  return (
    <View style={[styles.card, { width: cardWidth }, variant === 'pink' && styles.pinkCard, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: COLORS.white,
    borderColor: '#FCE4EC',
    borderWidth: 1,
    borderRadius: SIZES.borderRadiusLarge,
    marginBottom: 12,
    alignSelf: 'center',
    shadowColor: COLORS.black,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  pinkCard: {
    backgroundColor: COLORS.primaryLight,
    borderWidth: 0,
  },
});