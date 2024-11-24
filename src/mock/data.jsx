import Item from "../components/Item";

const productos = [
    {
        id: '1',
        name: 'Musculosa allboys logo azul',
        stock: 5,
        price: 15000,
        descripcion: 'Apoya a tu equipo con esta camiseta oficial de entrenamiento del equipo de básquet All Boys. Fabricada en malla transpirable de alta calidad, es ideal para prácticas y juegos. En un vibrante color azul, el diseño incluye el logo distintivo de All Boys 2024',
        img: '../../public/remera_allBoys_logo_azul.webp',
        category: 'Mas Vendidos'
    },
    {
        id: '2',
        name: 'Musculosa allboys logo rojo',
        stock: 10,
        price: 18000,
        descripcion: 'Apoya a tu equipo con esta camiseta oficial de entrenamiento del equipo de básquet All Boys. Fabricada en malla transpirable de alta calidad, es ideal para prácticas y juegos. En un vibrante color azul y su logo rojo, el diseño incluye el logo distintivo de All Boys 2024',
        img: '../../public/remera_allBoys_logo_rojo.webp',
        category: 'Mas Vendidos'
    },
    {
        id: '3',
        name: 'Remera Allboys Negro',
        stock: 15,
        price: 13000,
        descripcion: 'Demuestra tu pasión por el equipo de básquet All Boys con esta camiseta negra de estilo clásico. Confeccionada en algodón de alta calidad, ofrece comodidad y durabilidad para el uso diario.',
        img: '../../public/remera_allBoys_negra.webp',
        category: 'Oferta'
    },
    {
        id: '4',
        name: 'Remera Comamders',
        stock: 5,
        price: 20000,
        descripcion: 'Destaca con esta camiseta de edición especial de los Commanders, diseñada para los fanáticos del fútbol americano. Con un diseño gráfico impactante, presenta un jugador con una armadura atlética en una postura poderosa, rodeado por un círculo que simboliza energía y acción. ',
        img: '../../public/remera_comamders.webp',
        category: 'Nuevos'
    },
    {
        id: '5',
        name: 'Remera Rawayana',
        stock: 18,
        price: 18000,
        descripcion: 'Luce con estilo esta camiseta negra de Rawayana, diseñada para destacar tanto en conciertos como en la vida diaria. En la parte trasera, presenta un llamativo texto en amarillo y rojo con la frase ¿Quién trae las cornetas?, acompañado por un diseño gráfico único con detalles en azul, amarillo y rojo en la parte inferior, evocando colores vibrantes y llenos de energía.',
        img: '../../public/remera_rawayana.webp',
        category: 'Nuevos'
    },
    {
        id: '6',
        name: 'Remera The Archer',
        stock: 5,
        price: 22000,
        descripcion: 'Destaca tu estilo con esta hermosa camiseta de color rosa pastel, diseñada para los verdaderos amantes de la música y el arte. Inspirada en la icónica canción "The Archer" de la artista Taylor Swift, esta prenda captura elegancia y creatividad en un diseño único.',
        img: '../../public/remera_taylor_the_archer.webp',
        category: 'Oferta'
    },
    {
        id: '7',
        name: 'Remera Vikings',
        stock: 20,
        price: 22000,
        descripcion: '¡Luce tu apoyo al equipo Minnesota Vikings con un toque de diversión y estilo único! Esta camiseta blanca combina el amor por el deporte y la magia de los personajes más queridos de Disney: Mickey y Minnie Mouse.',
        img: '../../public/remera_vikings.webp',
        category: 'Oferta'
    },
    {
        id: '8',
        name: 'Remera You Play',
        stock: 5,
        price: 25000,
        descripcion: 'Demuestra tu pasión por el equipo Atlanta Falcons con esta camiseta negra, diseñada especialmente para los fans que sienten el fútbol en el corazón.',
        img: '../../public/remera_you_play.webp',
        category: 'Oferta'
    }
]
export const getProducts = () => {
    let error = false;
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => {
            if(error){
                reject ('Hubo un error, intente mas tarde')
            }
            else(
                resolve(productos)
            )
        }, 2000);
    })
}
export const getOneProduct = (id)=>{
    let error=false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let product = productos.find((item)=> item.id === id)
                resolve(product)
            }else{
                reject('No hay data')
            }
        },3000)
    })
}