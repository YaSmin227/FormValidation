$(document).ready(function () {
    // Select2 initialize
    $(".select2").select2();
    // Form Validation
    $("#form_data").validate({
        // custom rules
        rules: {
            creditor_name: {
                minlength: 10,
            },
            smobile: {
                pattern: "^(5)([0-9]{8})$",
            },
            sadditional_mobile: {
                pattern: "^(5)([0-9]{8})$",
            },
            email: {
                email: true,
            },
            additional_email: {
                email: true,
            },
        },
        messages: {
            creditor_name: {
                minlength: "يجب ادخال الاسم رباعي",
            },
            smobile: {
                pattern: " يجب ان يبدا ب 5 و يحتوي علي تسع خانات فقط",
            },
            sadditional_mobile: {
                pattern: " يجب ان يبدا ب 5 و يحتوي علي تسع خانات فقط",
            },
            email: {
                email: "يجب ادخال صيغة ايميل صحيحة",
            },
            additional_email: {
                email: "يجب ادخال صيغة ايميل صحيحة",
            },
        },
    });
    // shared rules
    $(".form-control").each(function () {
        var feild_name = $(this).siblings("label").text();
        $(this).rules("add", {
            required: true,
            messages: {
                required: ` حقل ${feild_name} مطلوب`,
            },
        });
    });
});

//   check if Saudi Or not
function select_nationality(that) {
    var nationality = $(`#${that.id} option:selected`).val();
    console.log(nationality);
    if (nationality == 1) {
        $(".id_number").css("display", "block");
        $(".id_number_stranger").css("display", "none");
        $("#id_number").rules("add", {
            required: true,
            maxlength: 10,
            minlength: 10,
            messages: {
                required: `رقم الهوية الوطنية مطلوبة`,
                maxlength: "يجب ان يكون عشر خانات",
                minlength: "يجب ان يكون عشر خانات",
            },
        });
    } else {
        $(".id_number").css("display", "none");
        $("#id_number").rules("add", {
            required: false,
        });
        $(".id_number_stranger").css("display", "block");
        $("#id_number_stranger").rules("add", {
            required: true,
            maxlength: 10,
            minlength: 10,
            messages: {
                required: ` رقم هوية المقيم مطلوبه`,
                maxlength: "يجب ان يكون عشر خانات",
                minlength: "يجب ان يكون عشر خانات",
            },
        });
    }
}
// clicking on next button action
$(".step-btn.next").click(function () {
    if ($("#form_data").valid() === true) {
        $(".step_one").css("display", "none");
        $(".step_two").css("display", "block");
        $(".step_three").css("display", "none");
    }
});

// clicking on Previous button action
$(".step-btn.Previous").click(function () {
    $(".step_one").css("display", "block");
    $(".step_two").css("display", "none");
    $(".step_three").css("display", "none");
});
// clicking on finish button action
$(".step-btn.finish").click(function () {
    if ($("#form_data").valid() === true) {
        $(".step_one").css("display", "none");
        $(".step_two").css("display", "none");
        $(".step_three").css("display", "block");
        document.getElementById("form_data").reset();
        $(".select2").val(null).trigger("change");
    }
    
});

// select residence using select
function select_residence() {
    var residence = $(`#creditor_residency option:selected`).val();
    console.log(residence);
    if (residence == "in") {
        $(".inner").css("display", "block");
        $(".outer").css("display", "none");
    } else {
        $(".inner").css("display", "none");
        $(".outer").css("display", "block");
    }
}
// select residence using radio buttons
function check_residence(frist_class, second_class) {
    $(`.${frist_class}`).css("display", "block");
    $(`.${second_class}`).css("display", "none");
}
