"good job Ann", "good job Illia";

// Функція котра з масиву студентів вишле привітальне повідомлення студентам здавшим екзамен

const getMessageForPassedStudents = (allStudents, failedStudents) => {
  const passedStudents = allStudents.filter(
    (name) => failedStudents.indexOf(name) === -1
  );
  const message = passedStudents.map((name) => "Good job, " + name);
  return message;
};

const getMessageForPassedStudents = (allStudents, failedStudents) =>
  allStudents
    .filter((name) => failedStudents.indexOf(name) === -1)
    .map((name) => "Good job, " + name);
const allStudents = ["ann", "illia", "vasyl", "dmytro"];
const failedStudents = ["vasyl", "dmytro"];
console.log(getMessageForPassedStudents(allStudents, failedStudents));

// const getMessageForPassedStudents = (allStudents, failedStudents) => {
//   const passedStudents = allStudents.filter(
//     (name) => !failedStudents.includes(name)
//   );
// const message = passedStudents.map((name) => "Good job, " + name);
// return message;
//   return message;
// };
