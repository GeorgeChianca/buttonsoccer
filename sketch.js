var tela=1; var frame=60; var fimDeJogo=false
//incio tela 2

var largX_campo = 732; var comprY_campo = 382
var posiX_campo = 94; var posiY_campo = 110

var traveY1=243; var traveY2=359
var placarFla=0; var placarFlu=0
//fim tela 2

//tela3 desaf
var contDesaf=0
var desafBolean=false

var PosX_botFlu2= PosX_botFlu; 
var PosY_botFlu2= PosY_botFlu-50
//inicio var tela 21
var PosX_botFla= 305; var PosY_botFla= 300
var raioFla = 35

var PosX_botFlu= 615; var PosY_botFlu= 300
var raioFlu = 35

var bolaX = 460; var bolaY = 295; var raioBola = 15

var cont=0; var seg=0; var minu=0
//fim var tela 21
function setup() {
  createCanvas(950, 520);
  frameRate(frame)
}
function preload() {
  backimg = loadImage('estadio-SS-c.png');
  logo = loadImage('logo1.png')
  criador = loadImage('foto_aluno.jpg')
  professor = loadImage('professor.jpg')
  grama = loadImage("grama2.jpg")
  seta_inicio = loadImage('setapreta.png')
  seta2_inicio = loadImage('setabranca.png')
  botFla = loadImage('botFLA.png');
  botFlu = loadImage('botFLU.png');
  golFla = loadImage('goal_adve.png')
  golFlu = loadImage('goal_fav.png')
  bola =loadImage('bola.png')
  tecla1 =loadImage('tecla1.png')
  tecla2 =loadImage('tecla2.png')
}
function draw() {//inicio funcition draw
  var largura=160
  var altura=45
  var xMenu=365
  var yMenu=240
  
  var linhaGolFlu =posiX_campo-63
  var linhaGolFla = posiX_campo+largX_campo-13
  
  if(tela==1){//inicio tela 1
    background(backimg)
    textAlign("center")
    textSize(30)
    
    image(logo,250,-80,400,400)
    
    
    //inicio iniciar
    stroke(200)
    fill(20)
    rect(xMenu,yMenu,largura,altura,19)
    
    fill(240)
    noStroke()
    text("Partida",450,275)
    
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu && mouseY<yMenu+altura){
      stroke(0)
      fill(240)
      rect(xMenu,yMenu,largura,altura,19)
      fill(10)
      noStroke()
      text("Partida",450,275)
      if(mouseIsPressed){
        tela=2
      } 
  }//fim iniciar
    
    //Inicio Desafio
    stroke(200)
    fill(20)
    rect(xMenu,yMenu+52,largura,altura,19)
    
    fill(240)
    noStroke()
    text("Desafio",450,325)
    
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu+altura+5 && mouseY<yMenu+altura+52){
      stroke(0)
      fill(240)
      rect(xMenu,yMenu+52,largura,altura,19)
      fill(20)
      noStroke()
      text("Desafio",450,325)
      if(mouseIsPressed){
        tela=3
      } 
     }//fim desafio
    
    //Inicio instruções
    stroke(200)
    fill(20)
    rect(xMenu,yMenu+104,largura,altura,19)
    
    fill(240)
    noStroke()
    text("Instruções",450,377)
    
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu+altura+57 && mouseY<yMenu+altura+104){
    stroke(0)
      fill(240)
      rect(xMenu,yMenu+104,largura,altura,19)
      fill(10)
      noStroke()
      text("Instruções",450,377)
      if(mouseIsPressed){
        tela=4
      } 
  }//fim instruções
    
    //Inicio Créditos
    stroke(200)
    fill(20)
    rect(xMenu,yMenu+156,largura,altura,19)
    
    fill(240)
    noStroke()
    text("Créditos",450,430)
    
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu+altura+109 && mouseY<yMenu+altura+156){
    stroke(0)
      fill(240)
      rect(xMenu,yMenu+156,largura,altura,19)
      fill(20)
      noStroke()
      text("Créditos",450,430)
      if(mouseIsPressed){
        tela=5
      } 
  }//fim créditos
  }//fim tela 1
  
  if(tela==2){//inicio da tela 2
    background(backimg)
    
    fill(0,70,30)
    stroke(240)
    rect(60,90,800,420,50)
image(grama,posiX_campo,posiY_campo,largX_campo,comprY_campo)
    image(golFla,linhaGolFlu,posiY_campo+90,75,200)
    image(golFlu,linhaGolFla,posiY_campo+90,75,200)
    
    fill(10,90)
    stroke(20)
    ellipse(30,30,42,42)
    image(seta2_inicio,14,10,30,40)
    retornaTela1()
    
    fill(0)
    rect(400,275,120,50,60)
    textSize(28)
    fill(255)
    text("INICIAR",460,310)
    if(mouseX>400 && mouseX<520 && mouseY>275 && mouseY<325){
      fill(255)
      rect(400,275,120,50,60)
      fill(0)
      text("INICIAR",460,310)
      if(mouseIsPressed){
          tela=21
      }
    }
    //cronometro
    fill(40)
    rect(100,10,200,70,20)
    textSize(65)
    fill(255)
    text("0:00",200,67)
    //fim do cronometro
    placar() 
  }//fim da tela 2
  
  if(tela==21){
    background(backimg)
    fill(10,90)
    stroke(20)
    ellipse(30,30,42,42)
    image(seta2_inicio,14,10,30,40)
    
    placar()
    
    retornaTela1()
    //campo
    fill(0,70,30)
    stroke(240)
    rect(60,90,800,420,50)
    image(grama,posiX_campo,posiY_campo,largX_campo,comprY_campo)
       cronometro()
    
    interacaoFlaFlu()
    stroke(0,50,0)
    fill(140,0,0)
    ellipse(PosX_botFlu, PosY_botFlu,2*raioFlu,2*raioFlu)
    image(botFlu,PosX_botFlu-raioFlu, PosY_botFlu-raioFlu,2*raioFlu,2*raioFlu)
    
    stroke(200,0,0)
    fill(0,0,0)
    ellipse(PosX_botFla, PosY_botFla,2*raioFla,2*raioFla)
    image(botFla,PosX_botFla-raioFla, PosY_botFla-raioFla,2*raioFla,2*raioFla)
    
    bloqBot()
    
    
    movBola()
    stroke(255)
    fill(20)
    ellipse(bolaX,bolaY,2*raioBola,2*raioBola) //bola
    image(bola,bolaX-raioBola,bolaY-raioBola,2*raioBola,2*raioBola)
    
    image(golFla,linhaGolFlu,posiY_campo+90,75,200)
    image(golFlu,linhaGolFla,posiY_campo+90,75,200)
    
    if(bolaX>linhaGolFla){//gol do flamengo
      PosX_botFla= 305;  PosY_botFla= 300
      PosX_botFlu= 615;  PosY_botFlu= 300
      bolaX = 460;  bolaY = 295;
      placarFla++
       }
    if(bolaX<linhaGolFlu+53){//gol do flamengo
      PosX_botFla= 305;  PosY_botFla= 300
      PosX_botFlu= 615;  PosY_botFlu= 300
      bolaX = 460;  bolaY = 295;
      placarFlu++
       }
    
    }//fim tela 21
  if(tela==3){//fim do primeiro desafio
    background(backimg)
    fill(10,90)
    stroke(20)
    ellipse(30,30,42,42)
    fill(0,70,30)
    stroke(240)
    rect(60,90,800,420,50)
    image(seta2_inicio,14,10,30,40)
    fill(100,0,0)
    rect(360,20,210,60,5)
    textSize(45)
    fill(255)
    text(" Gol: "+placarFla,470,65)
    
    reiniciarDesaf()
    
    retornaTela1()
    
    
    cronometroDesafio()
    
    //campo
    fill(0,70,30)
    stroke(240)
    rect(60,90,800,420,50)
    image(grama,posiX_campo,posiY_campo,largX_campo,comprY_campo)

    
    interacaoFlaFluDesaf()
    stroke(0,50,0)
    fill(140,0,0)
    ellipse(PosX_botFlu, PosY_botFlu,2*raioFlu,2*raioFlu)
    image(botFlu,PosX_botFlu-raioFlu, PosY_botFlu-raioFlu,2*raioFlu,2*raioFlu)
    
    stroke(200,0,0)
    fill(0,0,0)
    ellipse(PosX_botFla, PosY_botFla,2*raioFla,2*raioFla)
    image(botFla,PosX_botFla-raioFla, PosY_botFla-raioFla,2*raioFla,2*raioFla)
    
    bloqBotDesaf()
    
    movBolaDesaf()
    stroke(255)
    fill(20)
  ellipse(bolaX,bolaY,2*raioBola,2*raioBola) //bola
    image(bola,bolaX-raioBola,bolaY-raioBola,2*raioBola,2*raioBola)
    
    image(golFla,linhaGolFlu,posiY_campo+90,75,200)
    image(golFlu,linhaGolFla,posiY_campo+90,75,200)
    
    if(bolaX>linhaGolFla){//gol do flamengo
      PosX_botFla= 305;  PosY_botFla= 300
      PosX_botFlu= 615;  PosY_botFlu= 300
      bolaX = 460;  bolaY = 295;
      placarFla++
      desafBolean=true
       }
    if(placarFla==5){//gols pra acabar
      tela=31
    }
    
    proxDesaf()
    }//mudar desafio
  if(tela==31){
    background(backimg)
    fill(250)
    
    fill(10,90)
    stroke(20)
    ellipse(30,30,42,42)
    image(seta2_inicio,14,10,30,40)
    retornaTela1()
    
    fill(250)
    stroke(0)
    rect(225,150,450,150,19)
    fill(0)
    textSize(20)
    text("Parabéns! Você demostrou que é um ótimo \n dibrador, capaz de vencer qualquer time, \n inclusive Europeus",450,200)
    
    }
  if(tela==4){//Inicio tela 4 de instrução
    var botao = ellipse(772,90,35,35)
    background(backimg)
    fill(250)
    stroke(0)
    rect(175,90,600,350,19)
    
    fill(0)
    stroke(250)
    ellipse(772,90,42,42)
    
    fill(250)
    noStroke()
    textSize(30)
    text("x",765,98)
    
    noStroke()
    textSize(20)
    textAlign("center")
    fill(0)
    text("Como jogar",320,140)
    text("Partida",580,140)
    text("Desafio",580,280)
    text("Regras",320,320)
    
    textSize(15)
    textAlign("left")
    image(tecla2,210,155,100,70)
    image(tecla1,210,225,100,70)
    text("Teclas para mover o \njogador Flu",320,180)
    text("Teclas para mover o \njogador Fla",320,250)
    text("1º A partida acaba quando o time \n ultrapassa o tempo de 2 minutos \n 2º Se a partida terminar empatada \n nada irá acontercer ",210,340 )
    text("Inicia uma partida entre o você \n e um amigo. Que vença o \n melhor!",510,180)
    text("1º A partida acaba quando o time \n ultrapassa o tempo de 2 minutos \n 2º Se a partida terminar empatada \n nada irá acontercer ",210,340 )
    text("Faça cinco gols em um minuto para \nmostrar que você é realmente é \ncraque de bola",510,310)
    
    
    if(mouseX>752 && mouseX<792 && mouseY>71 && mouseY<108){
      fill(250)
      stroke(0)
      ellipse(772,90,38,38)
      
      fill(0)
      noStroke()
      textSize(30)
      text("x",765,98)
      if(mouseIsPressed){//mudar para tela 1
        tela=1
      }//mudar para tela 1
       }
  }//Fim tela 4 de instrução
  
  if(tela==5){//inicio tela 5 de créditos
    background(backimg)
    textSize(25)
    textAlign("center")
    
    stroke(0)
    fill(240)
    rect(250,20,390,480,10)
    
    fill(20)
    noStroke()
    text("Desenvolvedor/discente",450,65)
    text("George Lucas Chianca",450,90)
    image(criador,390,100,110,130)   
    text("Docente",450,270)
    text("Rummenig Dantas",450,295)
    image(professor,380,300,150,130)
    
    stroke(200)
    ellipse(640,23,42,42)
    
    fill(255)
    textSize(30)
    text("x",640,31)
    if(mouseX>623 && mouseX<655 && mouseY>5 && mouseY<37){
      fill(255)
      ellipse(640,23,37,37)
      
      fill(0)
      textSize(30)
      text("x",640,31)
      if(mouseIsPressed){//mudar para tela 1
        tela=1
      }//mudar para tela 1
     }
  }//fim tela 5 de creditos
  
}//fim function draw
function telaDeJogo(){
placarFla=0;  placarFlu=0

PosX_botFla= 305;  PosY_botFla= 300;

PosX_botFlu= 615;  PosY_botFlu= 300;

bolaX = 460;  bolaY = 295;  raioBola = 15

cont=0;  seg=0;  minu=0

}
function rebate(){//inicio function rebate 
  if(bolaY<traveY1 && keyIsDown(LEFT_ARROW)){//rebate
    bolaY+=20
  }else if(bolaY>traveY2){ 
    bolaY-=20
  }//fim do rebate
  if(bolaY<traveY1 && keyIsDown(RIGHT_ARROW)){//rebatebola
    bolaY+=20
    }else if(bolaY>traveY2){
    bolaY-=20
    }//fim do rebate
  
  if(bolaY<traveY1 && keyIsDown(65)){//rebate
    bolaY+=20
  }else if(bolaY>traveY2){
    bolaY-=20
  }//fim do rebate
  
  if(bolaY<traveY1 && keyIsDown(68)){//rebatebola
    bolaY+=20
    }else if(bolaY>traveY2){
    bolaY-=20
    }//fim do rebate
}//fim do function rebate
function placar(){//function placar
  fill(255)
    rect(370,25,200,40)
    fill(30)
    rect(340,25,60,40)
    textSize(30)
    fill(255,0,0)
    text("Fla",370,55)
    textSize(30)
    fill(0)
    text(placarFla+"  X  "+placarFlu,455,55)
    fill(200,30,30)
    rect(510,25,60,40)
    fill(0,80,0)
    text("Flu",540,55)
}//fim do function placar

