(()=>{


  const fullName = (firtsName:string, lastName?:string ):string=>{
    
    return `${firtsName} ${lastName || 'no last name'}`;
  }


  const name = fullName('tony')

  console.log({name})
})()