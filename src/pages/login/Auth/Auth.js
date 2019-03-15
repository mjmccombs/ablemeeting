import auth0 from 'auth0-js'

import Auth0Lock from 'auth0-lock'

export default class Auth {
  //   auth0 = new auth0.WebAuth({
  //     domain: 'ablemeeting.auth0.com',
  //     clientID: 'AFmMG2PDCHzIhbi4x5VlhtMsCGFo5CyF',
  //     redirectUri: 'http://localhost:3000/callback',
  //     responseType: 'token id_token',
  //     scope: 'openid',
  //   })

  handleAuthenticated = authResult => {
    this.authResult = authResult
    this.lock.getUserInfo(authResult.accessToken, this.returnLogin)
  }

  returnLogin = (error, profile) => {
    if (error) {
      console.log(error)
      // Handle error
      return
    } else {
      this.loginSuccess(profile, this.authResult)
    }
  }

  constructor(loginSuccess) {
    this.loginSuccess = loginSuccess

    var options = {
      auth: {
        redirect: false,
        redirectUri: process.env.URL + 'user/login',
      },
    }

    this.lock = new Auth0Lock(
      'AFmMG2PDCHzIhbi4x5VlhtMsCGFo5CyF',
      'ablemeeting.auth0.com',
      options
    )

    this.lock.on('authenticated', this.handleAuthenticated)
  }

  login() {
    this.lock.show()
  }
}