function retornaTela1(){//inicio retornaTela1
  if(mouseX>9 && mouseX<48 && mouseY>9 && mouseY<48){//inicio do botão que volta a tela iniciar
      fill(255)
      ellipse(30,30,38,38)
      image(seta_inicio,14,10,30,40)
      if(mouseIsPressed){
        desafio1()
        tela=1
//reset
telaDeJogo()
fimDeJogo = false
//reset   
      }  
       }//fim do botão que volta a tela iniciar  
  
}//fim da function retornaTela1
function reiniciar(){
  fill(40)
      rect(637,30,130,40,20)
      fill(255)
      textSize(30)
      text("reiniciar",702,60)
    if(mouseX>635 && mouseX<765 && mouseY>28 && mouseY<70){
      fill(130)
      rect(637,30,130,40,20)
      fill(0)
      textSize(30)
      text("reiniciar",702,60)
      if(mouseIsPressed){
        telaDeJogo()
      }
    }
}
function cronometro(){ //cronometro  
    fill(40)
    rect(100,10,200,70,20)
    textSize(65)
    fill(255)
    cont+=1
    seg=parseInt(cont/frame)
    
    if(minu<2){
      if(parseInt(seg/frame)){
       minu++
     }
      if(seg<60){
        if(seg<10){
          fill(255)
          text(minu+":0"+seg,200,67) 
        }else{
          fill(255)
          text(minu+":"+seg,200,67) 
        }
      }else if(seg==60){
        cont=0
        fill(255)
        text(minu+":"+seg,200,67) 
      }
    }else if(minu==2){
      fill(255)
      text("2:00",200,67)
      fimDeJogo =true
      
    fill(0)
    rect(335,175,250,50,60)
    textSize(28)
    fill(255)
    text("JOGAR DE NOVO",460,210)
    if(mouseX>335 && mouseX<602 && mouseY>173 && mouseY<225){
      stroke(0)
      fill(255)
      rect(335,175,250,50,60)
      textSize(28)
      fill(0)
      text("JOGAR DE NOVO",460,210)
      
      if(mouseIsPressed){
        telaDeJogo()
        fimDeJogo =false
      }
    }
    }
  if(minu<2){
      reiniciar()
    }
}//fim do cronometro

