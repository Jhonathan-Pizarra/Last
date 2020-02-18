
const getTipo = async () => {
    var token= localStorage.getItem('token');
    const response = await fetch('http://localhost:8000/api/ofo_pas', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '
        }
    });

    return response.json();
};


const Tipo  = {
    getTipo
};

export default Tipo;