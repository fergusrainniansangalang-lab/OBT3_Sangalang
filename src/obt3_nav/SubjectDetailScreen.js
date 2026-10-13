import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { SUBJECTS } from './subjects';
import { COLORS, SPACE, RADIUS } from './Theme';

const Line = ({ label, value }) => (
  <View style={styles.line}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const SubjectDetailScreen = ({ route, navigation }) => {
  const { subjectId } = route.params ?? {};
  const subject = SUBJECTS.find((s) => s.id === subjectId);

  const [note, setNote] = useState('');

  useEffect(() => {
    navigation.setOptions({ title: subject ? subject.code : 'Not found' });
  }, [subject, navigation]);

  const handleSaveNote = () => {
    Alert.alert('Saved', 'Your note for this subject has been saved!');
  };

  if (!subject) {
    return (
      <SafeAreaView style={[styles.safe, styles.centre]}>
        <Text style={styles.missing}>That subject does not exist.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.card}>
        <Text style={styles.title}>{subject.title}</Text>
        <Line label="CODE" value={subject.code} />
        <Line label="UNITS" value={String(subject.units)} />
        <Line label="ROOM" value={subject.room} />
        <Line label="SCHEDULE" value={subject.schedule} />

        {/* Notes Section */}
        <View style={styles.notesContainer}>
          <Text style={styles.label}>NOTES</Text>
          <TextInput
            style={styles.input}
            placeholder="Add notes for this subject..."
            placeholderTextColor={COLORS.textFaint}
            multiline
            value={note}
            onChangeText={setNote}
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
            <Text style={styles.saveButtonText}>Save Note</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },
  centre: { justifyContent: 'center', alignItems: 'center' },
  missing: { color: COLORS.textMuted },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    margin: SPACE.md,
    padding: SPACE.lg,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACE.md,
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: SPACE.sm,
    marginTop: SPACE.sm,
  },
  label: { fontSize: 11, fontWeight: '700', color: COLORS.textMuted },
  value: { fontSize: 15, color: COLORS.text, marginTop: 2 },
  notesContainer: {
    marginTop: SPACE.lg,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: SPACE.md,
  },
  input: {
    backgroundColor: COLORS.background,
    borderRadius: RADIUS.sm,
    padding: SPACE.md,
    marginTop: SPACE.xs,
    minHeight: 80,
    textAlignVertical: 'top',
    color: COLORS.text,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.sm,
    padding: SPACE.sm,
    alignItems: 'center',
    marginTop: SPACE.sm,
  },
  saveButtonText: {
    color: COLORS.surface,
    fontWeight: '700',
  },
});

export default SubjectDetailScreen;