interface IStudent {
    name: string;
    age: number;
    grade: number   ;
}

function getName(): string {
    let name: string = "Rifat";
    return name;
}

function getAge(): number {
    let age: number = 22;
    return age;
}

function getGrade(): number {
    let grade: number = 3.57;
    return grade;
}

function getStudentinfo1():{name: string, age: number, grade: number} {
    const name: string = getName();
    const age: number = getAge();
    const grade: number = getGrade();
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`);
    return { name, age, grade };
}

async function getStudentinfo2(): Promise<{ name: string; age: number; grade: number }> {
    const name: string = await getName();
    const age: number = await getAge();
    const grade: number = await getGrade();
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`);
    return { name, age, grade };
}

function getStudentinfo3(): IStudent {
    const name: string = getName();
    const age: number = getAge();
    const grade: number = getGrade();
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`);
    return { name, age, grade };
}

async function main() {
    getStudentinfo1();
    await getStudentinfo2();
    getStudentinfo3();
}

main();