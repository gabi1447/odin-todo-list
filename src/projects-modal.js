export function setupModalEventListeners() {
    const modal = document.querySelector('#projects-modal');
    const openModal = document.querySelector('.add-new-project');
    const closeModal = document.querySelector('.modal-close-btn');

    openModal.addEventListener('click', () => {
        modal.showModal();
    })

    closeModal.addEventListener('click', () => {
        modal.close();
    })
}
