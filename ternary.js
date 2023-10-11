let firstName = null
// A basic ternary
console.log((firstName) ? // if  firstName is truthy
             firstName : // console.log firstName
             " Who are you " ) // Otherwise ask "Who Are You?"


// using a templated literal
             console.log(`Hello${
                (firstName) ? // if firstName is truthy
                `, ` + firstName : // add their name
                ''// Otherwise don't add anything 
             }`)


function showdata(data)
          {console.log((data) ? // if we hava data
        data : // console log the data
` Loading...`  // Otherwise consoloe log Loading 
)
}


let ourData = undefined ; // our page loads
showdata(ourData)

ourData = ['Apples', 'Oranges'] // our page finishes loading the data
showdata(ourData)






