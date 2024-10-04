function showDetails(fieldName) {
    const details = document.getElementById('details');
    
    let fieldInfo = '';
    
    if (fieldName === 'Jalkapallokenttä') {
        fieldInfo = 'Jalkapallokenttä: Hyväkuntoinen nurmikenttä, avoinna klo 8:00 - 22:00. Sopii niin harjoituksiin kuin peleihin.';
    } else if (fieldName === 'Koripallokenttä') {
        fieldInfo = 'Koripallokenttä: Ulkokenttä, valaistus klo 18:00 - 22:00. Loistava paikka kavereiden kesken pelata.';
    } else if (fieldName === 'Tenniskenttä') {
        fieldInfo = 'Tenniskenttä: Kovapintainen kenttä, varaustarve klo 12:00 - 20:00. Voit varata kentän etukäteen netistä.';
    } else {
        fieldInfo = 'Valitse kenttä nähdäksesi tiedot.';
    }

    // Lisää linkki Helsingin kaupungin varaussivulle
    if (fieldName !== 'Valitse kenttä') {
        fieldInfo += '<br><br>Varaa kenttä täältä: <a href="https://www.hel.fi" target="_blank">Helsingin kaupungin etusivut</a>';
    }

    // Asetetaan kentän tiedot elementtiin
    details.innerHTML = fieldInfo;
}

