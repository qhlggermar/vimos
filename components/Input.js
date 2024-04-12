import React, { useState } from 'react';
import { ScrollView, View, TextInput, Button, Text, StyleSheet, Dimensions } from 'react-native';

const Input = ({
  studentId,
  setStudentId,
  fullName,
  setFullName,
  violation,
  setViolation,
  date,
  setDate,
  yearLevel,
  setYearLevel,
  program,
  setProgram,
  onSubmit,
}) => {
 
  const [todayDate, setTodayDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
 
        <Text style={styles.title}>Student Information</Text>
        
     
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Student ID</Text>
            <TextInput
              style={styles.input}
              value={studentId}
              onChangeText={setStudentId}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>
        </View>
     
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Violation</Text>
            <TextInput
              style={styles.input}
              value={violation}
              onChangeText={setViolation}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Date</Text>
            <TextInput
              style={styles.input}
              value={date || todayDate} 
              onChangeText={setDate}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Year Level</Text>
            <TextInput
              style={styles.input}
              value={yearLevel}
              onChangeText={setYearLevel}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Program</Text>
            <TextInput
              style={styles.input}
              value={program}
              onChangeText={setProgram}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={onSubmit} color="#FFBB05"/>
        </View>
      </View>
    </ScrollView>
  );
};

const screenWidth = Dimensions.get('window').width; 

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#182933',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 50,
    paddingRight: 30,
    paddingBottom: 90,
    paddingLeft: 30,
    width: screenWidth - 0, 
    maxWidth: 450, 
    justifyContent: 'center',
    marginTop: 100, 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 20, // Adjust font size as needed
    fontWeight: 'bold', // Make the title bold
    marginBottom: 20, // Add margin bottom for spacing
    paddingBottom: 20,
    color: 'white', // Text color
    textAlign: 'center', // Center text horizontally
  },
  label: {
    marginBottom: 5,
    fontSize: 14, // Reduced font size
    color: 'white', // Text color
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginBottom: 10,
    height: 50,
    backgroundColor: 'white', // White background color
  },
  buttonContainer: {
    marginTop: 50, // Adjust the marginTop to lower the button
    borderRadius: 20,
  },
});

export default Input;
