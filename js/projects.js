export const projects = [
    {
        title: 'E-commerce Website',
        description: 'A fully responsive e-commerce platform built with modern web technologies.',
        image: 'https://picsum.photos/400/300?random=1',
        tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Task Manager',
        description: 'A productivity app to help users manage their daily tasks and projects.',
        image: 'https://picsum.photos/400/300?random=2',
        tags: ['JavaScript', 'LocalStorage', 'CSS']
    },
    {
        title: 'Weather App',
        description: 'Real-time weather application with location-based forecasts.',
        image: 'https://picsum.photos/400/300?random=3',
        tags: ['API', 'JavaScript', 'CSS']
    }
];

export function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectElement);
    });
}