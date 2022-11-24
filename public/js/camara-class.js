

class Camara {

    constructor(videoNode) {

        this.videoNode = videoNode;
        console.log('Camara Inicializada');
    }


    encender(){

        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: { width: 300, height: 300 }
    }).then( stream => {

        this.videoNode.srcObject = stream;
        this.stream = stream;
    });

    }


    apagar(){



        this.videoNode.pause();

        if( this.stream) {
         this.stream.getTracks()[0].stop();
        }


    }


    tomarfoto(){

        //Crear un elemento canvas para renderizar la foto
        let canvas = document.createElement('canvas');


        //
        canvas.setAttribute('width', 300);
        canvas.setAttribute('height', 300);

        //obtener el contexto del canvas
        let context = canvas.getContext('2d'); //una simple imagen

        //dibujar la imagen en canvas
        context.drawImage( this.videoNode, 0, 0, canvas.width, canvas.height );


        this.foto = context.canvas.toDataURL();

        //limpieza
        canvas = null;
        context = null;

        return this.foto;

    }


}