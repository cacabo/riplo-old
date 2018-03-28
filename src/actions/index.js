// Actions which will be dispatched to the reducers (authReducer.js)

// Dispatch login action, will call appropriate reducer (authReducer.js)
export function login(userId, userType, name, profilePicture) {
  return {
    type: 'LOGIN',
    userId,
    userType,
    name,
    profilePicture,
  };
}

// Dispatch register action, will call appropriate reducer (authReducer.js)
export function register(userId, userType, name, profilePicture) {
  return {
    type: 'REGISTER',
    userId,
    userType,
    name,
    profilePicture,
  };
}

// Dispatch logout action, will call appropriate reducer (authReducer.js)
export function logout() {
  return {
    type: 'LOGOUT'
  };
}
