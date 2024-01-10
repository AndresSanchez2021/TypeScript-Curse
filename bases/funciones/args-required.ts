(()=>{
  const fullName = (firtsName:string, lastName:string ):string=>{
    if(!firtsName){
      throw new Error('Nombre no requerido ')
    }
    return `${firtsName} ${lastName}`;
  }
  const name = fullName('tony', 'stark')
  console.log({name})
})()