
const getCarrera = async () => {
    var token= localStorage.getItem('token');
    const response = await fetch('http://localhost:8000/api/carrera_relacionadas', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' 
        }
    });

    return response.json();
};


const Carrera = {
    getCarrera
};

export default Carrera;