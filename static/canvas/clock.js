/**
 * Created by lee on 2017/6/20.
 */

var numData = [
    "1111/1001/1001/1001/1001/1001/1111", //0
    "0001/0001/0001/0001/0001/0001/0001", //1
    "1111/0001/0001/1111/1000/1000/1111", //2
    "1111/0001/0001/1111/0001/0001/1111", //3
    "1001/1001/1001/1111/0001/0001/0001", //4
    "1111/1000/1000/1111/0001/0001/1111", //5
    "1111/1000/1000/1111/1001/1001/1111", //6
    "1111/0001/0001/0001/0001/0001/0001", //7
    "1111/1001/1001/1111/1001/1001/1111", //8
    "1111/1001/1001/1111/0001/0001/1111", //9
    "0000/0000/0010/0000/0010/0000/0000" //:
]

var clock_canvas = document.getElementById("cas"),
    clock_ctx = clock_canvas.getContext('2d');
    // bgcanvas = document.getElementById("bgcas"),
    //clock_bg_ctx = bgcanvas.getContext("2d");

//bgcanvas.width = clock_canvas.width;
// bgcanvas.height = clock_canvas.height;

var P_radius = 6, Gravity = 9.8;
var ClockTime = function () {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.color = "";
    this.visible = false;
    this.drop = false;
}
var lastColor;
ClockTime.prototype = {
    constructors: ClockTime,
    paint: function () {		//绘制自身
        if (lastColor !== this.color) {
            clock_ctx.fillStyle = lastColor = this.color;
        }
        clock_ctx.beginPath();
        clock_ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        clock_ctx.fill();
    },
    reset: function (x, y, color) {		//重置
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.color = color;
        this.visible = true;
        this.drop = false;
        this.radius = 0;
    },
    isDrop: function () {		//落下
        this.drop = true;
        var vx = Math.random() * 15 + 10
        var vy = -Math.random() * 50 + 10;
        this.vx = Math.random() >= 0.5 ? -vx : vx;
        this.vy = vy;
    },
    update: function (time) {		//每一帧的动作
        if (this.drop) {
            this.x += this.vx * time;
            this.y += this.vy * time;

            var vy = this.vy + Gravity * time;

            if (this.y >= clock_canvas.height - P_radius) {
                this.y = clock_canvas.height - P_radius
                vy = -vy * 0.8;
            }

            this.vy = vy;

            if (this.x < -P_radius || this.x > clock_canvas.width + P_radius || this.y > clock_canvas.height + P_radius) {
                this.visible = false;
            }
        }

        if (this.radius < P_radius) {
            this.radius += 0.5;
        }
    }
}

window.RAF = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var timeCount_0 = 0, timeCount_1 = 0, particles = [];
function initAnimate() {
    for (var i = 0; i < 200; i++) {
        var p = new ClockTime();
        particles.push(p);
    }

    timeCount_0 = new Date();
    timeCount_1 = new Date();

    //drawBg();

    setTime(timeCount_0);
    clock_animate();
}

function clock_animate() {
    clock_ctx.clearRect(0, 0, clock_canvas.width, clock_canvas.height);

    var timeCount_2 = new Date();

    if (timeCount_1 - timeCount_0 >= 1000) {
        setTime(timeCount_1);
        timeCount_0 = timeCount_1;
    }

    particles.forEach(function (p) {
        if (p.visible) {
            p.update(16 / 70);
            p.paint();
        }
    });

    timeCount_1 = timeCount_2;

    RAF(function(){clock_animate()})
}


var X_J = 10;       //圆点间距
var xjg = 20;       //各个字母之间的距离
var yjg = 22;       //每一栏上下距离
// function drawBg() {
//     var tx = (clock_canvas.width - ((P_radius * 2 + X_J) * 4 * 8 + 7 * xjg)) / 2;
//     for (var i = 0; i < 8; i++) {
//         var ty = (clock_canvas.height - ((P_radius + yjg) * 6)) / 2;
//         for (var j = 0; j < numData[0].length; j++) {
//             var tt = numData[0].charAt(j);
//             if (tt === "/") {
//                 ty += yjg;
//             } else if(tt==1 || tt==0){
//                 var x = tx + j % 5 * (P_radius * 2 + X_J),
//                     y = ty;
//                 clock_bg_ctx.beginPath();
//                 clock_bg_ctx.arc(x, y, P_radius, 0, 2 * Math.PI);
//                 //clock_bg_ctx.fillStyle = "#FFF";
//                 clock_bg_ctx.fillStyle = "#FFA500";
//                 clock_bg_ctx.fill();
//             }
//         }
//         tx += xjg + 4 * (P_radius * 2 + X_J);
//     }
// }

var lastDate;
function setTime(time) {
    var h = time.getHours() + "",
        m = time.getMinutes() + "",
        s = time.getSeconds() + "";
    h = h.length === 1 ? "0" + h : h;
    m = m.length === 1 ? "0" + m : m;
    s = s.length === 1 ? "0" + s : s;

    var nowdate = h + ":" + m + ":" + s;

    var color = "";
    var i = 0;

//        跟上一次的时间进行比较，获取改变的字符点
    if(lastDate){
        for(var k=0;k<nowdate.length;k++){
            if(lastDate.charAt(k) !== nowdate.charAt(k)){
                i=k;
                break;
            }
        }
    }
    lastDate = nowdate;

    var tx = (clock_canvas.width - ((P_radius * 2 + X_J) * 4 * 8 + 7 * xjg)) / 2; //计算时间的x轴值
    var ty = (clock_canvas.height - ((P_radius + yjg) * 6)) / 2;  //计算时间的y轴值
//        遍历时间字符
    for (; i < nowdate.length; i++) {
        var charX = tx + i*(xjg + 4 * (P_radius * 2 + X_J));   //计算该字符的X轴值
        var charY = ty;

        var timeChar = nowdate.charAt(i);
        var text = numData[timeChar === ":" ? 10 : +timeChar];     //获取该字符的映射表

        if(i<3){
            color = "#279548";
        }else if(i<6){
            color = "#D65050";
        }else {
            color = "#797C17";
        }

        for(var j=0;j<text.length;j++){
            var tt = text.charAt(j);
            if(tt==="/"){
                charY+=yjg;
            }else{
                var x = charX + j % 5 * (P_radius * 2 + X_J);
                var y = charY;
                var pp = null;
                var usefullp = null;

                for(var ref=0;ref<particles.length;ref++){
                    var p = particles[ref];
                    if(p.visible&&p.x===x&&p.y===y){
                        pp = p;
                    }else if(!p.visible&&!usefullp){
                        usefullp = p;
                    }
                }

                if(pp&&tt==0){
                    pp.isDrop();
                }else if(!pp&&tt==1){
                    usefullp.reset(x , y , color);
                }
            }
        }
    }
}

initAnimate()
