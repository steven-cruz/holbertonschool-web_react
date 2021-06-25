import $ from "jquery";

$('doby').append('<p>Holberton Dashboard</p>');
$('doby').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('doby').append('<p>Copyright - Holberton School</p>');

const count = 0;

function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
