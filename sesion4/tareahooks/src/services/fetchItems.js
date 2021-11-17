const fetchItems = () => {
  return [
    {
      title: "Tamal de Rajas",
      imgUrl:
      "https://recetas.mx/wp-content/uploads/2019/02/tamal-de-chile-colorado-780x405.jpg",
      price:10,
      text: "Rajas",
      linkBtn: "https://kodemia.mx/tamales/rojo",
    },
    {
      title: "Tamal Verde",
      imgUrl:
        "https://www.turimexico.com/wp-content/uploads/2017/12/Receta-Tamal-de-Pollo-en-Salsa-Verde.jpg",        
      text: "Cerdo y chile verde",
      price:10,
      linkBtn: "https://kodemia.mx/tamales/verde",
      oferta: true,
    },
    {
      title: "Tamal de Mole",
      imgUrl:
        "https://i.blogs.es/c08a4a/images-12-/1366_2000.jpeg",
      price:10,
      text: "pollo y mole",
      linkBtn: "https://kodemia.mx/tamales/mole",
    },
    {
      title: "Tamal de dulce",
      imgUrl:
        "https://cocinamia.com.mx/wp-content/uploads/2019/06/Sin-t%C3%ADtulo-2-14-1100x500.png",
      text: "Pa' los niños",
      price:10,
      linkBtn: "https://kodemia.mx/tamales/dulce",
    },
    {
      title: "Tamal Oaxaqueño",
      imgUrl:
        "http://3.bp.blogspot.com/-xR4-VsFEtWg/UoUIXMyJbnI/AAAAAAAAHLY/TL8j_MNfMBY/s640/tamal+oaxaque%C3%B1o1.jpg",
      text: "de mero oaxaca",
      linkBtn: "https://kodemia.mx/tamales/oaxaqueno",
      price:10,
      oferta: true
    },
 
  ];
};

export default fetchItems;