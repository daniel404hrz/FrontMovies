export default function verify(form,value,errors){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    switch(value) {
        case 'name':
          if(!form[value].length)errors[value]='Este campo es obligatorio'
          else{
            if(/\d/.test(form[value]))errors[value]='no debe contener numeros'
            else{
              if(form[value].length < 4)errors[value]='debe ser mayor a 4 caracteres'
              else if(form[value].length > 10)errors[value]='debe ser menor de 10 caracteres'
              else errors[value] =''
            } 
          }

          break;
        case 'gmail':
          if(!form[value].length)errors[value]='Este campo es obligatorio'
            else{
              
              if(!re.test(form[value]))errors[value]='debe ser un gmail'
              else errors[value]= ''
            }
          break;
        case 'password':
          if(!form[value].length)errors[value]='Este capo es obligatiorio'
          else{
            if(form[value].length < 6)errors[value]='debe ser mayor a 6 caracteres'
            else if(/\d/.test(form[value])=== false)errors[value]='debe contener por lo menos 1 numero'
            else errors[value]=''
          }
          
          break;

        default:
          
      }
      
      return errors

}