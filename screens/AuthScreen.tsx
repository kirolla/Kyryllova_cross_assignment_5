import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import OutlineButton from '../components/OutlineButton';
import Card from '../components/Card';
import { COLORS, TYPOGRAPHY, FONT_WEIGHT } from '../constants';

interface AuthScreenProps {
  onLogin?: () => void;
}

export default function AuthScreen({ onLogin }: AuthScreenProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>CycleTrack</Text>
      <Text style={styles.icon}>🌸</Text>
      <Text style={styles.description}>Відстежуйте свій цикл легко та зручно</Text>

      <Card>
        <Text style={styles.title}>{isLogin ? 'Вхід' : 'Реєстрація'}</Text>
        <InputField placeholder="Email" value={email} onChangeText={setEmail} />
        <InputField placeholder="Пароль" value={password} onChangeText={setPassword} secureTextEntry />

        {!isLogin && (
          <>
            <InputField placeholder="Ім'я" value={firstName} onChangeText={setFirstName} />
            <InputField placeholder="Прізвище" value={lastName} onChangeText={setLastName} />
          </>
        )}

        <PrimaryButton title={isLogin ? "Увійти" : "Зареєструватися"} onPress={onLogin || (() => { })} />

        <Text style={styles.orText}>Або</Text>

        <OutlineButton
          title={isLogin ? "Зареєструватися" : "Увійти"}
          onPress={() => setIsLogin(!isLogin)}
        />

        <TouchableOpacity>
          <Text style={styles.skipLink}>Пропустити →</Text>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 16 },
  logo: { fontSize: TYPOGRAPHY.logo, fontWeight: FONT_WEIGHT.bold, color: COLORS.primary, textAlign: 'center', marginTop: 60, marginBottom: 16 },
  icon: { fontSize: 64, textAlign: 'center', marginBottom: 16 },
  description: { fontSize: 16, fontWeight: FONT_WEIGHT.bold, color: COLORS.textSecondary, textAlign: 'center', marginBottom: 40 },
  title: { fontSize: TYPOGRAPHY.title, fontWeight: FONT_WEIGHT.bold, textAlign: 'center', marginBottom: 20 },
  orText: { fontSize: TYPOGRAPHY.small, color: COLORS.textLight, textAlign: 'center', marginVertical: 12 },
  skipLink: { fontSize: TYPOGRAPHY.small, color: COLORS.link, textAlign: 'center', marginTop: 16 },
});