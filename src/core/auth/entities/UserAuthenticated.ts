export default class UserAuthenticated{
  constructor(public token: string, public username: string, public authenticated: boolean){}
}
