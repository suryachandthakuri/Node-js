require('dotenv').config()
const express = require('express')
const app = express()

const githubData = {
  "login": "suryachandthakuri",
  "id": 96768168,
  "node_id": "U_kgDOBcSQqA",
  "avatar_url": "https://avatars.githubusercontent.com/u/96768168?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/suryachandthakuri",
  "html_url": "https://github.com/suryachandthakuri",
  "followers_url": "https://api.github.com/users/suryachandthakuri/followers",
  "following_url": "https://api.github.com/users/suryachandthakuri/following{/other_user}",
  "gists_url": "https://api.github.com/users/suryachandthakuri/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/suryachandthakuri/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/suryachandthakuri/subscriptions",
  "organizations_url": "https://api.github.com/users/suryachandthakuri/orgs",
  "repos_url": "https://api.github.com/users/suryachandthakuri/repos",
  "events_url": "https://api.github.com/users/suryachandthakuri/events{/privacy}",
  "received_events_url": "https://api.github.com/users/suryachandthakuri/received_events",
  "type": "User",
  "site_admin": false,
  "name": "suryachand",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Computer Engineering Student\r\nlinkedin.com/in/surya-chand-b6a832250\r\n",
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 7,
  "following": 7,
  "created_at": "2021-12-28T08:10:04Z",
  "updated_at": "2023-12-04T03:57:27Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res) =>{
    res.send('suryachand55')
})

app.get('/login',(req,res) =>{
    res.send('<h1>ME SURYA bhainp</h1>')
})

app.get('/github',(req,res) => {
  res.json(githubData);
})

app.get('/youtube',(req,res) =>{
    res.send('<h2>SURYA HERE</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})