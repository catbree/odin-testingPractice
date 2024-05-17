export function caesarCipher(str, n) {
    // This function shifts a single character by n places
    const shiftChar = (char, shift) => {
        const start = char >= 'a' && char <= 'z' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
        const offset = char.charCodeAt(0) - start;
        const newOffset = (offset + shift) % 26;
        return String.fromCharCode(start + newOffset);
    };

    // This processes the entire string
    return str.split('').map(char => {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            return shiftChar(char, n);
        }
        return char; // Non-alphabetic characters remain the same
    }).join('');
}