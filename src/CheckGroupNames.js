function checkGroupNames(arrGroups) {
    let pattern = /^(FD|FM|FE|fe)20\d{2}-\d{1,2}$/;
  
    for (let i = 0; i < arrGroups.length; i++) {
      if (pattern.test(arrGroups[i])) {
        console.log("Success");
      } else {
        console.log("Error");
      }
    }
  }
  
  let arrGroups = [
    'FE2021-5',
    'Fe2020-2',
    'FD2021',
    'fD2022-1',
    'FE2020-3',
    'FD2020/2',
    'FU2022-333',
    'fe2021-3',
    'FD2020$5',
    'FE2008-52',
    'Fm2008-23',
    'FM2022-1'
  ];
  
  checkGroupNames(arrGroups);