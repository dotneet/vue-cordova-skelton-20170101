export default function () {
  function callApplicationEntryPoint () {
    let interval = null
    interval = setInterval(function () {
      if (window.applicationEntryPoint !== undefined) {
        clearInterval(interval)
        window.applicationEntryPoint()
      }
    }, 20)
  }

  function onDeviceReady () {
    callApplicationEntryPoint()
  }

  window.onErrorCordovaLoading = () => {
    console.log('ERROR LOADING')
    let evt = document.createEvent('HTMLEvents')
    evt.initEvent('deviceready', true, true)
    document.dispatchEvent(evt)
  }

  document.addEventListener('deviceready', onDeviceReady)
  console.log('INITIALIZED')
};

