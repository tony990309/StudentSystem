function submit() {
    var param = {};
    param['firstName'] = $('table input[name=firstName]').val();
    param['lastName'] = $('table input[name=lastName]').val();
    param['email'] = $('table input[name=email]').val();

    $.ajax({
        async: false,
        url: "http://localhost:8080/student/add",
        type: "POST",
        data: param,
        success: function (data) {
            window.location.href = "list-student.html";
        },
        error: function () {
        }
    })
}