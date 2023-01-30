async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/nathalyapereira/dio-portfolio/main/data/profile.json?token=GHSAT0AAAAAAB5DGHUSR656EY4AQCA6W2VQY6W7VPQ';
    const fetching = await fetch(url)
    return await fetching.json();
}