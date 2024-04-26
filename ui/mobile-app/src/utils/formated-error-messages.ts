export const formatRegErrors = (field: string, status: string) => {
  if (field === 'login') {
    switch (status) {
      case 'INVALID_INPUT_DATA':
        return 'Username can only start with lowercase letters of the Latin alphabet'
      case 'ALREADY_EXIST':
        return 'Username already in use'
      default:
        break
    }
  } else if (field === 'email') {
    switch (status) {
      case 'INVALID_INPUT_DATA':
        return 'Invalid email format'
      case 'ALREADY_EXIST':
        return 'Email already in use'
      default:
        break
    }
  } else {
    switch (status) {
      case 'INVALID_INPUT_DATA':
        return 'Password must be at least 6 characters long and include an upper and lower cases, a digit and a special character'
      default:
        break
    }
  }
}
