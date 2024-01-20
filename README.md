A simple web application (Find-Repo) to fetch and display GitHub user profile and repositories.

## Installation

1. Clone the repository.
2. Open `index.html` in your preferred web browser.

## Usage

1. Enter a GitHub username in the provided input field.
2. Click on the "Fetch Repositories" button.
3. View user profile information, repositories, and navigate through pagination.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap (4.5.2)
- GitHub REST API

## Features

- Fetch and display user profile information.
- Fetch and display repositories with additional information and repository URL to navigate to actual repository.
- Paginate through repositories.
- Dark Mode: Toggle dark mode using the moon icon in the top right corner.
- Bookmarks: Bookmark repositories and view them. Click on bookmarks to navigate to the actual GitHub repository.
- Responsive Design: User-friendly experience on various devices.

## Additional Features

- The GitHub API is accessible.
- Usernames are case-sensitive.
- Custom alerts for user actions, such as bookmark addition or removal.

## Edge Cases Handling

- Graceful handling of API errors.
- Display "N/A" for missing user information.

## Credits

- Bootstrap: [Link to Bootstrap](https://getbootstrap.com/)

## Links

- [Live Demo](https://find-github-repo.vercel.app/)
- [GitHub Repository](https://github.com/Akshata309/find-repo.git)
