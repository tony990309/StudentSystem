$(document).ready(function () {
    getStudentData();
});


function getStudentData() {
    var id = 0;
    var url = window.location.search; //获取url中"?"符后的字串  
    if (url.indexOf("?") != -1) {
        id = parseInt(url.substr(url.indexOf("=") + 1));
    }

    $.ajax({
        async: false,
        url: "http://localhost:8080/student/load/" + id,
        type: "GET",
        success: function (data) {

            $('table input[name=studentId]').attr("value", data.id);
            $('table input[name=firstName]').attr("value", data.firstName);
            $('table input[name=lastName]').attr("value", data.lastName);
            $('table input[name=email]').attr("value", data.email);

        },
        error: function () {
        }
    })
}

function submit() {
    var param = {};
    param['id'] = $('table input[name=studentId]').val();
    param['firstName'] = $('table input[name=firstName]').val();
    param['lastName'] = $('table input[name=lastName]').val();
    param['email'] = $('table input[name=email]').val();

    $.ajax({
        async: false,
        url: "http://localhost:8080/student/update",
        type: "PUT",
        data: param,
        success: function (data) {
            window.location.href = "list-student.html";
        },
        error: function () {
        }
    })
}