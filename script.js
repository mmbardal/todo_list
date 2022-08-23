$(document).ready(function () {
    $("#error").hide(0)
    fetch(URL = 'https://api.openweathermap.org/data/2.5/weather?lat=35.7219&lon=51.3347&appid=b50e7346336505f64018045e66cb159b')
        .then(res => res.json())
        .then(function (data) {
            let description = "state : " + data['weather'][0]['description'];
            $('#description').text(description);



            //convert to centigrad

            help_temp = data['main']['temp'] - 273;


            let temp = "temp : " + Math.round(help_temp);
            $('#temp').text(temp);
        })
})

$('#sub').click(function () {
    //add some thing

    var info = $("#info").val();
    if ($("#info").val() == '') {
        //alerting
        alerter("field is empty");
    }
    else {

        //alerting

        alerter("add succesfully");

        //creating 

        let task_content = info;
        $("#list").append(`<li id='item' class="items"><input type='checkbox' class='box'><span>${task_content}</span><button class="duty" ><svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg></button><button class="duty"><svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg></button></li>`)

        //reset
        $("#info").val('');

        //number of items

        let count = document.querySelectorAll('#item');
        let counter = count.length;
        console.log(counter);
        $('#total').text('total item is: ' + counter);

        let tasks = $(".items");
        for (let i = 0; i < tasks.length; i++) {
            const childs=tasks[i].children;
            console.log(childs);
            childs[2].addEventListener("click", function () {
                console.log("you clicked region number " + i);
            })
        }

    }
})












$("#close-alert").click(function () {
    $("#error").hide(100)

})

//show alert
function alerter(message) {
    $("#detail").text(message);
    $("#error").show(300)

    setTimeout(() => {
        $("#error").hide(300)
    }, 5000); // 👈️ time in milliseconds


}


