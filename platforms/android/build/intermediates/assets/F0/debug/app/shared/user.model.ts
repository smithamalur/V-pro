export class User {
  username: string;
  password: string;
 
 isnotNull() {
   if(this.username && this.password)
    return true;
 }
}