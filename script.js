const links = {
    github:'danynazareth',
    youtube:'',
    facebook:'danynazaret',
    instagram:'danynazaret',
    twitter:'danynazare'
}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social =  li.getAttribute('class')
        li.children[0].href =  `http://${social}.com/${links[social]}` 
      
    }
}

// changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const userGithub = `https://api.github.com/users/${links.github}`

    fetch(userGithub)
        .then(response =>  response.json())
        .then( data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userPhoto.src=data.avatar_url
            userLink.href=data.html_url
            userLogin.textContent = data.login
        })
   
    
}

getGitHubProfileInfos()
