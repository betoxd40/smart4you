$(function(){var estado=0;var click=0;$("#icono-abrir-menu").hover(function(){if(estado==0){TweenMax.to($(".rayas-X"),0.1,{css:{backgroundColor:"#F96D00"}});TweenMax.to($(this).find("#raya-1"),0.24,{css:{width:"30px"}});TweenMax.to($(this).find("#raya-2"),0.24,{css:{width:"30px"}});estado=1;}},function(){if(estado==1){TweenMax.to($(".rayas-X"),0.1,{css:{backgroundColor:"black"}});TweenMax.to($(this).find("#raya-1"),0.24,{css:{width:"26px"}});TweenMax.to($(this).find("#raya-2"),0.24,{css:{width:"21px"}});estado=0;}});$("#icono-abrir-menu").click(function(){click=click+1;if(estado==1&&(click%2)!=0){TweenMax.to($(this).find("#raya-2"),0.4,{css:{rotation:"45",top:15}});TweenMax.to($(this).find("#raya-3"),0.1,{css:{backgroundColor:"transparent"}});TweenMax.to($(this).find("#raya-1"),0.4,{css:{rotation:"-45",top:15}});estado=2;TweenMax.to($("#extendida-izquierda"),.4,{y:"0%"});TweenMax.to($("#extendida-derecha"),.4,{y:"0%"});TweenMax.to($("#cabecera"),.05,{boxShadow:"0 0 0 transparent"});}else if(estado==2&&(click%2)==0){TweenMax.to($(this).find("#raya-2"),0.3,{css:{rotation:"0",top:15}});TweenMax.to($(this).find("#raya-3"),0.2,{css:{backgroundColor:"#F96D00"}});TweenMax.to($(this).find("#raya-1"),0.3,{css:{rotation:"0",top:8}});estado=1;TweenMax.to($("#extendida-izquierda"),.4,{y:"-120%"});TweenMax.to($("#extendida-derecha"),.4,{y:"120%"});TweenMax.to($("#cabecera"),1,{boxShadow:"0 4px 10px rgba(0,0,0,.2)"});}});});