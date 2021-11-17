const fetchItems = () => {
  return [
    {
      title: "Tamal Rojo",
      imgUrl:
      "https://recetas.mx/wp-content/uploads/2019/02/tamal-de-chile-colorado-780x405.jpg",
      text: "Llévelo calientito",
      linkBtn: "https://kodemia.mx/tamales/rojo",
    },
    {
      title: "Tamal Verde",
      imgUrl:
        "https://www.turimexico.com/wp-content/uploads/2017/12/Receta-Tamal-de-Pollo-en-Salsa-Verde.jpg",        
      text: "El mejor tamal",
      linkBtn: "https://kodemia.mx/tamales/verde",
      oferta: true,
    },
    {
      title: "Tamal de Mole",
      imgUrl:
        "https://i.blogs.es/c08a4a/images-12-/1366_2000.jpeg",

      text: "El segundo mejor tamal",
      linkBtn: "https://kodemia.mx/tamales/mole",
    },
    {
      title: "Tamal de dulce",
      imgUrl:
        "https://cocinamia.com.mx/wp-content/uploads/2019/06/Sin-t%C3%ADtulo-2-14-1100x500.png",
      text: "Pa' los niños",
      linkBtn: "https://kodemia.mx/tamales/dulce",
    },
    {
      title: "Tamal Oaxaqueño",
      imgUrl:
        "http://3.bp.blogspot.com/-xR4-VsFEtWg/UoUIXMyJbnI/AAAAAAAAHLY/TL8j_MNfMBY/s640/tamal+oaxaque%C3%B1o1.jpg",
      text: "de mero oaxaca",
      linkBtn: "https://kodemia.mx/tamales/oaxaqueno",
      oferta: true
    },
    {
      title: "Tamal X",
      imgUrl:
        "https://cdn7.kiwilimon.com/recetaimagen/24601/1900x1080/19545.jpg.webp",
      text: "Pa' los hambres",
      linkBtn: "https://kodemia.mx/tamales/oaxaqueno",
      oferta: true
    }
  ];
};

export default fetchItems;