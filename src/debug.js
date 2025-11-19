// Oops! This factory function exposes the students array.
// Can you make it private using closure?

const createCourse = (topic, instructor) => {
  const students = []
  return {
    topic,
    instructor,
    addStudent(name) {
      students.push(name);
    },
    removeStudent(name) {
      const index = students.indexOf(name)
      if (index > -1) {
        students.splice(index, 1)
      }
      // this.students.splice(this.students.indexOf(name), 1);
    },
    getStudents() {
      // return this.students;
      return [...students]
    },
    getStudentCount() {
      return students.length
    }
  };
};

module.exports = {
  createCourse,
};
