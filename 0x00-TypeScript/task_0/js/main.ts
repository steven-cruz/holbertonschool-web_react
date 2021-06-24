interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Jhonatan",
    lastName: "Legarda",
    age: 24,
    location: "Cali"
};

const student2: Student = {
    firstName: "John",
    lastName: "Sigga",
    age: 28,
    location: "San Francisco"
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement("table");
const tbBody = document.createElement("tbody")
for (let i = 0; i < studentsList.length; i++) {
    const row = document.createElement("tr");
    const column = document.createElement("td");
    const textCol1 = document.createTextNode(studentsList[i].firstName);
    column.appendChild(textCol1);
    row.appendChild(column);
    tbBody.appendChild(row);

    const textCol2 = document.createTextNode(studentsList[i].location);
    column.appendChild(textCol2);
    row.appendChild(column);
    tbBody.appendChild(row);
}