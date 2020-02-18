
    const getOferta = async () => {
        var token= localStorage.getItem('token');
        const response = await fetch('http://localhost:8000/api/ofertas', {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '
            }
        });
    
        return response.json();
    };

    const createOfert = (nomEmpresa, conocimientos, descripcion, salario, tipo, tiempo, carreraRel, tiempoHorarios, dias, horarios ) => {
        var url = 'http://localhost:8000/api/ofertas';
            var data = {NombreEmpresa: nomEmpresa, Conocimientos: conocimientos, Descripcion: descripcion, Salario:salario,
            OfoPas: tipo, Tiempo: tiempo, CarreraRelacionada: carreraRel, TiempoHorarios: tiempoHorarios, Dias: dias, Horarios: horarios
            };
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
            .catch(error => console.error('Error:', error));
           
    }
   

const Ofertas = {
    getOferta,
    createOfert
};

export default Ofertas;