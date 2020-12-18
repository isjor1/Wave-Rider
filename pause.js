        var a = document.getElementById("sound1"); 
        var b = document.getElementById("sound2");
        var c = document.getElementById("sound3");
        var d = document.getElementById("sound4");
        var e = document.getElementById("sound5");
        var f = document.getElementById("sound6");
 

        function pauseAudio() { 
            a.pause();
            b.pause();
            c.pause();
            d.pause();
            e.pause();
            f.pause(); 
            ;
        }

        function lowerVolume() { 
            a.volume = 0.2;
            b.volume = 0.2;
            c.volume = 0.2;
            d.volume = 0.2;
            e.volume = 0.2;
            f.volume = 0.2;
          }
             
          function raiseVolume() { 
            a.volume = 1.0;
            b.volume = 1.0;
            c.volume = 1.0;
            d.volume = 1.0;
            e.volume = 1.0;
            f.volume = 1.0;
          }