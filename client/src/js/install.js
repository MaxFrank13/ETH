const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visibility = 'visible';

  butInstall.addEventListener('click', () => {
    event.prompt();
  });
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  butInstall.textContent = 'Welcome!';
  butInstall.setAttribute('disabled', true);
  console.log('👍', 'appinstalled', event);
});
