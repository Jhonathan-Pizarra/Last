
const getHorario = async () => {
    var token= localStorage.getItem('token');
    const response = await fetch('http://localhost:8000/api/horarios', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '
        }
    });

    return response.json();
};


const Horario = {
    getHorario
};

export default Horario;