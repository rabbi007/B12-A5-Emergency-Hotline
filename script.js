

console.log('Java script file connected');


// <!------------------ Java Script Section ---------------------------------->


// Initialize necessary variables
let heartCount = 0;
let copyCount = 0;
let coinCount = 100; // Starting coin count
let callHistory = [];

// Update the heart count display
function updateHeartCount() {
    document.getElementById('heartCount').innerText = heartCount;
}

// Update the copy count display
function updateCopyCount() {
    document.getElementById('copyCount').innerText = copyCount;
}

// Update the coin count display
function updateCoinCount() {
    document.getElementById('coinCount').innerText = coinCount;
}

// Handle heart icon click to increase heart count
const heartIcons = document.querySelectorAll('#card-heart');
heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        heartCount++;
        updateHeartCount();
    });
});

// Handle copy button click to increase copy count
const copyBtns = document.querySelectorAll('.copyBtn');
copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        copyCount++;
        updateCopyCount();

        // Get the phone number from the card
        const contactNumber = e.target.closest('.card').querySelector('#contactNumber').innerText;

        // Copy to clipboard
        navigator.clipboard.writeText(contactNumber).then(() => {
            alert('Phone number copied: ' + contactNumber);
        }).catch(() => {
            alert('Failed to copy');
        });
    });
});

// Handle call button click to check coins first, then add to call history and deduct coins
const callBtns = document.querySelectorAll('.callBtn');
callBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const serviceName = e.target.closest('.card').querySelector('#cardTitle').innerText;
        const contactNumber = e.target.closest('.card').querySelector('#contactNumber').innerText;

        // Check if there are enough coins before proceeding
        if (coinCount < 20) {
            alert('Not enough coins! Please add at least 20 coins to make a call');
            return; // Exit the function if not enough coins
        }

        // Get the current time and format it
        const currentTime = new Date().toLocaleString();

        // Deduct 20 coins for the call
        coinCount -= 20;
        updateCoinCount();

        // Show alert with service name and number after deducting coins
        alert(`Calling: ${serviceName} - ${contactNumber}`);

        // Add the dialed service name and number to the call history
        callHistory.push({
            service: serviceName,
            number: contactNumber,
            time: currentTime
        });

        // Update the call history display
        displayCallHistory();
    });
});

// Display call history in the sidebar
function displayCallHistory() {
    const sidebarContainer = document.getElementById('sidebarCartContainer');
    sidebarContainer.innerHTML = '';

    callHistory.forEach((call, index) => {
        const historyItem = document.createElement('div');
        historyItem.classList.add('p-2', 'border-b', 'border-gray-200');
        historyItem.innerHTML = `
                <span>${index + 1}. ${call.service} - ${call.number} <small class="text-gray-500">(${call.time})</small></span>
            `;
        sidebarContainer.appendChild(historyItem);
    });
}

// Clear the call history
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
    callHistory = [];
    displayCallHistory();
});

// Update the initial counts
updateHeartCount();
updateCopyCount();
updateCoinCount(); // Display initial coin count

