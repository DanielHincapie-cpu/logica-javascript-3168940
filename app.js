// Funcionalidad de la página
const darkModeToggle = document.getElementById('dark-mode-toggle');
const playPauseButton = document.getElementById('play-pause');
const nextSongButton = document.getElementById('next-song');
const prevSongButton = document.getElementById('prev-song');
const currentSongTitle = document.getElementById('current-song-title');
const toggleBioButton = document.getElementById('toggle-bio');
const additionalBio = document.getElementById('additional-bio');
const navLinks = document.getElementById('nav-links');
const menuButton = document.getElementById('menu-button');
const allNavLinks = document.querySelectorAll('.nav-links a');
const audioPlayer = document.getElementById('audio-player'); 



let isPlaying = false;
let currentSongIndex = 0;
const songs = [
    // La URL de la canción debe coincidir con el elemento audio y la lista
    { title: "Cariñito", src: "-CARIÑITO- RODOLFO AICARDI (FULL AUDIO).mp3" }, 
    { title: "Colegiala", src: "path/to/colegiala.mp3" }, // Reemplazar con el path real
    { title: "Boquita de caramelo", src: "path/to/boquita.mp3" }, // Reemplazar con el path real
    { title: "Tabaco y Ron", src: "path/to/tabaco.mp3" }, // Reemplazar con el path real
    { title: "Así Empezaron Papá y Mamá", src: "path/to/así.mp3" } // Reemplazar con el path real
];
function loadSong(index) {
    const song = songs[index];
    currentSongTitle.textContent = song.title;
    audioPlayer.src = song.src;

}

// Alternar el modo oscuro
darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});
// ESTO ESTÁ MAL UBICADO Y MAL SINTAXIS EN JAVASCRIPT:
 tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: '#E53E3E',
                        secondary: '#A0AEC0',
                        muted: '#F7FAFC',
                    }
                }
            }
        }
// Alternar el menú de navegación en móviles
menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navLinks.classList.toggle('hidden');
});

// Ocultar el menú al hacer clic en un enlace
allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            navLinks.classList.add('hidden');
        }
    });
});


playPauseButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    
  
    if (isPlaying) {
        audioPlayer.play().catch(error => console.log("Error al reproducir: ", error));
    } else {
        audioPlayer.pause();
    }
    
    playPauseButton.classList.toggle('playing', isPlaying);
    document.getElementById('play-icon').classList.toggle('hidden', isPlaying);
    document.getElementById('pause-icon').classList.toggle('hidden', !isPlaying);
});

// Pasar a la siguiente canción
nextSongButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex); // Usar la nueva función
    if (isPlaying) { // Si estaba reproduciendo, sigue reproduciendo
        audioPlayer.play().catch(error => console.log("Error al reproducir: ", error));
    }
});

// Volver a la canción anterior
prevSongButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex); // Usar la nueva función
    if (isPlaying) { // Si estaba reproduciendo, sigue reproduciendo
        audioPlayer.play().catch(error => console.log("Error al reproducir: ", error));
    }
});


// Alternar la visibilidad de la biografía adicional
toggleBioButton.addEventListener('click', () => {
    const isExpanded = additionalBio.classList.contains('max-h-0');
    if (isExpanded) {
        additionalBio.classList.remove('max-h-0', 'opacity-0');
        additionalBio.style.maxHeight = additionalBio.scrollHeight + 'px';
        toggleBioButton.textContent = 'Ocultar';
    } else {
        additionalBio.style.maxHeight = '0px';
        additionalBio.classList.add('opacity-0');
        toggleBioButton.textContent = 'Leer más';
    }
});

// Observador para animaciones al hacer scroll
const fadeInElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

fadeInElements.forEach(element => {
    observer.observe(element);
});

// Función para desplazamiento suave a las secciones
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 70, // Ajuste para la barra de navegación fija
            behavior: 'smooth'
        });
    }
}
