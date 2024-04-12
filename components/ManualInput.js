import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Input from './Input';
import Navigation from './NavigationBarComponent';
import Header from './HeaderComponent';

const ManualInput = () => {
  const [studentId, setStudentId] = useState('');
  const [fullName, setFullName] = useState('');
  const [violation, setViolation] = useState('');
  const [date, setDate] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [program, setProgram] = useState('');

  const handleSubmit = () => {

    console.log('Submitted:', { studentId, fullName, violation, date, yearLevel, program });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Input
        studentId={studentId}
        setStudentId={setStudentId}
        fullName={fullName}
        setFullName={setFullName}
        violation={violation}
        setViolation={setViolation}
        date={date}
        setDate={setDate}
        yearLevel={yearLevel}
        setYearLevel={setYearLevel}
        program={program}
        setProgram={setProgram}
        onSubmit={handleSubmit}
      />
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFBB05',
  },
});

export default ManualInput;
