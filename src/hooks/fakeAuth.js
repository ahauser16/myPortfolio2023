//https://www.codingdeft.com/posts/react-router-tutorial/#authenticated-routes
//AuthRoutes_Step1-> You will have certain pages in your application that needs to be accessed only by logged in users. We can secure such routes by writing a wrapper around the 'Route' component.

//AuthRoutes_Step2-> Here we have 'isAuthenticated' property, which will be set to either true or false by the login and logout functions, respectively. These functions will also call the passed callback function.

//see ProtectedPage.js for further steps!

export const fakeAuth = {
    isAuthenticated: false,
    login(callBack) {
      fakeAuth.isAuthenticated = true
      callBack()
    },
    logout(callBack) {
      fakeAuth.isAuthenticated = false
      callBack()
    },
  }
  