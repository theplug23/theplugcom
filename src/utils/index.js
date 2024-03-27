export function dateParser(date, format='fr-FR') {
    let dateParsed = new Date(date).toLocaleDateString(format, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }) 
    
    return dateParsed
}

export function dateParserTime(date, format='fr-FR') {
    let dateParsed = new Date(date).toLocaleDateString(format, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }) 
    
    return dateParsed
}

export function longueurTexte(word) {
    let sentence = new String(word);

    return sentence.substring(0, 100); 
}