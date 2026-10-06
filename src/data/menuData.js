export const menuData = {
  restaurantName: "B3 House",
  categories: [
    {
      name: "Desayunos de la casa",
      items: [
        { name: "Omelet Clásico", description: "Omelet relleno de jamón y queso fundido, acompañado de pan baguette con mantequilla de ajo.", price: 24000, image: "omelet-clasico.webp" },
        { name: "El Americano", description: "Pancakes esponjosos acompañados de huevos revueltos, tocineta crocante y fruta fresca de temporada.", price: 24000, image: "el-americano.webp" },
        { name: "Cacerola de Huevos Napolitanos", description: "Base napolitana con huevos fritos, mozzarella fundida, aguacate y cebolla encurtida.", price: 28000, image: "cacerola-huevos-napolitanos.webp" },
        { name: "Arepas Trufadas de la casa", description: "Arepitas artesanales con un toque de aceite de trufa, guacamole, chicharrón, cebolla encurtida y huevo revueltos.", price: 28500, image: "arepas-trufadas.webp" }
      ]
    },
    {
      name: "Power Bowls",
      items: [
        { name: "Red Berry Bowl", description: "Smoothie de frutos rojos y banano con proteína y yogur griego, fresas frescas, granola artesanal y crema de queso.", price: 26000, image: "red-berry-bowl.webp" },
        { name: "Choco Banana Crunch", description: "Smoothie de chocolate con yogur griego, banano y proteína en polvo, granola artesanal, mantequilla de maní y chips de chocolate.", price: 26000, image: "choco-banana-crunch.webp" },
        { name: "Amanecer Tropical", description: "Smoothie de mango y banano yogur griego y proteína, coco rallado, banano, granola artesanal, chía y miel de maracuyá.", price: 26000, image: "amanecer-tropical.webp" }
      ]
    },
    {
      name: "Sandwiches en Croissant",
      items: [
        { name: "Dorado de Huevo y Tocineta", description: "Croissant hojaldrado, relleno de huevos revueltos, tocineta crocante y queso cheddar fundido.", price: 24900, image: "dorado-huevo-tocineta.webp" },
        { name: "Cremoso del Mar", description: "Croissant relleno de atún cremoso con queso crema, tomate fresco y lechuga crespa.", price: 26900, image: "cremoso-del-mar.webp" }
      ]
    },
    {
      name: "Tostadas Dulces",
      items: [
        { name: "Banano Maní", description: "Pan de masa madre, mantequilla de maní, banano, fresas y chips de chocolate.", price: 22900, image: "tostada-banano-mani.webp" },
        { name: "Chocolate y Arándanos", description: "Pan de masa madre, crema dulce de queso, mermelada de arándanos y chips de chocolate.", price: 24900, image: "tostada-chocolate-arandanos.webp" },
        { name: "Manzana Dorada y Maní", description: "Pan de masa madre, queso crema dulce, manzana caramelizada con canela, miel de maple, maní y mantequilla de maní.", price: 25900, image: "tostada-manzana-dorada.webp" },
        { name: "Red Velvet", description: "Tostada francesa en pan de masa madre con crema de queso dulce, fresas, mermelada de frutos rojos y crumble de galleta.", price: 24900, image: "tostada-red-velvet.webp" },
        { name: "Fantasia de Pistacho y Fresas", description: "Pan de masa madre, crema de pistacho, fresas, chocolate blanco y maní tostado.", price: 26500, image: "tostada-pistacho-fresas.webp" },
        { name: "Avellana y Frutos del Bosque", description: "Pan de masa madre, crema de avellanas, fresas, arándanos, miel de maple y azúcar glass.", price: 24000, image: "tostada-avellana-frutos.webp" }
      ]
    },
    {
      name: "Tostadas Saladas",
      items: [
        { name: "Jamón Serrano y Durazno", description: "Pan de masa madre con queso crema, jamón serrano, duraznos laminados y un toque de miel de maple.", price: 31000, image: "tostada-jamon-serrano.webp" },
        { name: "Huevo y Tocineta Caramelizada", description: "Pan de masa madre con huevos revueltos cremosos, mermelada de tocineta y queso cheddar.", price: 26500, image: "tostada-huevo-tocineta.webp" },
        { name: "Atún Cremoso", description: "Pan de masa madre con atún en mezcla cremosa de yogur griego y queso crema, tomate fresco y cebolla encurtida.", price: 24000, image: "tostada-atun-cremoso.webp" },
        { name: "Burrata Mediterranea", description: "Pan de masa madre con burrata fresca, tomates cheery confitados y aceite de oliva.", price: 28000, image: "tostada-burrata-mediterranea.webp" },
        { name: "Aguacate y Huevo", description: "Pan de masa madre con guacamole artesanal, huevo revuelto, tomates confitados y cebolla encurtida.", price: 26900, image: "tostada-aguacate-huevo.webp" }
      ]
    },
    {
      name: "Bowls de la casa",
      items: [
        {
          name: "Tu Bowl Personalizado",
          description: "Incluye: 1 proteína, 1 base y 4 verduras frescas.",
          price: 25000,
          options: "Proteínas: Pollo, Cerdo BBQ, Chicharrón, Carne. Extras: Aguacate(+$3.500), Proteína(+$6.000)",
          image: "bowl-personalizado.webp"
        }
      ]
    },
    {
      name: "Bebidas - Café",
      items: [
        { name: "Tinto", description: "", price: 2500, image: "cafe-tinto.webp" },
        { name: "Americano", description: "", price: 7000, image: "cafe-americano.webp" },
        { name: "Espresso", description: "", price: 5000, image: "cafe-espresso.webp" },
        { name: "Espresso Doble", description: "", price: 8000, image: "cafe-espresso-doble.webp" },
        { name: "Latte", description: "", price: 9000, image: "cafe-latte.webp" },
        { name: "Cappucino", description: "", price: 8000, image: "cafe-cappucino.webp" },
        { name: "Iced Latte", description: "", price: 12000, image: "cafe-iced-latte.webp" },
        { name: "Latte Machiato", description: "", price: 9000, image: "cafe-latte-machiato.webp" },
        { name: "Chocolate Negro", description: "", price: 6000, image: "chocolate-negro.webp" },
        { name: "Chocolate con Leche", description: "", price: 7500, image: "chocolate-leche.webp" },
        { name: "Aromática", description: "", price: 3500, image: "aromatica.webp" }
      ]
    },
    {
      name: "Bebidas - Jugos",
      items: [
        { name: "Mango", description: "", price: 9000, options: "En leche: $10.500", image: "jugo-mango.webp" },
        { name: "Maracuyá", description: "", price: 9000, options: "En leche: $10.500", image: "jugo-maracuya.webp" },
        { name: "Mandarina", description: "", price: 9000, options: "En leche: $10.500", image: "jugo-mandarina.webp" },
        { name: "Fresa", description: "", price: 9000, options: "En leche: $10.500", image: "jugo-fresa.webp" },
        { name: "Mora", description: "", price: 9000, options: "En leche: $10.500", image: "jugo-mora.webp" },
        { name: "Guanabana", description: "", price: 9000, image: "jugo-guanabana.webp" }
      ]
    },
    {
      name: "Bebidas - Limonadas",
      items: [
        { name: "Limonada de coco", description: "", price: 15000, image: "limonada-coco.webp" },
        { name: "Limonada cereza", description: "", price: 13000, image: "limonada-cereza.webp" },
        { name: "Limonada mango biche", description: "", price: 13000, image: "limonada-mango.webp" },
        { name: "Limonada Natural", description: "", price: 9000, image: "limonada-natural.webp" }
      ]
    },
    {
      name: "Bebidas - Sodas",
      items: [
        { name: "Lyche y pepino", description: "", price: 15000, image: "soda-lyche-pepino.webp" },
        { name: "Maracuyá hierbabuena", description: "", price: 15000, image: "soda-maracuya.webp" },
        { name: "Michelada", description: "", price: 15000, image: "soda-michelada.webp" },
        { name: "Bretaña", description: "", price: 12000, image: "soda-bretana.webp" },
        { name: "Cereza", description: "", price: 15000, image: "soda-cereza.webp" }
      ]
    },
    {
      name: "Bebidas - Batidos de Proteína",
      items: [
        { name: "Banano y mantequilla de maní", description: "", price: 18000, options: "Agua / Leche Deslactosada", image: "batido-banano-mani.webp" },
        { name: "Mora", description: "", price: 18000, options: "Agua / Leche Deslactosada", image: "batido-mora.webp" },
        { name: "Choco café", description: "", price: 18000, options: "Agua / Leche Deslactosada", image: "batido-choco-cafe.webp" }
      ]
    },
    {
      name: "Bebidas - Otras",
      items: [
        { name: "Hatsu", description: "", price: 12000, image: "bebida-hatsu.webp" },
        { name: "Coca-Cola", description: "", price: 5900, image: "bebida-cocacola.webp" },
        { name: "Bretaña", description: "", price: 5500, image: "bebida-bretana-botella.webp" },
        { name: "Águila", description: "", price: 7000, image: "cerveza-aguila.webp" }
      ]
    },
    {
      name: "Cocteles Clásicos",
      items: [
        { name: "Piña colada con licor", description: "", price: 29500, image: "coctel-pina-colada.webp" },
        { name: "Aperol spritz", description: "", price: 29500, image: "coctel-aperol.webp" },
        { name: "Mojito", description: "", price: 26000, image: "coctel-mojito.webp" },
        { name: "Moscow mule", description: "", price: 29500, image: "coctel-moscow.webp" },
        { name: "Limonada de vino tinto", description: "", price: 25000, image: "coctel-limonada-vino.webp" },
        { name: "Margarita", description: "", price: 19000, image: "coctel-margarita.webp" }
      ]
    }
  ]
};
