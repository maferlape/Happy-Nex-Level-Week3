const Database = require('./db')

const saveOrphanage = require('./saveOrphanage')

Database.then(async db =>{
        //inserir dados na tabela
        await saveOrphanage(db, {
            lat:"-20.49086370164465",
            lng:"-54.61303710937501",
            name:"Lar dos meninos",
            about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            whatsapp:"691754487",
            images:[
                "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80",
    
                "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            ].toString(),
            instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar",
            opening_hours:"Horário de visitas das 18h ate 8h",
            open_on_weekends:"0"
        })

        //consultar datos na tabela
        const selectedOrphanages = await db.all("SELECT * FROM orphanages")
        console.log(selectedOrphanages)

        //Consultar somente um orphanato, pelo id

        const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
        console.log(orphanage)

        //deletar dado da tabela
        // console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
        // console.log(await db.run("DELETE FROM orphanages WHERE id = '7'"))
})