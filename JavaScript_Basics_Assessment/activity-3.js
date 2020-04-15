const studentArr = ['Jake', 'Megan', 'Chris'];
    for (let i = 0; i < 3; i++) {
        let name1 = prompt('Enter a Student Name');
        let name2 = prompt('Enter a Student Name');
        let name3 = prompt('Enter a Student Name');
        studentArr.push(name1);
        studentArr.push(name2);
        studentArr.push(name3);
    }

    for (let j = 0; j < studentArr.length; j++) {
        console.log(studentArr[j]);
    }