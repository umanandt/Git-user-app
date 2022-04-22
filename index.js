document.querySelector(".searchButton").addEventListener("click", function () {
  const inputValue = document.querySelector("input").value;

  const correctValue = inputValue.split(" ").join("");
  document.querySelector(".searchData").value = correctValue;

  fetch(`https://api.github.com/users/${correctValue}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let usersInfo = data;
      const Image = document.querySelector(".avatar");
      Image.innerHTML = `<img src=${usersInfo.avatar_url}/>`;
      document.querySelector(".namee").innerHTML = `<h2>${usersInfo.login}</h2>
      <p>@${usersInfo.login}</p>`;
      document.querySelector(".other-deatils").innerHTML = usersInfo.bio
        ? `${usersInfo.bio}`
        : `There is no bio`;

      const date = new Date(usersInfo.created_at);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();

      document.querySelector(
        ".dateofJoin"
      ).innerText = `Joined - ${day} : ${month} : ${year}`;

      document.querySelector(
        ".reposNumber"
      ).innerText = `${usersInfo.public_repos}`;

      document.querySelector(".followerNumbers").innerText = usersInfo.followers
        ? `${usersInfo.followers}`
        : `0`;

      document.querySelector(".followingNumbers").innerText =
        usersInfo.following ? `${usersInfo.following}` : `0`;

      document.querySelector(".location-details").innerText = usersInfo.location
        ? `${usersInfo.location}`
        : `Not Available`;

      document.querySelector(".socialmedia-details").innerText =
        usersInfo.twitter_username ? `${usersInfo.twitter_username}` : `Null`;

      document.querySelector(".link-details").innerText = usersInfo.blog
        ? `${usersInfo.blog}`
        : `Not Available`;

      document.querySelector(".git-details").innerText = `${usersInfo.id}`;
    });

});



document.querySelector('.clickLight').src = './images/sun.png';
screenColor = true;

document.querySelector('.clickLight').addEventListener('click', function(){
  if(screenColor){

    document.querySelector('.light').innerText = 'Dark';   
  document.querySelector('.container').style.backgroundColor = '#ffffff';
  document.querySelector('.header').style.backgroundColor ='hsl(217, 54%, 11%)';
  document.querySelector('.actual-data').style.backgroundColor ='#ffffff';
  document.querySelector('.search').style.backgroundColor ='#ffffff';
  document.querySelector('.dataField').style.backgroundColor ='#ffffff';
  document.querySelector('.demographic').style.backgroundColor ='hsl(217, 54%, 11%)';

  document.querySelector('.container').style.color = '#ffffff';
  document.querySelector('.header').style.color ='#ffffff';
  document.querySelector('.actual-data').style.color ='hsl(217, 54%, 11%)';
  document.querySelector('.search').style.color = 'hsl(217, 54%, 11%)';
  document.querySelector('.dataField').style.color = 'hsl(217, 54%, 11%)';
  document.querySelector('.demographic').style.color ='#ffffff';
  
  screenColor = false;
}

else{

  document.querySelector('.light').innerText = 'Light';
  document.querySelector('.container').style.backgroundColor = 'hsl(217, 54%, 11%)';
  document.querySelector('.header').style.backgroundColor ='hsl(217, 54%, 11%)';
  document.querySelector('.actual-data').style.backgroundColor ='hsl(217, 54%, 11%)';
  document.querySelector('.search').style.backgroundColor ='hsl(217, 54%, 11%)';
  document.querySelector('.dataField').style.backgroundColor ='hsl(217, 54%, 11%)';
  document.querySelector('.demographic').style.backgroundColor ='hsl(217, 54%, 11%)';

  document.querySelector('.container').style.color = '#ffffff';
  document.querySelector('.header').style.color ='#ffffff';
  document.querySelector('.actual-data').style.color ='#ffffff';
  document.querySelector('.search').style.color = '#ffffff';
  document.querySelector('.dataField').style.color = '#ffffff';
  document.querySelector('.demographic').style.color ='#ffffff';
  screenColor = true;


}



});







