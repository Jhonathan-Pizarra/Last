
const getTime = async () => {
    var token= localStorage.getItem('token');
    const response = await fetch('http://localhost:8000/api/tiempos', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '
        }
    });

    return response.json();
};


const Time = {
    getTime
};

export default Time;