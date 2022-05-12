async function requestLogin(user, pass) {
    try {
        const response = await fetch(`/api/players/login`, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          method: "POST",
          body: JSON.stringify({
              username: user,
              password: pass
          })
        });
        var result = await response.json();
        // We are not checking for errors (considering the GUI is only allowing correct choices)
        return result;
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
    }
}

async function requestPlayerMatches(pId) {
    try {
        const response = await fetch(`/api/players/${pId}/playermatches`);
        var result = await response.json();
        return result;
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
    }
}
