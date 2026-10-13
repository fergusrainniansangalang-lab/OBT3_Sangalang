import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACE, RADIUS } from './Theme'; // Capital 'T'

const SubjectRow = ({ subject, onPress }) => (
  <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.8}>
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{subject.units}</Text>
    </View>
    <View style={styles.middle}>
      <Text style={styles.code}>{subject.code}</Text>
      <Text style={styles.title}>{subject.title}</Text>
    </View>
    <Text style={styles.chevron}>{' > '}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACE.md,
    marginBottom: SPACE.sm,
  },
  badge: {
    width: 38,
    height: 38,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACE.md,
  },
  badgeText: {
    color: COLORS.surface,
    fontWeight: '700',
  },
  middle: {
    flex: 1,
  },
  code: {
    fontSize: 12,
    color: COLORS.textMuted,
    fontWeight: '700',
  },
  title: {
    fontSize: 15,
    color: COLORS.text,
    marginTop: 2,
  },
  chevron: {
    color: COLORS.textFaint,
    fontSize: 18,
  },
});

export default SubjectRow;