// ==========================================
// 1. PORTFOLIO FILTER FUNCTIONALITY
// ==========================================
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

    // Show or hide gallery images
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// ==========================================
// 2. IMAGE LIGHTBOX (MODAL POP-UP)
// ==========================================
function openModal(imageSrc) {
    // Check if modal already exists, if not, create it
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

        // Close modal if user clicks anywhere outside the image
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Set the clicked image source and display the modal
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
