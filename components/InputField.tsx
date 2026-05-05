import React from 'react';
import { View, TextInput, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS, SIZES } from '../constants';

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export default function InputField({ placeholder, value, onChangeText, secureTextEntry = false }: InputFieldProps) {
  const { width } = useWindowDimensions();
  const inputWidth = Math.min(width * 0.85, 320);

  return (
    <View style={[styles.container, { width: inputWidth }]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textSecondary}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 12, alignSelf: 'center' },
  input: {
    height: SIZES.inputHeight,
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: SIZES.borderRadius,
    paddingHorizontal: 16,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
});