function interacaoFlaFlu(){ //interação dos botões Fla Flu
    if(fimDeJogo==false){//trava se o jogo acabar
                  //Botão Flu
    if(PosY_botFlu>posiY_campo+raioFlu+5 && keyIsDown(UP_ARROW)){//mexe pra cima até posiY_campo
      if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioBola+raioFlu+5 && bolaY<110+2*raioBola){//impede bol de entrar no jogador
      PosY_botFlu+=60
      bolaY+=50
         rebate()
      }else{//fim do impedimaento
        PosY_botFlu-=7
      }
    }//fim 
    
    if(PosY_botFlu<posiY_campo+comprY_campo-raioFlu-5 && keyIsDown(DOWN_ARROW)){//mexe pra cima até posiY_campo + comprY_campo
      if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioBola+raioFlu+5 && bolaY>90+comprY_campo){//impede bol de entrar no jogador
      PosY_botFlu-=60
      bolaY-=15
         rebate()
      }else{//fim do impedimento
        PosY_botFlu+=7
      }
    }//fim
    if(PosX_botFlu>posiX_campo+raioFlu+5 && keyIsDown(LEFT_ARROW)){//mexe pra esquerda até posiY_campo
      if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioBola+raioFlu+5 && bolaX<90+2*raioBola){//impede bol de entrar no jogador
      PosX_botFlu+=60
      bolaX+=60
        rebate()
      }else{//fim do impedimento
        PosX_botFlu-=7
      }
    }//fim
    if(PosX_botFlu<largX_campo+posiX_campo-raioFlu-5 && keyIsDown(RIGHT_ARROW)){//mexe pra cima até posiY_campo+largX_campo
       if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioBola+raioFlu+5 && bolaX>800){//impede bol de entrar no jogador
      PosX_botFlu-=60
      bolaX-=60
        rebate()
      }else{//fim do impedimento
        PosX_botFlu+=7
      }
    }//fim
    //botão do fluminense
            //fim da interação do Botão Flu
