const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {

  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-30.1087957",
    lng: "-51.3172272",
    name: "Lar de meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "98989897898",
    images: [
      "https://images.unsplash.com/photo-1563465814437-b1a057a461ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1594575111057-47b35c5f98f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0",
  });

  // consultar dados da tabelas
  const selectdOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectdOrphanages);

  //consultar somente 1, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  console.log(orphanage);

  //Deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"))
  // console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"))
})