$(function(){TweenMax.to($('#pelota1'),1,{css:{opacity:'1'},delay:.4});var giro=new TimelineLite();giro.to($("#base2"),2,{rotation:'+=360'}).to($("#base3"),2,{rotation:'+=360'},'-=2').to($("#base4"),2,{rotation:'+=360'},'-=2').to($("#base5"),2,{rotation:'+=360'},'-=2').to($("#base6"),2,{rotation:'+=360'},'-=2').to($("#base1"),1.5,{rotation:'+=360'},'-=1.5').to($("#base1"),1.5,{rotation:'-180'},'+=.05').to($("#base2"),1.5,{rotation:'-180'},'-=1.4').to($("#base3"),1.5,{rotation:'-180'},'-=1.4').to($("#base4"),1.5,{rotation:'-180'},'-=1.4').to($("#base5"),1.5,{rotation:'-180'},'-=1.4').to($("#base6"),1.5,{rotation:'-180'},'-=1.4').to($("#base1"),1.5,{rotation:'+=180',ease:Back.easeOut.config(1.7)},'+=.5').to($("#base2"),1.5,{rotation:'+=180',ease:Back.easeOut.config(2)},'-=1.4').to($("#base3"),1.5,{rotation:'+=180',ease:Back.easeOut.config(2)},'-=1.4').to($("#base4"),1.5,{rotation:'+=180',ease:Back.easeOut.config(2)},'-=1.4').to($("#base5"),1.5,{rotation:'+=180',ease:Back.easeOut.config(2)},'-=1.4').to($("#base6"),1.5,{rotation:'+=180',ease:Back.easeOut.config(2)},'-=1.4');var opacidadPelotasUp=new TimelineLite();opacidadPelotasUp.to($('#pelota2'),0.2,{css:{opacity:'1'},delay:1}).to($('#pelota3'),0.2,{css:{opacity:'1'}},'-=0.2').to($('#pelota4'),0.2,{css:{opacity:'1'}}).to($('#pelota5'),0.2,{css:{opacity:'1'}}).to($('#pelota6'),0.2,{css:{opacity:'1'}});var opacidadPelotasDown=new TimelineLite();opacidadPelotasDown.to($('#pelota12'),0.1,{css:{opacity:'1'},delay:4}).to($('#pelota11'),0.1,{css:{opacity:'1'}},'-=0.1').to($('#pelota10'),0.1,{css:{opacity:'1'}},'-=0.1').to($('#pelota9'),0.1,{css:{opacity:'1'}},'-=0.1').to($('#pelota8'),0.1,{css:{opacity:'1'}},'-=0.1').to($('#pelota7'),0.1,{css:{opacity:'1'}},'-=0.1');var Movimiento=new TimelineLite();Movimiento.to($('#animada-4U'),0.5,{css:{width:'30%'},delay:3}).to($('#animada-smart'),0.5,{css:{width:'70%',className:'+=animated bounceInLeft'}},'-=0.5');var introUp=new TimelineLite();introUp.to($('#intro'),0.5,{y:'-150%',ease:Expo.easeIn,delay:6.5}).to($('#intro'),0,{css:{display:"none"}});$("#intro-angle-up").click(function(){TweenMax.to($('#intro'),1,{y:'-150%',ease:Expo.easeIn});});});