// Método que devuelve una referencia a otra base de datos dentro del mismo servidor MongoDB, sin necesidad de reconectarte.
db=db.getSiblingDB("agro_spa_DB");
// Crea una colección llamada "usuarios" y agrega un documento
db.usuarios.insertOne({
    nombre_usuario: "@Leonardo",
    correo : "leonardo@gmail.com",
    password : "$2b$10$TCECRTnRSidoYCYouMIfy.uvmGzheQOVll/jESOMBJUzUgq860Rwm",
});
db.usuarios.insertOne({
    nombre_usuario: "@Marlen",
    correo : "Marlen@gmail.com",
    password : "23451",
});
db.usuarios.insertOne({
    nombre_usuario: "@Esmeralda",
    correo : "Esmeralda@gmail.com",
    password : "34512",
});
db.usuarios.insertOne({
    nombre_usuario: "@Natalia",
    correo : "Natalia@gmail.com",
    password : "45123",
});
db.usuarios.insertOne({
    nombre_usuario: "@Johan",
    correo : "Johan@gmail.com",
    password : "51234",
});

db.categorias.insertOne({ nombre_categoria: "SEMILLAS", direccion_img: "imgs/semillas.jpg" });
db.categorias.insertOne({ nombre_categoria: "FERTILIZANTES", direccion_img: "imgs/fertilizantes.jpg" });
db.categorias.insertOne({ nombre_categoria: "HERBICIDAS", direccion_img: "imgs/herbicidas.jpg" });
db.categorias.insertOne({ nombre_categoria: "ADHERENTES",  direccion_img: "imgs/adherentes.jpg" });

db.marcas.insertOne({ id_marcas: "1", nombre_marca: "BAYER", direccion_img: "imgs/bayer.jpg" });
db.marcas.insertOne({ id_marcas: "2", nombre_marca: "SYNGENTA", direccion_img: "imgs/sygenta.jpg" });
db.marcas.insertOne({ id_marcas: "3", nombre_marca: "ULTRASOL", direccion_img: "imgs/ultrasol.jpg" });
db.marcas.insertOne({ id_marcas: "4", nombre_marca: "AGROENZYMAS", direccion_img: "imgs/agroenzymas.jpg" });

db.ingredientes.insertOne({ id_ingrediente: "1", nombre_ingrediente: "GLIFOSATO", direccion_img: "imgs/ingrediente.jpg" });
db.ingredientes.insertOne({ id_ingrediente: "2", nombre_ingrediente: "ATRAZINA", direccion_img: "imgs/ingrediente.jpg" });
db.ingredientes.insertOne({ id_ingrediente: "3", nombre_ingrediente: "IMIDACLOPRID", direccion_img: "imgs/ingrediente.jpg" });
db.ingredientes.insertOne({ id_ingrediente: "4", nombre_ingrediente: "PARAQUAT", direccion_img: "imgs/ingrediente.jpg" });
