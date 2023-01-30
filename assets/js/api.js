async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/nathalyapereira/dio-portfolio/main/data/profile.json?token=GHSAT0AAAAAAB5DGHUSO7ULW6AR57Y5JPDMY6XGP7Q';
    const fetching = await fetch(url)
    return await fetching.json();
}