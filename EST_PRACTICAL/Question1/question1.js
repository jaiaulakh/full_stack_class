async function getUser() {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!resp.ok) {
      throw new Error('Failed to fetch');
    }

    const users = await resp.json();

  
    users.slice(0, 5).forEach(user => {
      console.log(user.name);
    });

  } catch (error) {
    console.error("Failed");
  }
}


getUser();