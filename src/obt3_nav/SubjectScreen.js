import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import SubjectRow from './SubjectRow';
import { SUBJECTS } from './subjects';
import { COLORS, SPACE } from './Theme'; // Changed './theme' to './Theme'

const SubjectsScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safe}>
    <FlatList
      data={SUBJECTS}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <SubjectRow
          subject={item}
          // Pass the ID ONLY. Never the whole object.
          onPress={() =>
            navigation.navigate('SubjectDetail', { subjectId: item.id })
          }
        />
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },
  list: { padding: SPACE.md },
});

export default SubjectsScreen;