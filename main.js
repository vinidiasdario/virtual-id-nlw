
const linksSocialMedia = {
  github: 'vinidiasdario',
  youtube: 'vinidiasdario',
  facebook: 'vinidiasdario',
  instagram: 'vinidiasdario',
  twitter: 'vinidiasdario'
}
/* const linksSocialMedia = {
    github: 'colocar os usuarios aqui',
    youtube: 'colocar os usuarios aqui',
    facebook: 'colocar os usuarios aqui',
    instagram: 'colocar os usuarios aqui',
    twitter: 'colocar os usuarios aqui'
} */

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
   
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userGitHub.href = data.html_url
        userAvatar.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()