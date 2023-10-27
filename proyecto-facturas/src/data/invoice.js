export const invoice =  {

    id: 1,
    name: "Componentes PC",

    client: {
        id: 1,
        name: "Jose",
        lastname: "Reynoso",

        address: {

            country: "GT",
            city: "Ciudad de Guatemala",
            locationAdrres: "Carretera al Salvador"

        },
    },

    company: {
        company: "Componentes Electro",
        fiscalName: "12323232"
    },

    items: [
        {
            id: 1,
            name: "Smart TV LG-122121",
            price: 1500,
            quantity: 10

        },
        {
            id: 2,
            name: "PC Intel Cote I7-12324343",
            price: 2000,
            quantity: 5

        },
        {
            id: 3,
            name: "Audifonos Skull-candy",
            price: 100,
            quantity: 2

        },
        {
            id: 4,
            name: "Monitor LG-122121",
            price: 1500,
            quantity: 10
        }
    ]
}