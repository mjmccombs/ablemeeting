/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const api_url=function(){
  let api_url= '';//production api url
  if(process.env.NODE_ENV === 'local'){
    
  }
  else if(process.env.NODE_ENV === 'development'){
   
      api_url = 'http://127.0.0.1:8000';
   
      
  }else if(process.env.NODE_ENV === 'production'){
      api_url = 'https://www.api.flipjinn.com';
       
  }
  
 // console.log(process.env);
  
  
  return api_url;
}

export const URL = api_url();