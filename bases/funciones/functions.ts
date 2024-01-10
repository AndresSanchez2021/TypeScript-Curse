(()=>{
  const hero:string= 'Flash';

  function returnName():string{
    return hero;
  }

  const activate =()=>{
    return 'se activa';
  }
  console.log(typeof(activate));

  const heroName = returnName();
})()