setInterval(() => {
    const current_time = new Date();
    const hour = current_time.getHours();
    const min = current_time.getMinutes();
    const sec = current_time.getSeconds();

    const win_col = sec % 20;
  
    const element_window = document.querySelector(".window_color");

    if(win_col==0||win_col==19){
        element_window.style.backgroundColor="rgba(0,0,0,0)";
    }
    if(win_col==1||win_col==18){
        element_window.style.backgroundColor="rgba(0,0,0,0.1)";
    }
    if(win_col==2||win_col==17){
        element_window.style.backgroundColor="rgba(0,0,0,0.2)";
    }
    if(win_col==3||win_col==16){
        element_window.style.backgroundColor="rgba(0,0,0,0.3)";
    }
    if(win_col==4||win_col==15){
        element_window.style.backgroundColor="rgba(0,0,0,0.4)";
    }
    if(win_col==5||win_col==14){
        element_window.style.backgroundColor="rgba(0,0,0,0.5)";
    }
    if(win_col==6||win_col==13){
        element_window.style.backgroundColor="rgba(0,0,0,0.6)";
    }
    if(win_col==7||win_col==12){
        element_window.style.backgroundColor="rgba(0,0,0,0.7)";
    }
    if(win_col==8||win_col==11){
        element_window.style.backgroundColor="rgba(0,0,0,0.8)";
    }
    if(win_col==9||win_col==10){
        element_window.style.backgroundColor="rgba(0,0,0,0.9)";
    }
    
  }, 10);
