/***Get***/
const getHojas = async () => {
    var token= localStorage.getItem('token');
    const response = await fetch('http://localhost:8000/api/hoja_vidas', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer'
        }
    });

    return response.json();
};

/***Post***/
const crearCV = (numeroCedula, nombreCompleto, fechaNacimiento, telefono, nacionalidad, escuela, colegio,
                universidad, idiomas, otrosConocimientos, sexo, direccion, descripcion ) => {

    var url = 'http://localhost:8000/api/hoja_vidas';
    var data = {numeroCedula: numeroCedula, nombreCompleto: nombreCompleto, fechaNacimiento:fechaNacimiento, telefono: telefono,
        nacionalidad:nacionalidad, escuela: escuela, colegio: colegio, universidad: universidad, idiomas: idiomas,
        otrosConocimientos: otrosConocimientos, sexo: sexo, direccion:direccion, descripcion: descripcion};

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json',
        }
    }).then(res => res.json())
        .then(response => {
            console.log('hecho');
        })
        .catch(error => console.error('Ha ocurrido un problema:', error));

}

const Curriculum = {
    crearCV,
    getHojas
};

export default Curriculum;