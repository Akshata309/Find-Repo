const usernameInput = document.getElementById('usernameInput');
const repositoriesContainer = document.getElementById('repositoriesContainer');

async function fetchGithubRepositories() {
    const username = usernameInput.value.trim();

    if (username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const repositories = await response.json();
            displayRepositories(repositories);
        } catch (error) {
            console.error('Error fetching Github repositories:', error);
        }
    }
}

function displayRepositories(repositories) {
    repositoriesContainer.innerHTML = '';

    repositories.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.classList.add('repository-card');

        const repoName = document.createElement('h3');
        repoName.textContent = repo.name;

        const repoDescription = document.createElement('p');
        repoDescription.textContent = repo.description || 'No description available.';

        const repoTopics = document.createElement('p');
        repoTopics.textContent = `Topics: ${repo.topics.join(', ') || 'No topics available.'}`;

        repoCard.appendChild(repoName);
        repoCard.appendChild(repoDescription);
        repoCard.appendChild(repoTopics);

        repositoriesContainer.appendChild(repoCard);
    });
}
