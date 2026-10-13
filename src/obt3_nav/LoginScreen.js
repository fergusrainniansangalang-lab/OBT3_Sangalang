import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACE, RADIUS } from './Theme';

const LoginScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safe}>
    <View style={styles.box}>
      <Text style={styles.title}>Logged out</Text>
      <Text style={styles.sub}>
        Press the back button. Nothing happens - that is the point.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('MainTabs')}
      >
        <Text style={styles.buttonText}>Log back in</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
    justifyContent: 'center',
  },
  box: { padding: SPACE.xl },
  title: { fontSize: 26, fontWeight: 'bold', color: COLORS.surface },
  sub: { color: '#C7D8F0', marginTop: SPACE.sm, marginBottom: SPACE.xl },
  button: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACE.md,
    alignItems: 'center',
  },
  buttonText: { color: COLORS.primary, fontWeight: '700' },
});

export default LoginScreen;