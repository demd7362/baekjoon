function solution(new_id) {
    new_id = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g, '').replace(/\.{2,}/g, '.').replace(/^\.|(\.$)/g, '') || 'a';

    if (new_id.length >= 16) {
        new_id = new_id.substring(0, 15).replace(/\.$/,'');
    }
    const lastWord = new_id[new_id.length-1];
    while (new_id.length < 3) {
        new_id += lastWord;
    }
    return new_id;
}