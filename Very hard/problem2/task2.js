function getNotesDistribution(students) {
    const result = {};

  
    students.forEach((student) => {
      const validNotes = student.notes.filter((note) => note > 0 && note < 6);
  
      if (validNotes.length > 0) {
        validNotes.forEach(note => {
          result[note] = (result[note] || 0) + 1;
        });
      }
    });
  
    return result;
  
    
  }
  export default getNotesDistribution;