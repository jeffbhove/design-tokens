var StyleDictionary = require('style-dictionary').extend('./config.json');

StyleDictionary.registerTransform({
    name: 'font/size',
    type: 'value',
    transformer: function (prop) {
        if (prop.attributes.category === 'font' &&
            (prop.attributes.type === 'size' || prop.attributes.type==='letter-spacing' || prop.attributes.type==='line-height') &&
            ! prop.original.value.includes('%')) {
            return parseFloat(prop.original.value) + 'rem';
        } else {
            return prop.original.value
        }
    }
});

StyleDictionary.buildAllPlatforms();
