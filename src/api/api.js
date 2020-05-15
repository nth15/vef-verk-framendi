const baseurl = 'https://vefforritun-verk-bak.herokuapp.com/'; 

async function post(path, data) {
  return request('POST', path, data);
}

async function request(method, path, data) {
  const url = new URL(path, baseurl);

  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers = { 'content-type': 'application/json' };
    options.body = JSON.stringify(data);
  }
  console.log(options.body);

  const user = window.localStorage.getItem('user');

  if (user) {
    try {
      const userData = JSON.parse(user);
      console.log('data', userData)
      options.headers['Authorization'] = `Bearer ${userData.token}`;
    } catch (e) {
      console.warn('Unable to parse user from localStorage', e);
    }
  }

  const response = await fetch(url.href, options);

  const json = method.toLowerCase() !== 'delete' ? await response.json() : null;

  const { status, ok } = response;

  return {
    data: json,
    ok,
    status,
  }
}

async function getProducts() {
  const url = new URL('products', baseurl);

  const response = await fetch(url);
  const data = await response.json();  
 
  return data;
}

async function login(username, password) {
  let result;
  try {
    result = await post('/users/login', { username, password });
  } catch (e) {
    throw new Error('Gat ekki skráð notanda inn');
  }
  return result;
}

async function register(username, email, password) {
  let result;
  try {
    result = await post('/users/register', { username, email, password });
  } catch (e) {
    throw new Error('');
  }
  return result
}

async function addToCart(id) {
  console.log(id);
}

export {
  getProducts,
  login,
  register,
  addToCart,
};