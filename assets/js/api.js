async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/nathalyapereira/dio-portfolio/main/data/profile.json?token=GHSAT0AAAAAAB5DGHUSTOENQAARTUXGTTM6Y6XHAUQ';
    const fetching = await fetch(url)
    return await fetching.json();
}