/////////////////////////////////////////////////////////
                //Botão Fla
    if(PosY_botFla>posiY_campo+raioFla+5 && keyIsDown(87)){//mexe pra cima até posiY_campo
      if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla+5 && bolaY<110+2*raioBola){//impede bol de entrar no jogador
      PosY_botFla+=40
      bolaY+=50
         rebate()
      }else{//fim do impedimento
        PosY_botFla-=7
      }
    }//fim 
    if(PosY_botFla<posiY_campo+comprY_campo-raioFla-5 && keyIsDown(83)){//mexe pra cima até posiY_campo + comprY_campo
      if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla+5 && bolaY>90+comprY_campo){//impede bol de entrar no jogador
      PosY_botFla-=40
      bolaY-=15
        rebate()
      }else{//fim do impedimento
        PosY_botFla+=7
      }
    }//fim
    if(PosX_botFla>posiX_campo+raioFla+5 && keyIsDown(65)){//mexe pra esquerda até posiY_campo
      if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla+5 && bolaX<90+2*raioBola){//impede bol de entrar no jogador
      PosX_botFla+=40
      bolaX+=50
        rebate()
      }else{//fim do impedimento
        PosX_botFla-=7
      }
    }//fim
    if(PosX_botFla<largX_campo+posiX_campo-raioFla-5 && keyIsDown(68)){//mexe pra direita até posiY_campo+largX_campo
      if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla+5 && bolaX>800){//impede bol de entrar no jogador
      PosX_botFla-=50
      bolaX-=50
       rebate()
      }else{//fim do impedimento
        PosX_botFla+=7
      }
    }//fim
    }//trava se o jogo acabar
}//fim da interação do Botão Fla

function movBola(){ //movimeto da bola
    if(bolaY>posiY_campo+raioBola+4){//limite da bola
      if(keyIsDown(UP_ARROW) && dist(bolaX,bolaY,PosX_botFlu,PosY_botFlu)<raioBola+raioFlu) {//movimento da bola para cima
        bolaY-=10
      }//fim do movimento da bola para cima
      if(dist(bolaX,bolaY,PosX_botFla,PosY_botFla)<raioBola+raioFla&&keyIsDown(87)){
     if(keyIsDown(87) && dist(bolaX,bolaY,PosX_botFla,PosY_botFla)<raioBola+raioFla) {//movimento da bola para cima
        bolaY-=10
      }//fim do movimento da bola para cima
     }
    }//fim 
  
 ///////////////////////////////////////////////////// 
    if(bolaY<posiY_campo+comprY_campo-raioBola-4){//limite da bola
      if(keyIsDown(DOWN_ARROW) && dist(bolaX,bolaY,PosX_botFlu,PosY_botFlu)<raioBola+raioFlu ){//movimento da para baixo
        bolaY+=10
      }//fim do movimento da bola para baixo
      if(keyIsDown(83) && dist(bolaX,bolaY,PosX_botFla,PosY_botFla)<raioBola+raioFla ){//movimento da para baixo
        bolaY+=10
      }//fim do movimento da bola para baixo
  }//fim    
/////////////////////////////////////////////////////////
  
    if(bolaX>posiX_campo+raioBola+4){//limite da bola
      if( (keyIsDown(LEFT_ARROW) && dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioBola+raioFla)){// movimento da bola para a esquerda
        bolaX-=10
      } //fim do movimento da bola para esquerda
    }else if(bolaY>traveY1 && bolaY<traveY2 ){
      bolaX-=10
  }//fim
  if(bolaX>posiX_campo+raioBola+4){//limite da bola
      if( (keyIsDown(65) && dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla)){// movimento da bola para a esquerda
        bolaX-=10
      } //fim do movimento da bola para esquerda
    }else if(bolaY>traveY1 && bolaY<traveY2 ){
      console.log("1")
      bolaX-=10
  }//fim
//////////////////////////////////////////////////////////      
    if(bolaX<largX_campo+posiX_campo-raioBola-4){ // limite da bola
      if((keyIsDown(RIGHT_ARROW)||keyIsDown(68)) && (dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioBola+raioFlu||dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla)){//movimento da bola para direita
        bolaX+=10
      }//fim movimento da bola para a direita
    }else if(bolaY>traveY1 && bolaY<traveY2 &&bolaX<largX_campo+posiX_campo-4){
      bolaX+=10
    }//fim
//////////////////////////////////////////////////////////
  
      //bola dentro do raio

  
  //evitar bola de entrar no flu
  if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioFlu+20 && 745<bolaX && keyIsDown(RIGHT_ARROW)){
    bolaY+=15
    bolaX-=10
  }
   if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioFlu+2  && dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFla+raioFlu+20 && PosX_botFlu>PosX_botFla && bolaY<=296){
    bolaY+=15
    bolaX-=10
  }
  if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioFlu+2 && dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFla+raioFlu+20 && PosX_botFlu>PosX_botFla && bolaY>=296){
    bolaY-=15
    bolaX-=10
  }
  
  //fim da bola entrar no flu
  //////////////////////////////////////////////
   //evitar bola de entrar no fla
  if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFlu+20 && 745<bolaX && keyIsDown(LEFT_ARROW)){
    bolaY-=15
    bolaX+=10
  }
   if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFla+2 && dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioFla+raioFlu+20 && PosX_botFlu>PosX_botFla && bolaY<=296){
    bolaY+=15
    bolaX+=10
  }
  if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFla+2 && PosX_botFlu>PosX_botFla && dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioFla+raioFlu+20 && bolaY>=296 ){
    bolaY-=15
    bolaX+=10
  }
  
  //fim da bola entrar no flu
  
}    //fim do movball

