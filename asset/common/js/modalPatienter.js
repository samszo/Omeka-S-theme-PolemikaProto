class modalPatienter {
    constructor(params) {
        var me = this;
        var modal;
        var open=false;

        this.show = function (target='body') {
            if(me.open)return false;            
            //merci à https://stephanwagner.me/jBox/documentation
            me.modal = new jBox('Modal', {
                title: 'Patienter',
                overlay: false,
                draggable: 'title',
                closeButton:false,
                repositionOnOpen: true,
                repositionOnContent: true,
                target: target,
                position: {
                    x: 'center',
                    y: 'center'
                },
                content:getModalContent(),
            })
            me.modal.open();
            me.open = true;
        }
        function getModalContent(){
            let html = '<div class="spinner-grow text-danger"></div>';
            html += '<div class="spinner-grow text-warning"></div>';
            html += '<div class="spinner-grow text-success"></div>';
            return html
        }
        this.close = function () {
            me.modal.close();
            me.open = false;
        }

    }
}

  
