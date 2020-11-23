import md5 from 'md5';//MD5 es un algoritmo criptografico, este crea un hash apartir de un correo electronico de esta forma gravatar no guarda el correo electronico si no que guarda el hash y lo vincula a una imagen

const gravatar = (email) => {
    const base = 'https://gravatar.com/avatar/'
    const formattedEmail = (email).trim().toLowerCase(); //trim elimina los espacios
    const hash = md5(formattedEmail, { encoding: "binary"});
    return `${base}${hash}`;
};

export default gravatar;