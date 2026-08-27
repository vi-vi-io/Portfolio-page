// DYNAMIC EVENT HANDLING SYSTEM
// 1. Gather all elements into node list iteration matrices
const dynamicButtons = document.querySelectorAll('.glowBtn');
const modalOverlays = document.querySelectorAll('dialog.modal-overlay');
const genericCloseButtons = document.querySelectorAll('[data-action="close"]');
let lastTrigger;
// 2. Global clean routine for layout resets
function closeAllModals() {
    modalOverlays.forEach(overlay => {
        overlay.classList.remove('is-open');
        if (overlay.open) overlay.close();
    });
}
// 3. Dynamic Loop binding opening triggers to glowing image instances
dynamicButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Read the link value pointing directly to target panel structures
        const targetsModalId = button.getAttribute('data-modal-id');
        const matchingModalElement = document.getElementById(`modal-${targetsModalId}`);
        
        if (matchingModalElement) {
            closeAllModals(); // Wipe any existing frames first
            lastTrigger = button;
            matchingModalElement.showModal();
            matchingModalElement.classList.add('is-open');
        }
    });
    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
        }
    });
});
// 4. Bind listeners to all elements tracking data-action="close"
genericCloseButtons.forEach(closeBtn => {
    closeBtn.addEventListener('click', closeModal);
});
function closeModal(e) {
    // Find closest containing modal matrix structural root node
    const openContainer = e.target.closest('.modal-overlay');
    if (openContainer) {
        openContainer.classList.remove('is-open');
        openContainer.close();
    }
}
// 5. Click outside bounding-box mask routine
modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('is-open');
            overlay.close();
        }
    });
});
// 6. Keep animation state and trigger focus in sync with native dismissal
modalOverlays.forEach(overlay => {
    overlay.addEventListener('close', () => {
        overlay.classList.remove('is-open');
        if (lastTrigger) lastTrigger.focus();
    });
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const openModal = document.querySelector('dialog.modal-overlay[open]');
        if (openModal) openModal.close();
    }
});