function bloqBot(){  //interage os botaoFla e botaoFlu
    if((dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla+3 && keyIsDown(UP_ARROW)) || (keyIsDown(87) && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla+2)){
      if(keyIsDown(UP_ARROW)){
        PosY_botFlu+=5
        PosY_botFla-=5
      }
      if(keyIsDown(87)){
        PosY_botFlu-=5
        PosY_botFla+=5
      }
    }
    if((dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla+3 && keyIsDown(DOWN_ARROW)) || (keyIsDown(83) && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla+2)){
      if(keyIsDown(DOWN_ARROW)){
        PosY_botFlu-=5
        PosY_botFla+=5
      } 
      if(keyIsDown(83)){
        PosY_botFlu+=5
        PosY_botFla-=5
      }
    }
    if((dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla && keyIsDown(LEFT_ARROW)) || (keyIsDown(65) && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla)){
      if(keyIsDown(LEFT_ARROW)){
        PosX_botFlu+=5
        PosX_botFla-=5
      } 
      if(keyIsDown(65)){
        PosX_botFlu-=5
        PosX_botFla+=5
      }
  }
    if((dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla && keyIsDown(RIGHT_ARROW)) || (keyIsDown(68) && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla)){
      if(keyIsDown(RIGHT_ARROW)){
        PosX_botFlu-=5
        PosX_botFla+=5
      } 
      if(keyIsDown(68)){
        PosX_botFlu+=5
        PosX_botFla-=5
      }
  }
////////////////////////////////////////////////////////
    if(dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla){
      if(keyIsDown(UP_ARROW) && keyIsDown(87)){
        if(PosY_botFlu<PosY_botFla){
          PosY_botFlu+=5
          PosY_botFla+=10
           }else if(PosY_botFlu>PosY_botFla){
          PosY_botFlu+=10
          PosY_botFla+=5
        }
      } 
}  
    if(dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla){
      if(keyIsDown(DOWN_ARROW) && keyIsDown(83)){
        if(PosY_botFlu<PosY_botFla){
          //baixo flu em cima
          PosY_botFlu-=10
          PosY_botFla-=5
           }else if(PosY_botFlu>PosY_botFla){
          //baixo fla em cima
          PosY_botFlu-=5
          PosY_botFla-=10
        }
      } 
}  
    if(dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla){
      if(keyIsDown(LEFT_ARROW) && keyIsDown(65)){
        if(PosX_botFlu>PosX_botFla){
          //move pra esquerda flu na frente de fla
          PosX_botFlu+=10
          PosX_botFla+=5
           }else if(PosX_botFlu<PosX_botFla){
          //move pra esquerda fla na frente de flu
          PosX_botFlu+=10
          PosX_botFla+=5
        }
      } 
  }
    if(dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla){
      if(keyIsDown(RIGHT_ARROW) && keyIsDown(68)){
        if(PosX_botFlu>PosX_botFla){
          //move pra esqueda flu na frente de fla
          PosX_botFlu-=5
          PosX_botFla-=10
           }else if(PosX_botFlu<PosX_botFla){
          //move pra esqueda fla na frente de flu
          PosX_botFlu-=10
          PosX_botFla-=5
        }
      } 
  }
}//interage os botaoFla e botaoFlu
function desafio1(){
placarFla=0; fimDeJogo=false

PosX_botFla= 185;  PosY_botFla= 300;

PosX_botFlu= 650;  PosY_botFlu= 300;

bolaX = 360;  bolaY = 295;  raioBola = 15
 contDesaf=0; segDesaf=0; segSub=360
}
function desafio2(){
PosX_botFla= 185;  PosY_botFla= 320;

PosX_botFlu= 650;  PosY_botFlu= 340;
  
PosX_botFlu2=PosX_botFlu; PosY_botFlu2=PosY_botFlu-100

bolaX = 300;  bolaY = 255;  raioBola = 15
}

/////////////////////////////////////////////////////////////////
function cronometroDesafio(){ //cronometro  
    fill(40,100)
    rect(100,10,200,70,20)
    textSize(65)
    fill(255)
    contDesaf+=1
  segDesaf=parseInt(contDesaf/frame)
  segSub=parseInt(59+(segDesaf/frame)-segDesaf)
    if(seg==60){
      text("1:00",200,67)
    }else if(segSub<=59 && segSub>=10){
      text("0:"+segSub,200,67)
    }else if(segSub<10 && segSub>0){
      text("0:0"+seg,200,67)
    }else if(segSub<=0){
      fimDeJogo=true
      seg=0
      text("0:00",200,67)
      fimDejogo=true
      fill(0)
      rect(600,28,200,50,10)
      fill(255)
       textSize(25)
      text("Jogar novamente",700,65) 
      if(mouseX>600 && mouseX<800 && mouseY>30 && mouseY<80){
      fill(255)
      rect(600,28,200,50,10)
      fill(0)
      textSize(25)
      text("Jogar novamente",700)
        if(mouseIsPressed){
          tela=1
          desafio1()
        } 
      }
    }
//////////////////////////////////////////////////////////////////
}//fim do cronometro


///////////////////////////////////////////////////////////////
function interacaoFlaFluDesaf(){
   //interação dos botões Fla Flu
    if(fimDeJogo==false){//trava se o jogo acabar
                  //Botão Flu
    if(PosY_botFlu>posiY_campo+raioFlu+5 ){//mexe pra cima até posiY_campo
      if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioBola+raioFlu+5 && bolaY<110+2*raioBola){//impede bol de entrar no jogador
      PosY_botFlu+=60
      bolaY+=50
         rebate()
      }
    }//fim 
    
    if(PosY_botFlu<posiY_campo+comprY_campo-raioFlu-5){//mexe pra cima até posiY_campo + comprY_campo
      if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioBola+raioFlu+5 && bolaY>90+comprY_campo){//impede bol de entrar no jogador
      PosY_botFlu-=60
      bolaY-=15
         rebate()
      }
    }//fim
    if(PosX_botFlu>posiX_campo+raioFlu+5 ){//mexe pra esquerda até posiY_campo
      if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioBola+raioFlu+5 && bolaX<90+2*raioBola){//impede bol de entrar no jogador
      PosX_botFlu+=60
      bolaX+=60
        rebate()
      }
    }//fim
    if(PosX_botFlu<largX_campo+posiX_campo-raioFlu-5){//mexe pra cima até posiY_campo+largX_campo
       if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioBola+raioFlu+5 && bolaX>800){//impede bol de entrar no jogador
      PosX_botFlu-=60
      bolaX-=60
        rebate()
      }
    }//fim
    //botão do fluminense
            //fim da interação do Botão Flu
