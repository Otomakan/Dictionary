[] Add a loader
[] There might be a major security issue in the way that password is implemented check if you cn take of the "paswrord field in the model, aso check that no sensitive data is stored into the tJWT token"
[]  Delete some of the files generated by the scaffolding(see details in backlog)
[] See if XSRF rotection is enough when combining the ruby application protector to the react

[] Delete everything related to webpacker and javascript (in application.html.erb and assets folder)

[] Reorganize the controllers so that all ensitive assets are checked for tokens and the user login and creation isn't

[] Check if there is a way to set a timer if there is a problem with the fetching of auth token
[]Check if I can use the onEnter method to check if user is authenticated

[] Check if the states are modifiable in production (eg change loggedin to true or false)

[] Think about ways to improve in produt https://github.com/topheman/npm-registry-browser

[] look at js teting (cypress jest)