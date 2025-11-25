# GameVault - Premium Gaming Showcase

A modern, responsive website dedicated to showcasing a curated collection of games with smooth animations and professional design.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Fully optimized for desktop and mobile devices
- **Interactive Game Cards**: Click to view detailed game information in modal
- **Smooth Animations**: Intro animation, hover effects, and transitions
- **Multiple Pages**: Home, About, Contact, and Feedback pages
- **Rating System**: Interactive star rating for feedback
- **Contact Forms**: Functional contact and feedback forms
- **Navigation**: Smooth scrolling and mobile-friendly navigation

## Project Structure

```
game-showcase/
├── index.html              # Main homepage
├── css/
│   └── style.css           # Complete styling
├── js/
│   └── main.js             # JavaScript functionality
├── pages/
│   ├── about.html          # About page
│   ├── contact.html        # Contact page
│   └── feedback.html       # Feedback page
├── images/                 # Game images (add your images here)
└── assets/                 # Additional assets
```

## Customization

### Adding Your Games

1. **Add Images**: Place your game images in the `images/` folder
2. **Update Game Data**: Edit the `games` array in `js/main.js`:

```javascript
const games = [
    {
        id: 1,
        title: "Your Game Title",
        genre: "Genre",
        rating: 4.8,
        image: "images/your-game-image.jpg",
        description: "Your game description",
        features: [
            "Feature 1",
            "Feature 2",
            "Feature 3"
        ],
        link: "https://your-game-link.com"
    }
    // Add more games...
];
```

### Customizing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #8b5cf6;   /* Secondary accent */
    --accent-color: #ec4899;     /* Highlight color */
    /* ... other colors */
}
```

### Adding More Pages

1. Create new HTML files in the `pages/` folder
2. Follow the existing template structure
3. Update navigation in all HTML files

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript ES6+**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter)

## Browser Support

- Chrome/Chromium 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Getting Started

1. Clone or download this repository
2. Add your game images to the `images/` folder
3. Update the game data in `js/main.js`
4. Customize colors and content as needed
5. Deploy to your hosting service

## Deployment

This website can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any traditional web host

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!