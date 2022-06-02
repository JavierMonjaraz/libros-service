const express = require('express');
const route = express.Router();

route.get("/libros", function (req, res) {
    res.json([
        {
            "idLibro": 1,
            "Titulo": "Los Juegos del Hambre",
            "Autor": "Suzanne Collins",
            "sinopsis":"El mundo está observando. Ganar significa fama y riqueza. Perder significa una muerte segura. ¡Que empiecen los septuagésimo cuartos juegos del hambre! "
        },
        {
            "idLibro": 2,
            "Titulo": "Harry Potter y la piedra filosofal",
            "Autor": "J. K. Rowling",
            "sinopsis":"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y el insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el Colegio Hogwarts de Magia."
        },
        {
            "idLibro": 3,
            "Titulo": "El Hobbit",
            "Autor": "J. R. R. Tolkien",
            "sinopsis":"Sacado de su cómodo agujero-hobbit por Gandalf y una banda de enanos, Bilbo se encuentra de pronto en medio de una conspiración que pretende apoderarse del tesoro de Smaug el Magnífico, un enorme y muy peligroso dragón"
        },
        {
            "idLibro": 4,
            "Titulo": "El señor de los anillos: La comunidad del anillo",
            "Autor": "J. R. R. Tolkien",
            "sinopsis":"En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en las Grietas del Destino. Consciente de la importancia de su misión, Frodo abandona la Comarca e inicia el camino hacia Mordor con la compañía de inesperada de Sam, Pippin y Merry."
        },
        {
            "idLibro": 5,
            "Titulo": "IT",
            "Autor": "Stephen King",
            "sinopsis":"Cuenta la historia de un grupo de siete niños que son aterrorizados por un malvado monstruo -al que llaman «Eso»- que es capaz de cambiar de forma, alimentándose del terror que produce en sus víctimas."
        },
        {
            "idLibro": 6,
            "Titulo": "Canción de Hielo y Fuego: Choque de Reyes",
            "Autor": "George R. R. Martin",
            "sinopsis":"Un cometa del color de la sangre hiende el cielo, cargado de malos augurios. Y hay razones sobradas para pensar así: los Siete Reinos se ven sacudidos por las luchas intestinas entre los nobles por la sucesión al Trono de Hierro."
        },
        {
            "idLibro": 7,
            "Titulo": "Todo oscuro, sin estrellas",
            "Autor": "Stephen King",
            "sinopsis":"Un hombre obligó a su hijo a ayudarle a asesinar a su mujer y a esconder su cadáver en un pozo. Sin embargo, no podrá vivir con su sentido de culpa. Una escritora de simpáticas novelas de intriga es brutalmente violada cuando regresa a su casa después de dar una charla a un club de lectura."
        },
        {
            "idLibro": 8,
            "Titulo": "La mitad oscura",
            "Autor": "Stephen King",
            "sinopsis":"Cuando Thad Beaumont en pleno bloqueo creativo, después de que su novela Las súbitas bailarinas optara al Premio Nacional de Literatura y lo perdiera, decidió seguir los consejos de su mujer y publicar una serie de thrillers retorcidos y sangrientos bajo el seudónimo de George Stark, no pensó, ni por asomo, que le sería tan difícil «deshacerse» de ese otro yo que, no se explicaba cómo, había dejado de ser ficticio."
        },
        {
            "idLibro": 9,
            "Titulo": "Drácula",
            "Autor": "Bram Stoker",
            "sinopsis":"El abogado Jonathan Harker descubre que, en el castillo del conde Drácula, este se comporta por las noches como un vampiro. Harker sigue a Drácula a Inglaterra, donde el conde busca nuevas víctimas, entre ellas, a Mina, la prometida de Harker."
        },
        {
            "idLibro": 10,
            "Titulo": "Los juegos del hambre: en llamas",
            "Autor": "Suzanne Collins",
            "sinopsis":"Katniss Everdeen ha sobrevivido a Los juegos del hambre. Pero el Capitolio quiere venganza. Contra todo pronóstico, Katniss Everdeen y Peeta Mellark siguen vivos."
        },
        {
            "idLibro": 11,
            "Titulo": "Los juegos del hambre: sinsajo",
            "Autor": "Suzanne Collins",
            "sinopsis":"Katniss Everdeen ha sobrevivido dos veces a los Juegos del Hambre, pero no está a salvo. La revolución se extiende y, al parecer, todos han tenido algo que ver en el meticuloso plan, todos excepto Katniss."
        },
        {
            "idLibro": 12,
            "Titulo": "Bajo la misma estrella",
            "Autor": "John Green",
            "sinopsis":"Hazel Grace Lancaster es una adolescente de 16 años que tiene cáncer terminal. Ella sabe que está muriendo ya que pasa su vida pegada a un tanque de oxígeno y sometida a constantes tratamientos, lo que la llevan entrar en una depresión."
        },
        {
            "idLibro": 13,
            "Titulo": "Bajo el domo",
            "Autor": "Stephen King",
            "sinopsis":"Todo comienza en Chester's Mill, un pueblo del estado de Maine, cuando Dale 'Barbie' Bárbara (Mike Vogel) está enterrando un cuerpo en las afueras del pueblo. Cuando está a punto de marcharse, una gran barrera invisible cae a unos metros de él y así todo el pueblo queda atrapado."
        },
        {
            "idLibro": 14,
            "Titulo": "Las ventajas de ser invisible",
            "Autor": "Stephen Chbosky",
            "sinopsis":"Charlie se ha quedado solo tras el suicidio de su mejor amigo. Tiene una popular y guapa hermana, y un hermano mayor estrella de futbol americano a punto de entrar a la universidad. Pero él vive al margen para casi todos, salvo su profesor de Lengua, quien cree que Charlie posee una gran capacidad intelectual."
        },
        {
            "idLibro": 15,
            "Titulo": "Apocalipsis",
            "Autor": "Stephen King",
            "sinopsis":"Un virus gripal, creado artificialmente como posible arma bacteriológica, se extiende por Estados Unidos y el mundo, provocando la muerte de la mayor parte de la población. Los supervivientes tienen sueños comunes, en los que aparece una anciana y un hombre joven"
        },
    ])
})

module.exports = route;