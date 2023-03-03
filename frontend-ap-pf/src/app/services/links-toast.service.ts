import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksToastService {

  constructor() { }

  linksToast(){
    
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
    toastTitle.classList.add('h6');
    toastTitle.classList.add('noMargin');
    toastTitle.textContent = 'Links a Redes:';
    toastTitle.style.color = '#00f';

    const toastBody = document.createElement('DIV');
    toastBody.classList.add('toast-body');

    const linkList = document.createElement('UL');
    linkList.classList.add('list-group');

    const itemA = document.createElement('LI');
    const itemB = document.createElement('LI');
    
    itemA.classList.add('list-group-item');
    itemA.classList.add('itemBtns');
    itemB.classList.add('list-group-item');
    itemB.classList.add('itemBtns');

    const lkdn = document.createElement('A');
    const ghb = document.createElement('A');

    lkdn.setAttribute('href','https://www.linkedin.com/in/tobiasbuceta/');
    lkdn.setAttribute('target','blank');
    
    ghb.setAttribute('href','https://github.com/zstobi?tab=repositories');
    ghb.setAttribute('target','blank');

    lkdn.textContent = 'Linkedin';
    ghb.textContent = 'GitHub';

    // toast parenting

    toast.appendChild(liveToast);
    liveToast.appendChild(toastHeader);
    liveToast.appendChild(toastBody);

    toastBody.appendChild(linkList);
    linkList.appendChild(itemA);
    linkList.appendChild(itemB);
    itemA.appendChild(lkdn);
    itemB.appendChild(ghb);

    toastHeader.appendChild(toastTitle);

    document.body.appendChild(toast);

    setTimeout(()=>{
      document.body.removeChild(toast);
    },5000);
  }
}
