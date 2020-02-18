
const getDay = async () => {
    var token= localStorage.getItem('token');
    const response = await fetch('http://localhost:8000/api/dias', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '
        }
    });

    return response.json();
};


const Day = {
    getDay
};

export default Day;