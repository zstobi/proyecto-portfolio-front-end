import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorToastService {

  constructor() { }

  errorToast(){
    
    // toast creation

    const toast = document.createElement('DIV');
    toast.classList.add('position-fixed');
    toast.classList.add('bottom-0');
    toast.classList.add('end-0');
    toast.classList.add('p-3');
    toast.classList.add('responsiveToast');
    toast.style.zIndex = '11';

    const liveToast = document.createElement('DIV');
    liveToast.classList.add('toast');
    liveToast.classList.add('fade');
    liveToast.classList.add('show');

    const toastHeader = document.createElement('DIV');
    toastHeader.classList.add('toast-header');

    const toastTitle = document.createElement('STRONG');
    toastTitle.classList.add('me-auto');
    toastTitle.textContent = 'Error';
    toastTitle.style.color = '#001cb9';

    const toastBody = document.createElement('DIV');
    toastBody.classList.add('toast-body');
    toastBody.textContent = 'Probablemente hayas agregado un título ya existente. De no ser así, intente nuevamente en otro momento.';

    // toast parenting

    toast.appendChild(liveToast);
    liveToast.appendChild(toastHeader);
    liveToast.appendChild(toastBody);

    toastHeader.appendChild(toastTitle);

    document.body.appendChild(toast);

    setTimeout(()=>{
      document.body.removeChild(toast);
    },5000);
  }
}
