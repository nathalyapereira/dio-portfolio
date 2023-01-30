async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/nathalyapereira/dio-portfolio/main/data/profile.json?token=GHSAT0AAAAAAB5DGHUSMRNXOOCMGEOTHUOYY6XGIDQ';
    const fetching = await fetch(url)
    return await fetching.json();
}
