export function getInitials(sentence: string): string {
    const trimmedSentence = sentence.trim();

    if (!trimmedSentence) {
        return '';
    }

    const words = trimmedSentence.split(/\s+/);
    const firstLetter = words[0].charAt(0);

    if (words.length === 1) {
        return firstLetter;
    }

    const lastLetter = words[words.length - 1].charAt(0);

    return firstLetter + lastLetter;
}