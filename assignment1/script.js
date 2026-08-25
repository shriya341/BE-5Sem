const output = document.getElementById("output");

function show(title, data) {
    output.innerHTML += `
    <div class="section">
        <h2>${title}</h2>
        <pre>${typeof data === "string" ? data : JSON.stringify(data, null, 2)}</pre>
    </div>`;
}

const students = [
    { id:101,name:"Aman",marks:82,course:"Java"},
    { id:102,name:"Priya",marks:95,course:"Python"},
    { id:103,name:"Rahul",marks:67,course:"Java"},
    { id:104,name:"Neha",marks:76,course:"Web"},
    { id:105,name:"Rohan",marks:88,course:"Python"}
];

students.push({
    id:106,
    name:"Simran",
    marks:91,
    course:"Java"
});
show("Task 1 - Add Student (push)",students);

const removedStudent = students.pop();
show("Task 2 - Remove Last Student (pop)",removedStudent);

students.unshift({
    id:100,
    name:"Ankit",
    marks:80,
    course:"Web"
});
show("Task 3 - Add Student at Beginning (unshift)",students);

const removedFirst = students.shift();
show("Task 4 - Remove First Student (shift)",removedFirst);

const index = students.findIndex(student=>student.id===103);

students.splice(index,1,{
    id:107,
    name:"Karan",
    marks:78,
    course:"Java"
});

show("Task 5 - Update Array Using splice()",students);

const firstThree = students.slice(0,3);
show("Task 6 - First Three Students",firstThree);

let details = "";
for(const student of students){
    details += `${student.name} - ${student.course} - ${student.marks}\n`;
}
show("Task 7 - for...of",details);

let names = "";
students.forEach(student=>{
    names += student.name + "\n";
});
show("Task 8 - forEach()",names);

const studentNames = students.map(student=>student.name);
show("Task 9 - map()",studentNames);

const filteredStudents = students.filter(student=>student.marks>=80);
show("Task 10 - filter()",filteredStudents);

const totalMarks = students.reduce((sum,student)=>sum+student.marks,0);
const averageMarks = (totalMarks/students.length).toFixed(2);

show("Task 11 - Total Marks","Total Marks = " + totalMarks);
show("Task 11 - Average Marks","Average Marks = " + averageMarks);

const ascending = [...students].sort((a,b)=>a.marks-b.marks);
show("Task 12 - Sort Ascending",ascending);

const descending = [...students].sort((a,b)=>b.marks-a.marks);
show("Task 12 - Sort Descending",descending);