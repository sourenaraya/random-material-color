var defaultPalette = {
    // Red, Pink, Purple, Deep Purple, Indigo, Blue, Light Blue, Cyan, Teal, Green, Light Green, Lime, Yellow, Amber, Orange, Deep Orange, Brown, Grey, Blue Grey
    '50': ['redlighten-5', 'pinklighten-5', 'purplelighten-5', 'deep-purplelighten-5', 'indigolighten-5', 'bluelighten-5', 'light-bluelighten-5', 'cyanlighten-5', 'teallighten-5', 'greenlighten-5', 'light-greenlighten-5', 'limelighten-5', 'yellowlighten-5', 'amberlighten-5', 'orangelighten-5', 'deep-orangelighten-5', 'brownlighten-5', 'greylighten-5', 'blue-greylighten-5'], 
    '100': ['redlighten-4', 'pinklighten-4', 'purplelighten-4', 'deep-purplelighten-4', 'indigolighten-4', 'bluelighten-4', 'light-bluelighten-4', 'cyanlighten-4', 'teallighten-4', 'greenlighten-4', 'light-greenlighten-4', 'limelighten-4', 'yellowlighten-4', 'amberlighten-4', 'orangelighten-4', 'deep-orangelighten-4', 'brownlighten-4', 'greylighten-4', 'blue-greylighten-4'], 
    '200': ['redlighten-3', 'pinklighten-3', 'purplelighten-3', 'deep-purplelighten-3', 'indigolighten-3', 'bluelighten-3', 'light-bluelighten-3', 'cyanlighten-3', 'teallighten-3', 'greenlighten-3', 'light-greenlighten-3', 'limelighten-3', 'yellowlighten-3', 'amberlighten-3', 'orangelighten-3', 'deep-orangelighten-3', 'brownlighten-3', 'greylighten-3', 'blue-greylighten-3'], 
    '300': ['redlighten-2', 'pinklighten-2', 'purplelighten-2', 'deep-purplelighten-2', 'indigolighten-2', 'bluelighten-2', 'light-bluelighten-2', 'cyanlighten-2', 'teallighten-2', 'greenlighten-2', 'light-greenlighten-2', 'limelighten-2', 'yellowlighten-2', 'amberlighten-2', 'orangelighten-2', 'deep-orangelighten-2', 'brownlighten-2', 'greylighten-2', 'blue-greylighten-2'], 
    '400': ['redlighten-1', 'pinklighten-1', 'purplelighten-1', 'deep-purplelighten-1', 'indigolighten-1', 'bluelighten-1', 'light-bluelighten-1', 'cyanlighten-1', 'teallighten-1', 'greenlighten-1', 'light-greenlighten-1', 'limelighten-1', 'yellowlighten-1', 'amberlighten-1', 'orangelighten-1', 'deep-orangelighten-1', 'brownlighten-1', 'greylighten-1', 'blue-greylighten-1'], 
    '500': ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'], 
    '600': ['reddarken-1', 'pinkdarken-1', 'purpledarken-1', 'deep-purpledarken-1', 'indigodarken-1', 'bluedarken-1', 'light-bluedarken-1', 'cyandarken-1', 'tealdarken-1', 'greendarken-1', 'light-greendarken-1', 'limedarken-1', 'yellowdarken-1', 'amberdarken-1', 'orangedarken-1', 'deep-orangedarken-1', 'browndarken-1', 'greydarken-1', 'blue-greydarken-1'], 
    '700': ['reddarken-2', 'pinkdarken-2', 'purpledarken-2', 'deep-purpledarken-2', 'indigodarken-2', 'bluedarken-2', 'light-bluedarken-2', 'cyandarken-2', 'tealdarken-2', 'greendarken-2', 'light-greendarken-2', 'limedarken-2', 'yellowdarken-2', 'amberdarken-2', 'orangedarken-2', 'deep-orangedarken-2', 'browndarken-2', 'greydarken-2', 'blue-greydarken-2'], 
    '800': ['reddarken-3', 'pinkdarken-3', 'purpledarken-3', 'deep-purpledarken-3', 'indigodarken-3', 'bluedarken-3', 'light-bluedarken-3', 'cyandarken-3', 'tealdarken-3', 'greendarken-3', 'light-greendarken-3', 'limedarken-3', 'yellowdarken-3', 'amberdarken-3', 'orangedarken-3', 'deep-orangedarken-3', 'browndarken-3', 'greydarken-3', 'blue-greydarken-3'], 
    '900': ['reddarken-4', 'pinkdarken-4', 'purpledarken-4', 'deep-purpledarken-4', 'indigodarken-4', 'bluedarken-4', 'light-bluedarken-4', 'cyandarken-4', 'tealdarken-4', 'greendarken-4', 'light-greendarken-4', 'limedarken-4', 'yellowdarken-4', 'amberdarken-4', 'orangedarken-4', 'deep-orangedarken-4', 'browndarken-4', 'greydarken-4', 'blue-greydarken-4'], 
    'A100': ['red-accent-1', 'pink-accent-1', 'purple-accent-1', 'deep-purple-accent-1', 'indigo-accent-1', 'blue-accent-1', 'light-blue-accent-1', 'cyan-accent-1', 'teal-accent-1', 'green-accent-1', 'light-green-accent-1', 'lime-accent-1', 'yellow-accent-1', 'amber-accent-1', 'orange-accent-1', 'deep-orange-accent-1'], 
    'A200': ['red-accent-2', 'pink-accent-2', 'purple-accent-2', 'deep-purple-accent-2', 'indigo-accent-2', 'blue-accent-2', 'light-blue-accent-2', 'cyan-accent-2', 'teal-accent-2', 'green-accent-2', 'light-green-accent-2', 'lime-accent-2', 'yellow-accent-2', 'amber-accent-2', 'orange-accent-2', 'deep-orange-accent-2'], 
    'A400': ['red-accent-3', 'pink-accent-3', 'purple-accent-3', 'deep-purple-accent-3', 'indigo-accent-3', 'blue-accent-3', 'light-blue-accent-3', 'cyan-accent-3', 'teal-accent-3', 'green-accent-3', 'light-green-accent-3', 'lime-accent-3', 'yellow-accent-3', 'amber-accent-3', 'orange-accent-3', 'deep-orange-accent-3'], 
    'A700': ['red-accent-4', 'pink-accent-4', 'purple-accent-4', 'deep-purple-accent-4', 'indigo-accent-4', 'blue-accent-4', 'light-blue-accent-4', 'cyan-accent-4', 'teal-accent-4', 'green-accent-4', 'light-green-accent-4', 'lime-accent-4', 'yellow-accent-4', 'amber-accent-4', 'orange-accent-4', 'deep-orange-accent-4']
};
