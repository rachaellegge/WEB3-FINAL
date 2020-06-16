$(document).ready(function () {
    //we write everything here

    $('.add-cart').click(function () {
        $('.count').html(function (i, val) {
            return val * 1 + 1
        });
    });

    $(document).ready(function () {

        //hides dropdown content
        $(".size_chart").hide();

        //unhides first option content
        $("#option1").show();

        //listen to dropdown for change
        $("#size_select").change(function () {
            //rehide content on change
            $('.size_chart').hide();
            //unhides current item
            $('#' + $(this).val()).show();
        });

    });


    new CircleType(document.getElementById('demo1')).dir(-1).radius(384);
    // new CircleType(document.getElementById('demo2')).dir(-1).radius(384);
    // $('.logo').each(function(){
    //     new CircleType(this).dir(-1).radius(384);
    // })


    $('#carouselExampleCaptions').carousel({
        interval: 3000,
    });

    // $('#homePageCarousel').on('slid.bs.carousel', function () {
    //     console.log(this);
    //     $('.logo').each(function(){

    //         new CircleType(this).dir(-1).radius(384);
    //     })
    // })



    $("form.needs-validation").submit(function (event) {
        event.preventDefault();

        if ($("input#exampleInputEmail1").val() === "") {
            $("form.needs-validation").removeClass('needs-validation').addClass('was-validated');
        }
    });

    $("#exampleModal").modal('show');

    $("#inlineCheckbox1").click(function () {
        copyInfo(document.getElementById('myForm'));
    });

    (function () {
        'use strict';
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

    var hide = function() {
  var cb = document.getElementById("checkbox");
  var shipping = document.getElementsByClassName("shipping");
  if (cb.checked) {
    for (var i=0; i<shipping.length; i++) {
      shipping[i].classList.add("hide");
    }
  } else {
    for (var i=0; i<shipping.length; i++) {
      shipping[i].classList.remove("hide");
    }
  }
}
checkbox.addEventListener("click", hide);

});

