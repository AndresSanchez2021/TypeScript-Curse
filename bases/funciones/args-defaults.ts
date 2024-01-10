(()=>{


  const fullName = (firtsName:string, lastName?:string, upper:boolean =false):string=>{
    if(upper)
      return `${firtsName} ${lastName || 'no last name'}`.toUpperCase();
    return `${firtsName} ${lastName || 'no last name'}`;
  }


  const name = fullName('tony')

  console.log({name})
})()