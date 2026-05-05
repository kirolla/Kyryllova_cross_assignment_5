import React from 'react';
import { TouchableOpacity, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS, SIZES, TYPOGRAPHY } from '../constants';

interface OutlineButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function OutlineButton({ title, onPress, disabled = false }: OutlineButtonProps) {
  const { width } = useWindowDimensions();
  const buttonWidth = Math.min(width * 0.85, 320);

  return (
    <TouchableOpacity
      style={[styles.button, { width: buttonWidth }, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, disabled && styles.textDisabled]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: SIZES.outlineButtonHeight,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: SIZES.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'center',
  },
  disabled: { borderColor: COLORS.textLight },
  text: { color: COLORS.primary, fontSize: TYPOGRAPHY.button, fontWeight: '600' },
  textDisabled: { color: COLORS.textLight },
});