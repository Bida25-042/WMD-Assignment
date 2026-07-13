function filterSelection(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filters .btn');

    // Update active class on buttons
    buttons.forEach(button => {
        if (button.getAttribute('onclick').includes(category)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function openModal(imageSrc) {

    let modal = document.getElementById('imageModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <img class="modal-content" id="modalImg">
        `;
        document.body.appendChild(modal);

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    const modalImg = document.getElementById('modalImg');
    modalImg.src = imageSrc;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
    }
}
