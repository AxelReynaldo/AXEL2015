var PEDIDOS= (function () {
    var my = {};
    ////////////
   my.crearEnlaces=function(){
        //Enlaces Page Alumno
     $("body").append('<a id="idGoPedido" href="#idpagePedido"  class="style-31"></a>');  
     
         /* listitem  #listaPrueba */
     $(document).on("click", "#listaPedidos", function(evt)
        {
            /* your code goes here */ 
            //$.ui.popup('Hi there');
            //$(evt.target).attr('id');
            console.log(evt);
            DEPU=evt;
            var idPrecio=$(evt.target).attr('idPrecio');
            console.log(idPrecio);
            ENVIOPEDIDOS.cargarPedidos(idPrecio);
         
        });      
    };

    my.cargarPedidos=function(idProducto){
       console.log(idProducto);
        var param={};
        param.id=idProducto;
        
        $.ajax({
            type:"POST",
            url:"http://192.168.56.1:9090/getPedidos",
            data:"data="+JSON.stringify(param),
            //dataType : 'json',
            dataType : 'text',
            success:function(data){
                var data=JSON.parse(data);
                console.log(data.status);
                
                if(data.status===1){
                    
                    $("#listaPedidos").empty();
                    
                    $("#listaPedidos").append("<li><a>"+data.data.nombre+"</a></li>");
                    for(var i=0;i<data.data1.length;i++){
                        
                        $("#listaPedidos").append("<li><a idPrecio= "+data.data1[i].idP+">"+data.data1[i].peso+ "==>"+data.data1[i].precio+"  NUEVO SOLES"+"</a></li>");
                        
                        
                        
                    }
                    
                }
                if(data.status===0){
                    
                     navigator.notification.alert(
                        'ERROR AL CAPTURAR LISTA',  // message
                        function(){},         // callback
                        'Mensaje',            // title
                        'Aceptar'                  // buttonName
                    );
                    
                }
              
            },
            error:function(data){
            
                console.log("ERROR:"+data);
            }
        });
    
    };//////////////////////////////////////////////////////////////////////////////////
    
    //////////
    return my;
}());