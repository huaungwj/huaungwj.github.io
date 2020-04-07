const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	  {
        name: '勇气',
        artist: '棉子',
        url: 'http://music.163.com/song/media/outer/url?id=1411358329.mp3',
        cover: '/images/5.jpg',
      },
      {
        name: "星星",
        artist: '张杰',
        url: 'http://music.163.com/song/media/outer/url?id=1399004693.mp3',
        cover: '/images/xingxing.jpg',
      },
      {
        name: '这就是爱吗',
        artist: '十豆',
        url: 'http://music.163.com/song/media/outer/url?id=1412242872.mp3',
        cover: '/images/zjsam.jpg',
      },
      {
        name: 'Alone',
        artist: 'Alan Walker / Noonie Bao',
        url: 'http://music.163.com/song/media/outer/url?id=444269135.mp3',
        cover: '/images/alone.jpg',
      },
	  {
        name: 'Umbrella (Matte Remix)',
        artist: 'Matte / Ember Island',
        url: 'http://music.163.com/song/media/outer/url?id=164209623.mp3',
        cover: '/images/1.jpg',
      },
	  {
        name: '大眠 (完整版)原唱：王心凌',
        artist: '小乐哥',
        url: 'http://music.163.com/song/media/outer/url?id=3778678.mp3',
        cover: '/images/2.jpg',
      },
	  {
        name: '世间美好与你环环相扣',
        artist: '柏松',
        url: 'http://music.163.com/song/media/outer/url?id=1363948882.mp3',
        cover: '/images/3.jpg',
      },
	  {
        name: '飞',
        artist: '王恩信Est / 二胖u',
        url: 'http://music.163.com/song/media/outer/url?id=1386259535.mp3',
        cover: '/images/4.jpg',
      }
    ]
});

