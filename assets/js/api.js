async function fetchProfileData() {
    const url = 'https://github.com/nathalyapereira/dio-portfolio/blob/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json();
}