$(document).ready(function() {
    $.ajax({
        url: 'https://kerbau.odaje.biz/getstaff.php',
        method: 'GET',
        success: function(data) {
            const staffData = JSON.parse(data);
            staffData.forEach(item => {
                const staff = JSON.parse(item);
                if (staff.status !== 1) {
                    $('#emailList').append(`<li class="list-group-item">
                        <a href="secondPage.html?id=${staff.employeeNumber}">${staff.email}</a>
                    </li>`);
                }
            });
        },
        error: function(err) {
            console.error('Error fetching staff data:', err);
        }
    });
});