//Botão Flu2
    if(PosY_botFlu2>posiY_campo+raioFlu+5 ){//mexe pra cima até posiY_campo
      if(dist(PosX_botFlu2,PosY_botFlu2,bolaX,bolaY)<raioBola+raioFlu+5 && bolaY<110+2*raioBola){//impede bol de entrar no jogador
      PosY_botFlu2+=60
      bolaY+=50
         rebate()
      }
    }//fim 
    
    if(PosY_botFlu2<posiY_campo+comprY_campo-raioFlu-5){//mexe pra cima até posiY_campo + comprY_campo
      if(dist(PosX_botFlu2,PosY_botFlu2,bolaX,bolaY)<raioBola+raioFlu+5 && bolaY>90+comprY_campo){//impede bol de entrar no jogador
      PosY_botFlu2-=60
      bolaY-=15
         rebate()
      }
    }//fim
    if(PosX_botFlu2>posiX_campo+raioFlu+5 ){//mexe pra esquerda até posiY_campo
      if(dist(PosX_botFlu2,PosY_botFlu2,bolaX,bolaY)<raioBola+raioFlu+5 && bolaX<90+2*raioBola){//impede bol de entrar no jogador
      PosX_botFlu2+=60
      bolaX+=60
        rebate()
      }
    }//fim
    if(PosX_botFlu2<largX_campo+posiX_campo-raioFlu-5){//mexe pra cima até posiY_campo+largX_campo
       if(dist(PosX_botFlu2,PosY_botFlu2,bolaX,bolaY)<raioBola+raioFlu+5 && bolaX>800){//impede bol de entrar no jogador
      PosX_botFlu2-=60
      bolaX-=60
        rebate()
      }
    }//fim
    //botão do fluminense
            //fim da interação do Botão Flu2
/////////////////////////////////////////////////////////
                //Botão Fla
    if(PosY_botFla>posiY_campo+raioFla+5 && keyIsDown(87)){//mexe pra cima até posiY_campo
      if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla+5 && bolaY<110+2*raioBola){//impede bol de entrar no jogador
      PosY_botFla+=40
      bolaY+=50
         rebate()
      }else{//fim do impedimento
        PosY_botFla-=7
      }
    }//fim 
    if(PosY_botFla<posiY_campo+comprY_campo-raioFla-5 && keyIsDown(83)){//mexe pra cima até posiY_campo + comprY_campo
      if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla+5 && bolaY>90+comprY_campo){//impede bol de entrar no jogador
      PosY_botFla-=40
      bolaY-=15
        rebate()
      }else{//fim do impedimento
        PosY_botFla+=7
      }
    }//fim
    if(PosX_botFla>posiX_campo+raioFla+5 && keyIsDown(65)){//mexe pra esquerda até posiY_campo
      if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla+5 && bolaX<90+2*raioBola){//impede bol de entrar no jogador
      PosX_botFla+=40
      bolaX+=50
        rebate()
      }else{//fim do impedimento
        PosX_botFla-=7
      }
    }//fim
    if(PosX_botFla<largX_campo+posiX_campo-raioFla-5 && keyIsDown(68)){//mexe pra direita até posiY_campo+largX_campo
      if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla+5 && bolaX>800){//impede bol de entrar no jogador
      PosX_botFla-=50
      bolaX-=50
       rebate()
      }else{//fim do impedimento
        PosX_botFla+=7
      }
    }//fim
    }//trava se o jogo acabar
}//fim da interação do Botão Fla

