

const login = (usuario, pass) => {
    var url = 'http://localhost:8000/api/login_check';
        var data = {username: usuario, password: pass};
        fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json',
        }
        }).then(res => res.json())
        .then(response => {
          console.log('token', response.token);
          localStorage.setItem('token', response.token);
          window.location.reload();
        })
        .catch(error => console.error('Error:', error));
       
}

const Auth = {
    login
};

export default Auth;