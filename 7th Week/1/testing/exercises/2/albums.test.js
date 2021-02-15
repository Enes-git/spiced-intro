const { getAlbumNames } = require('./albums');
const spotify = require('./spotify');

jest.mock('./spotify');

test('album names are in alphabetical order', () => {
    //spotify returns albums as an object of array of objects {[{}]}
    spotify.search.mockResolvedValue({
        albums: {
            items: [{ name: 'First Album' }],
        },
        albums: {
            items: [{ name: 'Second Album' }],
        },
        albums: {
            items: [{ name: 'Fourth Album' }],
        },
        albums: {
            items: [{ name: 'Fifth Album' }],
        },
    });

    return getAlbumNames('meat loaf').then((albumNames) => {
        expect(albumNames).toEqual(albumNames.slice().sort());
    });
});
