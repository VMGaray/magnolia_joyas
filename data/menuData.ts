export type SubCategoryItem = {
    name: string;
    href: string;
  };
  
  export type CategorySection = {
    title: string;
    items: SubCategoryItem[];
  };
  
  export type MainCategory = {
    title: string;
    href: string;
    sections?: CategorySection[]; // Opcional porque Insumos quizás no tiene desglose
  };
  
  export const MENU_ITEMS: MainCategory[] = [
    {
      title: "Plata 925",
      href: "/categoria/plata-925",
      sections: [
        {
          title: "Anillos",
          items: [
            { name: "Piedras naturales", href: "/plata-925/anillos/piedras-naturales" },
            { name: "Cubic y misopavé", href: "/plata-925/anillos/cubic" },
            { name: "Cristal S.W.", href: "/plata-925/anillos/cristal-sw" },
            { name: "Plata lisa", href: "/plata-925/anillos/plata-lisa" },
            { name: "Elastizados", href: "/plata-925/anillos/elastizados" },
            { name: "Midis", href: "/plata-925/anillos/midis" },
            { name: "Inflados", href: "/plata-925/anillos/inflados" },
            { name: "Nacar y Perlas", href: "/plata-925/anillos/nacar-perlas" },
            { name: "Plata y Oro", href: "/plata-925/anillos/plata-oro" },
          ],
        },
        {
          title: "Cadenas",
          items: [
            { name: "Denarios y Rosarios", href: "/plata-925/cadenas/denarios" },
            { name: "Finas y Clásicas", href: "/plata-925/cadenas/finas" },
            { name: "Con Dijes", href: "/plata-925/cadenas/con-dijes" },
            { name: "Hombres", href: "/plata-925/cadenas/hombres" },
            // ... Agregué los principales, podés sumar el resto acá
          ],
        },
        {
          title: "Pulseras",
          items: [
            { name: "Exclusivas e Importadas", href: "/plata-925/pulseras/exclusivas" },
            { name: "Elásticas", href: "/plata-925/pulseras/elasticas" },
            { name: "Esclavas", href: "/plata-925/pulseras/esclavas" },
            { name: "Plata y Oro", href: "/plata-925/pulseras/plata-oro" },
          ],
        },
        {
            title: "Aros",
            items: [
                { name: "Ver todos", href: "/plata-925/aros" } 
                // No me pasaste el desglose especifico de Aros Plata, solo el de Oro
            ]
        },
        {
            title: "Dijes",
            items: [{ name: "Ver todos", href: "/plata-925/dijes" }]
        },
        {
            title: "Conjuntos",
            items: [{ name: "Conjuntos y Combos", href: "/plata-925/conjuntos" }]
        }
      ],
    },
    {
      title: "Oro 18kl",
      href: "/categoria/oro-18kl",
      sections: [
        {
            title: "Aros",
            items: [
                { name: "Argollas", href: "/oro-18kl/aros/argollas" },
                { name: "Colgantes", href: "/oro-18kl/aros/colgantes" },
                { name: "Abridores", href: "/oro-18kl/aros/abridores" },
                { name: "Trepadores", href: "/oro-18kl/aros/trepadores" },
            ]
        },
        { title: "Anillos", items: [] },
        { title: "Cadenas", items: [] },
      ]
    },
    {
      title: "Enchapado",
      href: "/categoria/enchapado",
      sections: [] // Completar cuando tengas info
    },
    {
      title: "Insumos",
      href: "/categoria/insumos",
    },
    {
      title: "Personalizados",
      href: "/categoria/personalizados",
    },
  ];