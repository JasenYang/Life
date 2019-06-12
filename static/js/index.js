var scale = function (btn,bar,title){
    this.btn = document.getElementById(btn);
    this.bar = document.getElementById(bar);
    this.title = document.getElementById(title);
    this.step = this.bar.getElementsByTagName("div")[0];
    this.init = function (){
        var f=this,g=document,b=window,m=Math;
        f.btn.onmousedown=function (e){
            var x=(e||b.event).clientX;
            var l=this.offsetLeft;
            var max=f.bar.offsetWidth-this.offsetWidth;
            g.onmousemove=function (e){
                var thisX=(e||b.event).clientX;
                var to=m.min(max,m.max(-2,l+(thisX-x)));
                f.btn.style.left=to+'px';
                f.ondrag(m.round(m.max(0,to/max)*100),to);
                b.getSelection ? b.getSelection().removeAllRanges() : g.selection.empty();
            };
            g.onmouseup=new Function('this.onmousemove=null');
        };
    };
    this.ondrag = function (pos,x){
        this.step.style.width=Math.max(0,x)+'px';
        this.title.innerHTML=pos*20;
        window.speed = pos * 20;
    };
    this.init();
};
new scale('speed','bar','title'); //实例化一个拖拽
