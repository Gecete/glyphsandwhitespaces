(function() {

    /**
     * Add a new group to the top of print editor glyps panel 
    */
    window.peGlyphs.groups.unshift ({
        groupName: 'Stars',
        glyphs: [            
            {
                name: '★',
                unicode: 'U+2605',
            },
            {
                name: '✰',
                unicode: 'U+2730',
            },
            {
                name: '✵',
                unicode: 'U+2735',
            },
            {
                name: '✯',
                unicode: 'U+272F',
            }
        ],
    });

    /**
    * Add a new group to the bottom of print editor whitespaces panel 
    */
    window.peWhiteSpaces.groups.push ({    
            groupId: '5',
            whiteSpaces: [
                { name: 'My custom space 1', unicode: 'U+0009' },
                { name: 'My custom space 2', unicode: 'U+0009' },
            ],        
    });

    /**
     *  Modifying existing glyphs
     */
    window.peGlyphs.groups.find((group)=> group.groupName === 'Stars')
    .glyphs.find((glyph)=> glyph.name === '✯').unicode = 'U+2735';

    /**
     * Modifying existing whitespaces
     */
    window.peWhiteSpaces.groups.find((group)=> group.groupId === '2')
    .whiteSpaces.find((whiteSpace)=> whiteSpace.name === 'LBL_NON_BREAK').unicode = 'U+0009';

    window.peWhiteSpaces.groups.find((group)=> group.groupId === '1')
   .whiteSpaces.find((whiteSpace)=> whiteSpace.name === 'RIGHT_INDENT_TAB').shortcut = 'alt+mod+U';
 
})();   
