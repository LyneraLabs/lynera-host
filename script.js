// Load prices from the master configuration file
async function loadPrices() {
    try {
        const response = await fetch('prices.json');
        const prices = await response.json();
        
        // Update each service's price and period
        Object.keys(prices).forEach(serviceKey => {
            const service = prices[serviceKey];
            const priceElement = document.querySelector(`[data-price="${serviceKey}"]`);
            const periodElement = document.querySelector(`[data-period="${serviceKey}"]`);
            
            if (priceElement) {
                priceElement.textContent = service.price;
            }
            
            if (periodElement) {
                periodElement.textContent = service.period;
            }
        });
    } catch (error) {
        console.error('Error loading prices:', error);
        // Fallback: show placeholder text if loading fails
        document.querySelectorAll('[data-price]').forEach(el => {
            if (el.textContent === 'Loading...') {
                el.textContent = 'Contact Us';
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadPrices();
    
    // Set dynamic copyright year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