function bloqBotDesaf(){  //interage os botaoFla e botaoFlu
    if((dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla+3 && keyIsDown(UP_ARROW)) || (keyIsDown(87) && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla+2)){
      if(keyIsDown(87)){
        PosY_botFlu-=5
        PosY_botFla+=5
      }
    }
    if((dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla+3 && keyIsDown(DOWN_ARROW)) || (keyIsDown(83) && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla+2)){
      if(keyIsDown(83)){
        PosY_botFlu+=5
        PosY_botFla-=5
      }
    }
    if((dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla && keyIsDown(LEFT_ARROW)) || (keyIsDown(65) && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla)){
      if(keyIsDown(65)){
        PosX_botFlu-=5
        PosX_botFla+=5
      }
  }
    if((dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla && keyIsDown(RIGHT_ARROW)) || (keyIsDown(68) && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla)){
      if(keyIsDown(68)){
        PosX_botFlu+=5
        PosX_botFla-=5
      }
  }
////////////////////////////////////////////////////////
    if(dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla){
      if(keyIsDown(UP_ARROW) && keyIsDown(87)){
        if(PosY_botFlu<PosY_botFla){
          PosY_botFlu+=5
          PosY_botFla+=10
           }else if(PosY_botFlu>PosY_botFla){
          PosY_botFlu+=10
          PosY_botFla+=5
        }
      } 
}  
    if(dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla){
      if(keyIsDown(DOWN_ARROW) && keyIsDown(83)){
        if(PosY_botFlu<PosY_botFla){
          //baixo flu em cima
          PosY_botFlu-=10
          PosY_botFla-=5
           }else if(PosY_botFlu>PosY_botFla){
          //baixo fla em cima
          PosY_botFlu-=5
          PosY_botFla-=10
        }
      } 
}  
    if(dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla){
      if(keyIsDown(LEFT_ARROW) && keyIsDown(65)){
        if(PosX_botFlu>PosX_botFla){
          //move pra esquerda flu na frente de fla
          PosX_botFlu+=10
          PosX_botFla+=5
           }else if(PosX_botFlu<PosX_botFla){
          //move pra esquerda fla na frente de flu
          PosX_botFlu+=10
          PosX_botFla+=5
        }
      } 
  }
    if(dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla && dist(PosX_botFlu,PosY_botFlu,PosX_botFla, PosY_botFla)< raioFlu+raioFla){
      if(keyIsDown(RIGHT_ARROW) && keyIsDown(68)){
        if(PosX_botFlu>PosX_botFla){
          //move pra esqueda flu na frente de fla
          PosX_botFlu-=5
          PosX_botFla-=10
           }else if(PosX_botFlu<PosX_botFla){
          //move pra esqueda fla na frente de flu
          PosX_botFlu-=10
          PosX_botFla-=5
        }
      } 
  }
    if((dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla+3 && keyIsDown(UP_ARROW)) || (keyIsDown(87) && dist(PosX_botFlu,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla+2)){
      if(keyIsDown(87)){
        PosY_botFlu2-=5
        PosY_botFla+=5
      }
    }
    if((dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla+3 && keyIsDown(DOWN_ARROW)) || (keyIsDown(83) && dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla+2)){
      if(keyIsDown(83)){
        PosY_botFlu2+=5
        PosY_botFla-=5
      }
    }
    if((dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla && keyIsDown(LEFT_ARROW)) || (keyIsDown(65) && dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla)){
      if(keyIsDown(65)){
        PosX_botFlu2-=5
        PosX_botFla+=5
      }
  }
    if((dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla && keyIsDown(RIGHT_ARROW)) || (keyIsDown(68) && dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla)){
      if(keyIsDown(68)){
        PosX_botFlu2+=5
        PosX_botFla-=5
      }
  }
////////////////////////////////////////////////////////
    if(dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla && dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla){
      if(keyIsDown(UP_ARROW) && keyIsDown(87)){
        if(PosY_botFlu2<PosY_botFla){
          PosY_botFlu2+=5
          PosY_botFla+=10
           }else if(PosY_botFlu2>PosY_botFla){
          PosY_botFlu2+=10
          PosY_botFla+=5
        }
      } 
}  
    if(dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla && dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla){
      if(keyIsDown(DOWN_ARROW) && keyIsDown(83)){
        if(PosY_botFlu2<PosY_botFla){
          //baixo flu em cima
          PosY_botFlu2-=10
          PosY_botFla-=5
           }else if(PosY_botFlu2>PosY_botFla){
          //baixo fla em cima
          PosY_botFlu2-=5
          PosY_botFla-=10
        }
      } 
}  
    if(dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla && dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla){
      if(keyIsDown(LEFT_ARROW) && keyIsDown(65)){
        if(PosX_botFlu2>PosX_botFla){
          //move pra esquerda flu na frente de fla
          PosX_botFlu2+=10
          PosX_botFla+=5
           }else if(PosX_botFlu2<PosX_botFla){
          //move pra esquerda fla na frente de flu
          PosX_botFlu2+=10
          PosX_botFla+=5
        }
      } 
  }
    if(dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla && dist(PosX_botFlu2,PosY_botFlu2,PosX_botFla, PosY_botFla)< raioFlu+raioFla){
      if(keyIsDown(RIGHT_ARROW) && keyIsDown(68)){
        if(PosX_botFlu2>PosX_botFla){
          //move pra esqueda flu na frente de fla
          PosX_botFlu2-=5
          PosX_botFla-=10
           }else if(PosX_botFlu2<PosX_botFla){
          //move pra esqueda fla na frente de flu
          PosX_botFlu2-=10
          PosX_botFla-=5
        }
      } 
  }
}//interage os botaoFla e botaoFlu
function movBolaDesaf(){ //movimeto da bola
    if(bolaY>posiY_campo+raioBola+4){//limite da bola
      if(keyIsDown(UP_ARROW) && dist(bolaX,bolaY,PosX_botFlu,PosY_botFlu)<raioBola+raioFlu) {//movimento da bola para cima
        bolaY-=10
      }//fim do movimento da bola para cima
      if(dist(bolaX,bolaY,PosX_botFla,PosY_botFla)<raioBola+raioFla&&keyIsDown(87)){
     if(keyIsDown(87) && dist(bolaX,bolaY,PosX_botFla,PosY_botFla)<raioBola+raioFla) {//movimento da bola para cima
        bolaY-=10
      }//fim do movimento da bola para cima
     }
    }//fim 
  
 ///////////////////////////////////////////////////// 
    if(bolaY<posiY_campo+comprY_campo-raioBola-4){//limite da bola
      if(dist(bolaX,bolaY,PosX_botFlu,PosY_botFlu)<raioBola+raioFlu ){//movimento da para baixo
        bolaY+=10
      }//fim do movimento da bola para baixo
      if(keyIsDown(83) && dist(bolaX,bolaY,PosX_botFla,PosY_botFla)<raioBola+raioFla ){//movimento da para baixo
        bolaY+=10
      }//fim do movimento da bola para baixo
  }//fim    
/////////////////////////////////////////////////////////
  
    if(bolaX>posiX_campo+raioBola+4){//limite da bola
      if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioBola+raioFla){// movimento da bola para a esquerda
        bolaX-=10
      } //fim do movimento da bola para esquerda
    }else if(bolaY>traveY1 && bolaY<traveY2 ){
      
  }//fim
  if(bolaX>posiX_campo+raioBola+4){//limite da bola
      if( (keyIsDown(65) && dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla)){// movimento da bola para a esquerda
        bolaX-=10
      } //fim do movimento da bola para esquerda
    }
//////////////////////////////////////////////////////////      
    if(bolaX<largX_campo+posiX_campo-raioBola-4){ // limite da bola
      if((keyIsDown(RIGHT_ARROW)||keyIsDown(68)) && (dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioBola+raioFlu||dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla)){//movimento da bola para direita
        bolaX+=10
      }//fim movimento da bola para a direita
    }else if(bolaY>traveY1 && bolaY<traveY2 &&bolaX<largX_campo+posiX_campo-4){
      bolaX+=10
    }//fim
//////////////////////////////////////////////////////////
  
      //bola dentro do raio

  //evitar bola de entrar no flu
  if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioFlu+20 && 745<bolaX && keyIsDown(RIGHT_ARROW)){
    bolaY+=15
    bolaX-=10
  }
   if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioFlu+2  && dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFla+raioFlu+20 && PosX_botFlu>PosX_botFla && bolaY<=296){
    bolaY+=15
    bolaX-=10
  }
  if(dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioFlu+2 && dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFla+raioFlu+20 && PosX_botFlu>PosX_botFla && bolaY>=296){
    bolaY-=15
    bolaX-=10
  }
  
  //fim da bola entrar no flu
  //////////////////////////////////////////////
   //evitar bola de entrar no fla
  if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFlu+20 && 745<bolaX && keyIsDown(LEFT_ARROW)){
    bolaY-=15
    bolaX+=10
  }
   if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFla+2 && dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioFla+raioFlu+20 && PosX_botFlu>PosX_botFla && bolaY<=296){
    bolaY+=15
    bolaX+=10
  }
  if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFla+2 && PosX_botFlu>PosX_botFla && dist(PosX_botFlu,PosY_botFlu,bolaX,bolaY)<raioFla+raioFlu+20 && bolaY>=296 ){
    bolaY-=15
    bolaX+=10
  }
  
  //fim da bola entrar no flu
  if(bolaY>posiY_campo+raioBola+4){//limite da bola
      if(keyIsDown(UP_ARROW) && dist(bolaX,bolaY,PosX_botFlu2,PosY_botFlu2)<raioBola+raioFlu) {//movimento da bola para cima
        bolaY-=10
      }//fim do movimento da bola para cima
      if(dist(bolaX,bolaY,PosX_botFla,PosY_botFla)<raioBola+raioFla&&keyIsDown(87)){
     if(keyIsDown(87) && dist(bolaX,bolaY,PosX_botFla,PosY_botFla)<raioBola+raioFla) {//movimento da bola para cima
        bolaY-=10
      }//fim do movimento da bola para cima
     }
    }//fim 
  
 ///////////////////////////////////////////////////// 
    if(bolaY<posiY_campo+comprY_campo-raioBola-4){//limite da bola
      if(dist(bolaX,bolaY,PosX_botFlu2,PosY_botFlu2)<raioBola+raioFlu ){//movimento da para baixo
        bolaY+=10
      }//fim do movimento da bola para baixo
      if(keyIsDown(83) && dist(bolaX,bolaY,PosX_botFla,PosY_botFla)<raioBola+raioFla ){//movimento da para baixo
        bolaY+=10
      }//fim do movimento da bola para baixo
  }//fim    
