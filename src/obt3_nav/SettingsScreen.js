import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { COLORS, SPACE, RADIUS } from './Theme';

const SettingsScreen = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert('Log out?', 'You will return to the login screen.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log out',
        style: 'destructive',
        // replace, NOT navigate: there must be no way back into the app.
        onPress: () => navigation.replace('Login'),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.card}>
        <Text style={styles.name}>Fergus Rainnian S. Sangalang</Text>
        <Text style={styles.email}>FergusRainnian.Sangalang@letran.edu.ph</Text>
      </View>
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background, padding: SPACE.md },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACE.lg,
    marginBottom: SPACE.md,
  },
  name: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  email: { color: COLORS.textMuted, marginTop: 2 },
  logout: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACE.md,
    alignItems: 'center',
  },
  logoutText: { color: COLORS.danger, fontWeight: '700' },
});

export default SettingsScreen;