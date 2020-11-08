$('[data-btn="modal"]').magnificPopup({
  type:'inline',
  showCloseBtn:false,
  callbacks: {
    open: function() {
        $('[data-btn="close-modal"]').on('click',function(){
          $.magnificPopup.close();
        });
    }
  }
});