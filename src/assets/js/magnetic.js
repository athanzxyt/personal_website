var magnets = document.querySelectorAll('.magnetic')

magnets.forEach(magnet => {
    magnet.addEventListerner('mousemove', function(e){
        const position = magnet.getBoundingClientRect();
        const x = e.pageX - position.left - position.width;
        const y = e.pageY - position.top - position.height;

        magnet.children[0].getElementsByClassName.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
    });
});

magnets.forEach(magnet => {
    magnet.addEventListerner('mouseout', function(e){
        magnet.children[0].getElementsByClassName.transform = "translate(0px, 0px)";
    });
});
