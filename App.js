// Assume this function somewhere in your project makes an API call to fetch services
async function fetchServices() {
    const response = await fetch("https://api.yourautorepairshop.com/services");
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

// A simple cache object that stores the results
let servicesCache = null;

// Modified fetchServices to use cache
async function fetchServicesWithCache() {
    // Return cached data if available
    if (servicesCache) return servicesCache;

    const response = await fetch("https://api.yourautorepairshop.com/services");
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    servicesCache = await response.json(); // Store to cache after fetching
    return servicesBer;
}