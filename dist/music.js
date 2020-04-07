const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
        $.ajax({
            url: "https://api.i-meto.com/meting/api?server=netease&type=playlist&id=141998290",
            success: function(e) {
                var aplayerList = new APlayer({
                element: document.getElementById('player'),
                narrow: false,
                autoplay: true,
                showlrc: false,
                mutex: true,
                theme: '#FFF0',
                mode: 'random',
                preload: 'metadata',
                listmaxheight: '200px',
                music:JSON.parse(e)
                });
                window.aplayers || (window.aplayers = []),
                window.aplayers.push(aplayerList)
            }
        })
    ]
});

var ls  = document.getElementById('player');
ls.style.boxShadow = 'none';
ls.style.marginTop = '10px';
$('.ls-list-light').css('background','#d8e2eb69');

