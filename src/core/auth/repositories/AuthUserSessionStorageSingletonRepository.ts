import UserAuthenticated from "../entities/UserAuthenticated";

export default interface AuthUserSessionStorageSingletonRepository{
  checkAuhenticated(): boolean
  save(userAuthenticated: UserAuthenticated): UserAuthenticated;
  get(): UserAuthenticated;
  remove(): void;
}
