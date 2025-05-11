        // Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        // Check for saved user preference or use system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            body.classList.add('dark-theme');
        }
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            const isDark = body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
        
        // Category Filter Functionality
        const categoryTabs = document.querySelectorAll('.category-tab');
        
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                categoryTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Get category name
                const category = this.textContent.trim();
                console.log(`Filtering by: ${category}`);
                
                // In a real implementation, you would filter tools here
                // This would involve AJAX calls or filtering an existing dataset
            });
        });
        
        // Tool Card Click Handler
        const toolCards = document.querySelectorAll('.tool-card');
        
        toolCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // Don't trigger if clicking on a link inside the card
                if (!e.target.closest('a')) {
                    const toolName = this.querySelector('h3').textContent;
                    console.log(`Opening tool: ${toolName}`);
                    // In real implementation, navigate to tool page
                }
            });
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    