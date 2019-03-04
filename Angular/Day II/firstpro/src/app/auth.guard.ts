import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/interfaces';
// import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {   //protecting routes
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
  if(sessionStorage.getItem("pass")=="1234")
  return true;
 {
   
  let pass = prompt("passcode?");
  
   if(pass=='1234')
   {
    sessionStorage.setItem("pass",pass)
    return true;
   }
   else
    return false;
 }
}
  
}
