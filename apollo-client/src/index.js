import ApolloBoost, { gql } from 'apollo-boost'

// Questions:
// 1. How do we define an operation in JavaScript?
// 2. How do we send that off to the server to fetch a response?
// 3. How do we access the response?

const client = new ApolloBoost({
    uri: 'http://localhost:4000'
})

const getUsers = gql`
    query {
        users {
            id
            name
        }
    }
`

client.query({
    query: getUsers
}).then((response) => {
    let html = ''

    response.data.users.forEach((user) => {
        html += `
            <div>
                <h3>${user.name}</h3>
            </div>
        `
    })

    document.getElementById('users').innerHTML = html
})

//
// Goal: Render all published posts to the browser
//
// 1. Define the operation using gql 
// 2. Send off the query using client
// 3. Use the response data to render a list of post titles along with author names
// 4. Test your work

const getPosts = gql`
    query {
        posts {
            title
            author {
                name
            }
        }
    }
`

client.query({ query: getPosts }).then((response) => {
    let html = ''

    response.data.posts.forEach((post) => {
        html += `
            <div>
                <h3>${post.title}</h3>
                <h4>${post.author.name}</h4>
            </div>
        `
    })

    document.getElementById('posts').innerHTML = html
})