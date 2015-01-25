

var app = {};
app.getJson = function() {
    $.getJSON('package.json', function(data){
        data.forEach(app.addObject(data));
    });
};
app.getJson();
app.addObject = function(data) {
    console.log(data.style.width);
    var buttonId = data.attr.id,
        content =data.content,
        buttonWidth = data.style.width,
        buttonPadding = data.style.padding,
        buttonHeight = data.style.height,
        buttonBackgroundColor = data.style.backgroundColor,
        buttonBorder = data.style.border,
        buttonborderRadius = data.style.borderRadius;
    $('body').append('<div id="' + buttonId + '">' + content + '</div>');
    $('div').css({'width':buttonWidth,
        'height':buttonHeight,
        'background-color':buttonBackgroundColor,
        'border':buttonBorder,
        'border-radius':buttonborderRadius,
        'padding':buttonPadding});

};
