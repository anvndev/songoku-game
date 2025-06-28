/** Dans un objet contenant les propriétés current et max,
 * incrémente current dans Z/maxZ et en ajoute +1
 * 
 * @param {objet} objet l'objet
 * @returns {int} la valeur de objet.current
 */
function anneauxIncrementation (objet)
{
    return objet.current == objet.max? 1 : objet.current+1;
}

/** Renvoie un nombre entier aléatoire
 * 
 * @param {int} min le minimum de l'ensemble des valeurs que le nombre peut prendre
 * @param {int} max le maximum
 * @returns la nombre aléatoire
 */
function rand(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Play a sound effect from the given source file. If the file is missing, fallback to punch.mp3.
 * @param {string} src - Path to the sound file
 */
function playSound(src) {
    // Fallback to punch.mp3 if the requested file does not exist
    fetch(src, { method: 'HEAD' })
        .then(res => {
            if (res.ok) {
                const audio = new Audio(src);
                audio.volume = 0.5;
                audio.play();
            } else {
                // Fallback to punch.mp3
                const audio = new Audio('sounds/punch.mp3');
                audio.volume = 0.5;
                audio.play();
            }
        })
        .catch(() => {
            // Fallback to punch.mp3 on error
            const audio = new Audio('sounds/punch.mp3');
            audio.volume = 0.5;
            audio.play();
        });
}