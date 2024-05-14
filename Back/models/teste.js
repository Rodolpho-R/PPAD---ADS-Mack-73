let students = {
    1: {
      name: 'Egill Vignission',
      gpa: 3.4
    },
    2: {
      name: 'Bianca Pargas',
      gpa: 3.8
    },
    3: {
      name: 'Aisling O\'Sullivan',
      gpa: 3.4
    },
    4: {
      name: 'Sameer Fares',
      gpa: 3.9
    }
  };

  let arr = Object.values(students).filter(x => {
    return x.gpa == 3.8;
  });
   
  let arr2 = Object.values(students);
  console.log(arr2);
   