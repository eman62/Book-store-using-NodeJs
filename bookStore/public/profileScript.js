window.addEventListener("load", () => {
    getAllUsers();
  });
  
  const getAllUsers = () => {
    const url = "http://localhost:3004/api/users";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        jwt: sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let users = data[2];
        console.log(users)
          const div=document.querySelector("div")
          const userNameEle = document.createElement("h3");
          const userEmailEle = document.createElement("h3");
          userNameEle.innerHTML = `name: ${users.userName}`;
          userEmailEle.innerHTML = `email:  ${users.email}`;
          div.appendChild(userNameEle);
          div.appendChild(userEmailEle);
      });
  };
  