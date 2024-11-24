import Item from "../components/Item";

const productos = [
    {
        id: '1',
        name: 'Musculosa allboys azul',
        stock: 5,
        price: 15000,
        descripcion: 'Apoya a tu equipo con esta camiseta oficial de entrenamiento del equipo de básquet All Boys. Fabricada en malla transpirable de alta calidad, es ideal para prácticas y juegos. En un vibrante color azul, el diseño incluye el logo distintivo de All Boys 2024',
        img: '../../public/remera_allBoys_logo_azul.webp',
        category: 'Mas Vendidos'
    },
    {
        id: '2',
        name: 'Musculosa allboys azul',
        stock: 10,
        price: 18000,
        descripcion: 'Apoya a tu equipo con esta camiseta oficial de entrenamiento del equipo de básquet All Boys. Fabricada en malla transpirable de alta calidad, es ideal para prácticas y juegos. En un vibrante color azul y su logo rojo, el diseño incluye el logo distintivo de All Boys 2024',
        img: '../../public/remera_allBoys_logo_rojo.webp',
        category: 'Mas Vendidos'
    },
    {
        id: '3',
        name: 'Musculosa allboys azul',
        stock: 15,
        price: 13000,
        descripcion: 'Apoya a tu equipo con esta camiseta oficial de entrenamiento del equipo de básquet All Boys. Fabricada en malla transpirable de alta calidad, es ideal para prácticas y juegos. En un vibrante color azul, el diseño incluye el logo distintivo de All Boys 2024',
        img: '../../public/remera_allBoys_logo_azul.webp',
        category: 'Oferta'
    },
    {
        id: '4',
        name: 'Musculosa allboys azul',
        stock: 5,
        price: 20000,
        descripcion: 'Apoya a tu equipo con esta camiseta oficial de entrenamiento del equipo de básquet All Boys. Fabricada en malla transpirable de alta calidad, es ideal para prácticas y juegos. En un vibrante color azul, el diseño incluye el logo distintivo de All Boys 2024',
        img: '../../public/remera_allBoys_logo_azul.webp',
        category: 'Nuevos'
    },
    {
        id: '5',
        name: 'Musculosa allboys azul',
        stock: 18,
        price: 18000,
        descripcion: 'Apoya a tu equipo con esta camiseta oficial de entrenamiento del equipo de básquet All Boys. Fabricada en malla transpirable de alta calidad, es ideal para prácticas y juegos. En un vibrante color azul, el diseño incluye el logo distintivo de All Boys 2024',
        img: '../../public/remera_allBoys_logo_azul.webp',
        category: 'Nuevos'
    },
    {
        id: '6',
        name: 'Musculosa allboys azul',
        stock: 5,
        price: 22000,
        descripcion: 'Apoya a tu equipo con esta camiseta oficial de entrenamiento del equipo de básquet All Boys. Fabricada en malla transpirable de alta calidad, es ideal para prácticas y juegos. En un vibrante color azul, el diseño incluye el logo distintivo de All Boys 2024',
        img: '../../public/remera_allBoys_logo_azul.webp',
        category: 'Oferta'
    },
    {
        id: '7',
        name: 'Musculosa allboys azul',
        stock: 20,
        price: 22000,
        descripcion: 'Apoya a tu equipo con esta camiseta oficial de entrenamiento del equipo de básquet All Boys. Fabricada en malla transpirable de alta calidad, es ideal para prácticas y juegos. En un vibrante color azul, el diseño incluye el logo distintivo de All Boys 2024',
        img: '../../public/remera_allBoys_logo_azul.webp',
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