// Datos de eventos, carretes y videos para Luciano Magrini - Web Portfolio
// Redacción en primera persona y optimización para GitHub Pages

const PORTFOLIO_DATA = {
    artist: {
        name: "Luciano Magrini",
        roles: "MÚSICO | VIOLINISTA | PIANISTA | PRODUCTOR",
        showName: "MÚSICA PARA VER (MPV)",
        showSubtitle: "Espectáculo Audiovisual con Música en Vivo",
        duration: "1h 15m",
        audience: "Apto para todo público",
        spectators: "+500 Espectadores",
        phone: "+54 9 2944609849",
        phoneDisplay: "+54 9 2944609849",
        whatsappLink: "https://wa.me/5492944609849?text=Hola%20Luciano,%20me%20comunico%20desde%20tu%20sitio%20web%20para%20consultar%20por%20tus%20servicios%20y%20espectáculos.",
        instagram: "https://www.instagram.com/luciano.magrini.musica/",
        instagramUser: "@luciano.magrini.musica",
        youtube: "https://www.youtube.com/@lucianomagriniMPV",
        youtubeUser: "@lucianomagriniMPV",
        email: "magriniluciano@yahoo.com.ar",
        dossierPdf: "Dossier Luciano Magrini.pdf"
    },
    events: [
        {
                "id": "biblioteca-carilafquen-villa-los-coihues",
                "folder": "Biblioteca Carilafquen Villa los Coihues",
                "title": "Biblioteca Carilafquen Villa los Coihues",
                "category": "centros_culturales",
                "categoryName": "Centros Culturales y Teatros",
                "cover": "Pontada MVP.jpg",
                "images": [
                        "Pontada MVP.jpg",
                        "20251122_204307_1.jpg",
                        "20251122_220920_1.jpg",
                        "DSC_0110_1.jpg",
                        "DSC_0116_1.jpg",
                        "DSC_0118_1.jpg"
                ],
                "count": 6,
                "initialLikes": 84
        },
        {
                "id": "casa-de-la-cultura-n-stor-kirchner-las-grutas-r-o-negro-10-de-diciembre",
                "folder": "Casa de la cultura Néstor Kirchner Las Grutas Río Negro 10 de diciembre",
                "title": "Casa de la cultura Néstor Kirchner Las Grutas Río Negro 10 de diciembre",
                "category": "centros_culturales",
                "categoryName": "Centros Culturales y Teatros",
                "cover": "Portada.jpg",
                "images": [
                        "Portada.jpg",
                        "mirones.jpg"
                ],
                "count": 2,
                "initialLikes": 56
        },
        {
                "id": "casa-del-bicentenario-el-bols-n-r-o-negro",
                "folder": "Casa del Bicentenario El Bolsón, Río Negro",
                "title": "Casa del Bicentenario El Bolsón, Río Negro",
                "category": "centros_culturales",
                "categoryName": "Centros Culturales y Teatros",
                "cover": "portada 3.jpg",
                "images": [
                        "portada 3.jpg",
                        "537710860_17978488292880674_6399493496650764812_n.jpg",
                        "539549938_17965919576949450_6634097377480049361_n.webp",
                        "542265085_17979876605880674_188207335891018539_n.jpg",
                        "542350653_17979682055880674_6540369356797080692_n.jpg",
                        "casabicentenario.jpg"
                ],
                "count": 6,
                "initialLikes": 84
        },
        {
                "id": "centro-cultural-municipal-dina-huapi-musica-para-ver",
                "folder": "Centro Cultural Municipal Dina Huapi Musica para ver",
                "title": "Centro Cultural Municipal Dina Huapi Musica para ver",
                "category": "centros_culturales",
                "categoryName": "Centros Culturales y Teatros",
                "cover": "Portada.jpg",
                "images": [
                        "Portada.jpg",
                        "DSC_0002.JPG",
                        "DSC_0004.JPG",
                        "DSC_0031.JPG",
                        "DSC_0032.JPG",
                        "DSC_0042.JPG",
                        "DSC_0119.JPG"
                ],
                "count": 7,
                "initialLikes": 91
        },
        {
                "id": "colectivo-cultural-les-mirones-las-grutas-r-o-negro",
                "folder": "Colectivo Cultural Les Mirones Las Grutas, Río Negro",
                "title": "Colectivo Cultural Les Mirones Las Grutas, Río Negro",
                "category": "centros_culturales",
                "categoryName": "Centros Culturales y Teatros",
                "cover": "Portada.jpg",
                "images": [
                        "Portada.jpg",
                        "496942026_1320202693443359_3141729731456969977_n.jpg",
                        "WhatsApp Image 2026-06-04 at 7.23.25 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.23.26 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.23.27 PM.jpeg"
                ],
                "count": 5,
                "initialLikes": 77
        },
        {
                "id": "el-paico",
                "folder": "El Paico",
                "title": "El Paico",
                "category": "privados",
                "categoryName": "Eventos Privados y Ambientaciones",
                "cover": "Portada.jpg",
                "images": [
                        "Portada.jpg",
                        "WhatsApp Image 2026-06-04 at 7.26.38 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.27.15 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.27.46 PM.jpeg"
                ],
                "count": 4,
                "initialLikes": 70
        },
        {
                "id": "evento-privado",
                "folder": "Evento privado",
                "title": "Evento privado",
                "category": "privados",
                "categoryName": "Eventos Privados y Ambientaciones",
                "cover": "Pontada MVP.jpg",
                "images": [
                        "Pontada MVP.jpg",
                        "IMG-20250428-WA0022.jpg",
                        "IMG-20250428-WA0023.jpg",
                        "IMG-20250428-WA0024.jpg"
                ],
                "count": 4,
                "initialLikes": 70
        },
        {
                "id": "festibuque",
                "folder": "Festibuque",
                "title": "Festibuque",
                "category": "festivales",
                "categoryName": "Festivales y Ferias Culturales",
                "cover": "Portada.jpg",
                "images": [
                        "Portada.jpg",
                        "WhatsApp Image 2025-11-09 at 10.52.40.jpeg",
                        "WhatsApp Image 2025-11-09 at 10.52.43.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.19.35 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.20.22 PM (1).jpeg",
                        "WhatsApp Image 2026-06-04 at 7.20.22 PM (2).jpeg",
                        "WhatsApp Image 2026-06-04 at 7.20.22 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.20.23 PM (1).jpeg",
                        "WhatsApp Image 2026-06-04 at 7.20.23 PM (2).jpeg",
                        "WhatsApp Image 2026-06-04 at 7.20.23 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.20.24 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.21.45 PM.jpeg"
                ],
                "count": 12,
                "initialLikes": 61
        },
        {
                "id": "ilonpara-instagram",
                "folder": "IlonPara Instagram",
                "title": "IlonPara Instagram",
                "category": "especial",
                "categoryName": "Sesiones Especiales",
                "cover": "Portada.jpg",
                "images": [
                        "Portada.jpg",
                        "IMG-20250806-WA0010.jpg",
                        "IMG-20250806-WA0012.jpg",
                        "IMG-20250806-WA0013.jpg",
                        "IMG-20250809-WA0012.jpg",
                        "IMG-20250812-WA0028.jpg"
                ],
                "count": 6,
                "initialLikes": 84
        },
        {
                "id": "primera-feria-del-libro-direcci-n-de-cultura-san-antonio-oeste",
                "folder": "Primera Feria del Libro Dirección de Cultura San Antonio Oeste",
                "title": "Primera Feria del Libro Dirección de Cultura San Antonio Oeste",
                "category": "festivales",
                "categoryName": "Festivales y Ferias Culturales",
                "cover": "Portada.jpeg",
                "images": [
                        "Portada.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.53.13 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.57.21 PM (1).jpeg",
                        "WhatsApp Image 2026-06-04 at 7.57.21 PM.jpeg",
                        "cartel resaltado.jpg",
                        "fondo nuevo.jpg"
                ],
                "count": 6,
                "initialLikes": 84
        },
        {
                "id": "puerto-pir-mides-centro-cultural-patag-nicamente-chubut",
                "folder": "Puerto pirámides Centro Cultural Patagónicamente Chubut",
                "title": "Puerto pirámides Centro Cultural Patagónicamente Chubut",
                "category": "centros_culturales",
                "categoryName": "Centros Culturales y Teatros",
                "cover": "Portada.jpg",
                "images": [
                        "Portada.jpg",
                        "WhatsApp Image 2026-06-04 at 7.50.22 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.50.58 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.51.22 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.55.40 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.56.13 PM (1).jpeg",
                        "WhatsApp Image 2026-06-04 at 7.56.13 PM.jpeg",
                        "WhatsApp Image 2026-06-04 at 7.56.14 PM.jpeg"
                ],
                "count": 8,
                "initialLikes": 98
        },
        {
                "id": "sao",
                "folder": "SAO",
                "title": "SAO",
                "category": "centros_culturales",
                "categoryName": "Centros Culturales y Teatros",
                "cover": "Portada.jpg",
                "images": [
                        "Portada.jpg",
                        "Afiche Para imprimir en A3 o A4 SAO.jpg",
                        "IMG-20250817-WA0003.jpg",
                        "IMG_20250816_214541651.jpg",
                        "IMG_20250816_222035694.jpg"
                ],
                "count": 5,
                "initialLikes": 77
        }
],
    videos: [
        {
                "id": "va-IkpnlCAE",
                "title": "Trailer Oficial: Música Para Ver (MPV)",
                "category": "destacado",
                "categoryLabel": "Mi Trailer Oficial",
                "description": "Mi espectáculo audiovisual con música en vivo que recorre paisajes cinematográficos y grandes emociones.",
                "isFeatured": true
        },
        {
                "id": "lAPawiscRY4",
                "title": "Hay otros mundos pero están en este",
                "category": "original",
                "categoryLabel": "Mi Obra Original",
                "description": "Mi composición inmersiva con paisajes patagónicos y narrativa visual de alto impacto.",
                "isFeatured": false
        },
        {
                "id": "K1iGEL_OJyo",
                "title": "Recuerdos del Ypacaraí - MPV",
                "category": "clasico",
                "categoryLabel": "Clásico Latinoamericano",
                "description": "Mi interpretación en violín solista con arreglos orquestales en vivo.",
                "isFeatured": false
        },
        {
                "id": "WSNF9kkek8Q",
                "title": "Uno - Tango al Violín (MPV)",
                "category": "tango",
                "categoryLabel": "Tango al Violín",
                "description": "Mi versión al violín de la inmortal obra de Mariano Mores y Enrique Santos Discépolo.",
                "isFeatured": false
        },
        {
                "id": "ijTb10AWijU",
                "title": "La Califfa - Ennio Morricone",
                "category": "cine",
                "categoryLabel": "Banda Sonora",
                "description": "Mi homenaje a la emotiva melodía del maestro Ennio Morricone junto a visuales de la naturaleza.",
                "isFeatured": false
        },
        {
                "id": "JXwNvPdq_P8",
                "title": "Pink Floyd - High Hopes (MPV)",
                "category": "rock",
                "categoryLabel": "Rock Sinfónico",
                "description": "Mi reinterpretación acústica y sinfónica del legendario tema de Pink Floyd.",
                "isFeatured": false
        },
        {
                "id": "KFSrlQgoXxc",
                "title": "Pink Floyd - The Wall / Comfortably Numb",
                "category": "rock",
                "categoryLabel": "Rock Sinfónico",
                "description": "Fuerza escénica y emotividad melódica con mi violín sobre visuales espaciales.",
                "isFeatured": false
        },
        {
                "id": "-ZH4BH-nktk",
                "title": "La Pantera Rosa - Henry Mancini",
                "category": "cine",
                "categoryLabel": "Cine Clásico",
                "description": "Mi arreglo lúdico y elegante para violín solista y banda sonora.",
                "isFeatured": false
        },
        {
                "id": "a1MzuDzIC6E",
                "title": "Dossier Diez Cuerdas Dúo",
                "category": "camara",
                "categoryLabel": "Música de Cámara",
                "description": "Mi proyecto en formato acústico Diez Cuerdas Dúo con repertorio seleccionado de cuerdas.",
                "isFeatured": false
        },
        {
                "id": "3ZqEHjiBRTY",
                "title": "Temas con violín para difusión y eventos",
                "category": "eventos",
                "categoryLabel": "Repertorio para Eventos",
                "description": "Muestra de mi repertorio versátil para fiestas, bodas, convenciones y turismo de alta gama.",
                "isFeatured": false
        }
]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_DATA;
}
