
//Affectation du Toast pour informations complémentaires " Tarifs et prestations" en cours
const toastTrigger = document.getElementById('logo_info')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
    
  })
  
}
