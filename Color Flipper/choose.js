const btn = document.getElementById('btn');

function triggerdButton() {
    var colorInput = document.getElementById('c_inp').value;
    var colorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
    var rgbColorRegex = /^rgb\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
    var colorNameRegex = /^(aquamarine|black|blue|darkblue|cyan|darkgray|darkgrey|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|forestgreen|fuchsia|gold|gray|grey|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgrey|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)$/;

    if (!colorRegex.test(colorInput) && !rgbColorRegex.test(colorInput) && !colorNameRegex.test(colorInput)) {
        alert('Give a valid color!');
    }
    document.body.style.backgroundColor = colorInput;
}

btn.addEventListener('click', triggerdButton);
document.addEventListener('keydown', function(event){
    if (event.keyCode === 13){
        triggerdButton();
    }
});

