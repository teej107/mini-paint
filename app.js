var color = 'white';
var colors = 'red blue green yellow white';
var mouseDown = false;

$(document).ready(function ()
{
    $('.box').on('click', function ()
    {
        $(this).removeClass(colors);
        $(this).addClass(color);
    });

    $('.box').on('dblclick', function ()
    {
        $(this).removeClass(colors);
    });

    $('#reset').on('click', function ()
    {
        $('.box').removeClass(colors);
    });
    $('#red').on('click', function ()
    {
        color = 'red';
    });
    $('#blue').on('click', function ()
    {
        color = 'blue';
    });
    $('#green').on('click', function ()
    {
        color = 'green';
    });
    $('#yellow').on('click', function ()
    {
        color = 'yellow';
    });
    $('#white').on('click', function ()
    {
        color = 'white';
    });


    $('.box').on('mousemove', function ()
    {
        if (mouseDown)
        {
            $(this).addClass(color);
        }
    });

    $('.box').on('mousedown', function ()
    {
        mouseDown = true;
    });

    $('.box').on('mouseup', function ()
    {
        mouseDown = false;
    });
});