import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import MainTabs from './MainTabs';
import SupportScreen from '../screens/SupportScreen';
import { COLORS, FONT_WEIGHT } from '../constants';
import { SCREENS } from './screens';

const Drawer = createDrawerNavigator();

/**
 * Компонент кнопки "Вийти" в боковому меню
 */
function LogoutButton({ navigation }: any) {
    return (
        <TouchableOpacity
            style={{ padding: 16, marginTop: 20 }}
            onPress={() => {
                Alert.alert('Вихід', 'Ви впевнені?', [
                    { text: 'Скасувати', style: 'cancel' },
                    {
                        text: 'Вийти',
                        onPress: () => {
                            navigation.dispatch(
                                CommonActions.reset({
                                    index: 0,
                                    routes: [{ name: SCREENS.AUTH }],
                                })
                            );
                        },
                    },
                ]);
            }}
        >
            <Text style={{ fontSize: 16, color: COLORS.primary, fontWeight: FONT_WEIGHT.bold }}>
                🚪 Вийти
            </Text>
        </TouchableOpacity>
    );
}

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                drawerStyle: {
                    backgroundColor: COLORS.white,
                    width: 280,
                },
                drawerActiveTintColor: COLORS.primary,
                drawerInactiveTintColor: COLORS.textSecondary,
                drawerLabelStyle: {
                    fontSize: 16,
                    fontWeight: FONT_WEIGHT.medium,
                },
                headerShown: true,
                headerTitle: '',
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        style={{ marginLeft: 16 }}
                    >
                        <Text style={{ fontSize: 28 }}>☰</Text>
                    </TouchableOpacity>
                ),
            })}
        >
            <Drawer.Screen
                name="Головна"
                component={MainTabs}
                options={{
                    drawerIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>📅</Text>,
                }}
            />
            <Drawer.Screen
                name={SCREENS.SUPPORT}
                component={SupportScreen}
                options={{
                    drawerLabel: 'Підтримка',
                    drawerIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>❓</Text>,
                }}
            />
            <Drawer.Screen
                name="Вийти"
                component={LogoutButton}
                options={{
                    drawerIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🚪</Text>,
                }}
            />
        </Drawer.Navigator>
    );
}