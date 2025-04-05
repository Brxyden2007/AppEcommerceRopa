const loadPolyfill = () => { // eslint-disable-line no-unused-vars
    return new Promise((resolve) => { // eslint-disable-line no-unused-vars
      if (typeof HTMLDialogElement === 'function') { // eslint-disable-line no-undef
        resolve(null); // eslint-disable-line no-undef
      } else { // eslint-disable-line no-undef
        const script = document.createElement('script'); // eslint-disable-line no-undef
        script.src = 'https://cdn.skypack.dev/dialog-polyfill@0.5.6'; // eslint-disable-line no-undef
        script.onload = () => resolve(window.dialogPolyfill); // eslint-disable-line no-undef
        document.body.appendChild(script); // eslint-disable-line no-undef
      } // eslint-disable-line no-undef
    }); // eslint-disable-line no-undef
  };
  
  // Main Function DOM ContentLoaded
  const initDialog = async () => { // eslint-disable-line no-unused-vars
    const dialog = document.querySelector('dialog'); // eslint-disable-line no-undef
    const openDialogBtn = document.getElementById('open_dialog'); // eslint-disable-line no-undef
    const closeDialogBtn = document.getElementById('close_dialog'); // eslint-disable-line no-undef
    
    // Verify PolyFill Loaded
    const dialogPolyfill = await loadPolyfill(); // eslint-disable-line no-undef
  
    // If doesn't had PolyFill , add it
    if (dialogPolyfill && typeof dialog.showModal !== 'function') { // eslint-disable-line no-undef
      dialogPolyfill.registerDialog(dialog); // eslint-disable-line no-undef
    }
  
    // Focus Elements 
    const getFocusableElements = () => { // eslint-disable-line no-unused-vars
      return dialog.querySelectorAll( // eslint-disable-line no-undef
        'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      ); // eslint-disable-line no-undef
    };
  
    // Trap Focus 
    const trapFocus = (e) => { // eslint-disable-line no-unused-vars
      if (e.key === 'Tab') { // eslint-disable-line no-undef
        const focusableElements = getFocusableElements(); // eslint-disable-line no-undef
        if (focusableElements.length === 0) return; // eslint-disable-line no-undef
  
        const firstElement = focusableElements[0]; // eslint-disable-line no-undef
        const lastElement = focusableElements[focusableElements.length - 1]; // eslint-disable-line no-undef
  
        if (!e.shiftKey && document.activeElement === lastElement) { // eslint-disable-line no-undef
          e.preventDefault(); // eslint-disable-line no-undef 
          firstElement.focus(); // eslint-disable-line no-undef
        } else if (e.shiftKey && document.activeElement === firstElement) { // eslint-disable-line no-undef
          e.preventDefault(); // eslint-disable-line no-undef
          lastElement.focus(); // eslint-disable-line no-undef
        } // eslint-disable-line no-undef
      }
    };
  
    // Open Dialog Func 
    const openDialog = () => { // eslint-disable-line no-unused-vars
      dialog.showModal(); // eslint-disable-line no-undef
      dialog.addEventListener('keydown', trapFocus); // eslint-disable-line no-undef
      
      // Focusable Elements 
      const focusableElements = getFocusableElements(); // eslint-disable-line no-undef
      if (focusableElements.length > 0) {  // eslint-disable-line no-undef
        focusableElements[0].focus(); // eslint-disable-line no-undef
      }
    }; // eslint-disable-line no-undef
  
    // Close Dialog Func 
    const closeDialog = (e) => {  // eslint-disable-line no-unused-vars
      e.preventDefault(); // eslint-disable-line no-undef
      dialog.close(); // eslint-disable-line no-undef
      dialog.removeEventListener('keydown', trapFocus); // eslint-disable-line no-undef
      openDialogBtn.focus(); // eslint-disable-line no-undef
    };
  
    // Event listeners
    openDialogBtn.addEventListener('click', openDialog); // eslint-disable-line no-undef
    closeDialogBtn.addEventListener('click', closeDialog); // eslint-disable-line no-undef
  
    // Close When You Click Off The Dialog
    dialog.addEventListener('click', (e) => { // eslint-disable-line no-unused-vars
      const dialogDimensions = dialog.getBoundingClientRect(); // eslint-disable-line no-undef
      if ( 
        e.clientX < dialogDimensions.left || // eslint-disable-line no-undef
        e.clientX > dialogDimensions.right || // eslint-disable-line no-undef
        e.clientY < dialogDimensions.top || // eslint-disable-line no-undef
        e.clientY > dialogDimensions.bottom // eslint-disable-line no-undef
      ) { // eslint-disable-line no-undef
        dialog.close(); // eslint-disable-line no-undef
      }
    }); // eslint-disable-line no-undef
  };
  
  // Event Listener Initializing DOM 
  document.addEventListener('DOMContentLoaded', initDialog);