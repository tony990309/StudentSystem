$(document).ready(function () {
    getStudentList();
});

function getStudentList() {
    $.ajax({
        async: false,
        url: "http://localhost:8080/student",
        type: "GET",
        success: function (data) {

            let table = $("#studentTable");
            var student;

            for (var i = 0; i < data.length; i++) {
                student = data[i];

                table.append(
                    '<tr>' +
                    '<td>' + student.firstName + '</td>' +
                    '<td>' + student.lastName + '</td>' +
                    '<td>' + student.email + '</td>' +
                    '<td>' +
                    '<a href="#" onclick="parseStudentId(' + student.id + ')">Update</a> |' +
                    '<a href="#" onclick="deleteStudent(' + student.id + ')">Delete</a>' +
                    '</td>' +
                    '</tr>"'
                );
            }


        },
        error: function () {
        }
    })
}

function parseStudentId(studentId) {
    window.location.href = "update-student-form.html?id=" + studentId;
}

function deleteStudent(studentId) {
    if (confirm('Are you sure you want to delete this student?')) {
        let id = { "id": studentId };
        $.ajax({
            async: false,
            url: "http://localhost:8080/student",
            type: "DELETE",
            data: id,
            success: function (data) {
                location.reload();
            },
            error: function () {
            }
        })
    }

    return false;
}