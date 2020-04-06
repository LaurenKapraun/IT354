var navbar = document.getElementsByTagName("header");

function openNav() {
    document.getElementById("navlinks").style.width = "250px";
}

function closeNav() {
    document.getElementById("navlinks").style.width = "0";
}

// Button Styles
function changeBtnSize() {
    $(document).ready(function(){
      var tallestBtn = 0;

      $(this).find('.btn').each(function(){
        if($(this).height() > tallestBtn){
            tallestBtn = $(this).height();
        }
      })
        $(this).find('.btn').height(tallestBtn);
    });
}

changeBtnSize();
