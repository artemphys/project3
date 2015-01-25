//http://jquery.page2page.ru/index.php5/Ajax_%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81_JSON-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85

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