/////////////////////////////////////////////////////////
  
    if(bolaX>posiX_campo+raioBola+4){//limite da bola
      if(dist(PosX_botFlu2,PosY_botFlu2,bolaX,bolaY)<raioBola+raioFla){// movimento da bola para a esquerda
        bolaX-=10
      } //fim do movimento da bola para esquerda
    }else if(bolaY>traveY1 && bolaY<traveY2 ){
      
  }//fim
  if(bolaX>posiX_campo+raioBola+4){//limite da bola
      if( (keyIsDown(65) && dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla)){// movimento da bola para a esquerda
        bolaX-=10
      } //fim do movimento da bola para esquerda
    }
//////////////////////////////////////////////////////////      
    if(bolaX<largX_campo+posiX_campo-raioBola-4){ // limite da bola
      if((keyIsDown(RIGHT_ARROW)||keyIsDown(68)) && (dist(PosX_botFlu2,PosY_botFlu2,bolaX,bolaY)<raioBola+raioFlu||dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioBola+raioFla)){//movimento da bola para direita
        bolaX+=10
      }//fim movimento da bola para a direita
    }else if(bolaY>traveY1 && bolaY<traveY2 &&bolaX<largX_campo+posiX_campo-4){
      bolaX+=10
    }//fim
//////////////////////////////////////////////////////////
  
      //bola dentro do raio

  //evitar bola de entrar no flu
  if(dist(PosX_botFlu2,PosY_botFlu2,bolaX,bolaY)<raioFlu+20 && 745<bolaX && keyIsDown(RIGHT_ARROW)){
    bolaY+=15
    bolaX-=10
  }
   if(dist(PosX_botFlu2,PosY_botFlu2,bolaX,bolaY)<raioFlu+2  && dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFla+raioFlu+20 && PosX_botFlu2>PosX_botFla && bolaY<=296){
    bolaY+=15
    bolaX-=10
  }
  if(dist(PosX_botFlu2,PosY_botFlu2,bolaX,bolaY)<raioFlu+2 && dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFla+raioFlu+20 && PosX_botFlu2>PosX_botFla && bolaY>=296){
    bolaY-=15
    bolaX-=10
  }
  
  //fim da bola entrar no flu
  //////////////////////////////////////////////
   //evitar bola de entrar no fla
  if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFlu+20 && 745<bolaX && keyIsDown(LEFT_ARROW)){
    bolaY-=15
    bolaX+=10
  }
   if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFla+2 && dist(PosX_botFlu2,PosY_botFlu2,bolaX,bolaY)<raioFla+raioFlu+20 && PosX_botFlu2>PosX_botFla && bolaY<=296){
    bolaY+=15
    bolaX+=10
  }
  if(dist(PosX_botFla,PosY_botFla,bolaX,bolaY)<raioFla+2 && PosX_botFlu2>PosX_botFla && dist(PosX_botFlu2,PosY_botFlu2,bolaX,bolaY)<raioFla+raioFlu+20 && bolaY>=296 ){
    bolaY-=15
    bolaX+=10
  }
  
  //fim da bola entrar no flu 2
}    //fim do movball

function reiniciarDesaf(){
  fill(40)
      rect(637,30,130,40,20)
      fill(255)
      textSize(30)
      text("reiniciar",702,60)
    if(mouseX>635 && mouseX<765 && mouseY>28 && mouseY<70){
      fill(250)
      rect(637,30,130,40,20)
      fill(0)
      textSize(30)
      text("reiniciar",702,60)
      if(mouseIsPressed){
        desafio1()
      }
    }
}

function proxDesaf(){
if(placarFla!=5 &&placarFla!=0 && (placarFla+1)%2==0){
      stroke(0,50,0)
      fill(140,0,0)
      ellipse(PosX_botFlu2, PosY_botFlu2,2*raioFlu,2*raioFlu)
      image(botFlu,PosX_botFlu2-raioFlu, PosY_botFlu2-raioFlu,2*raioFlu,2*raioFlu)
  if( desafBolean==true){      
    desafio2()
      desafBolean=false
    }
    }
}