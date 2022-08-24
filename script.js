$(document).ready(function () {
    $("#error").hide(0)
    fetch(URL = 'https://api.openweathermap.org/data/2.5/weather?lat=35.7219&lon=51.3347&appid=b50e7346336505f64018045e66cb159b')
        .then(res => res.json())
        .then(function (data) {
            let description = "state : " + data['weather'][0]['description'];
            $('#description').text(description);



            //convert to centigrad

            let help_temp = data['main']['temp'] - 273;


            let temp = "temp : " + Math.round(help_temp);
            $('#temp').text(temp);
        })
})

$('#sub').click(add);



function add() {
    //add some thing

    var info = $("#info").val();
    if ($("#info").val() == '') {
        //alerting
        alerter("field is empty");
    }
    else {

        //alerting

        alerter("Add succesfully");

        //creating 

        let task_content = info;
        $("#list").append(`<li id='item' class="items event"><input type='checkbox' class='box'><span>${task_content}</span><button class="duty" ><svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg></button><button class="duty"><svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg></button></li>`)

        //reset
        $("#info").val('');





        //add funtion

        let add_func = $(".event")
        const childs = add_func[0].children;
        childs[3].addEventListener("click", function () {

            this.parentElement.remove()
            //number of items

            let count = document.querySelectorAll('#item');
            let counter = count.length;
            console.log(counter);
            $('#total').text('total item is: ' + counter);
            //alerting
            alerter("Deleted!")


        })

        childs[2].addEventListener("click", function () {
            //disabling
            $("#list").addClass("disabler");

            this.parentElement.classList.add('editor')
            $("#info").val(this.parentElement.children[1].textContent);

            $("#sub").off();
            $("#sub").val("edit")
            $("#sub").click(function() {
                $('.editor')[0].children[1].textContent = $("#info").val();
                $("#info").val('');
                this.parentElement.classList.remove('editor')
                $("#sub").off();
                $("#sub").val("add");
                $("#sub").click(add);
                //alerting
                alerter("Edited!");

                //enableing
                $("#list").removeClass("disabler");
            })





        })


        childs[0].addEventListener("change", function () {
            let saver = this.parentElement;
            this.parentElement.remove();
            saver.classList.add("decorator")

            $("#list2").append(saver);
            //alerting
            alerter("Done!")
        })


        add_func[0].classList.remove('event');

        //number of items

        let count = document.querySelectorAll('#item');
        let counter = count.length;
        console.log(counter);
        $('#total').text('total item is: ' + counter);



    }
}











$("#close-alert").click(function () {
    $("#error").fadeOut(100)

})

//show alert
function alerter(message) {
    $("#detail").text(message);
    $("#error").fadeIn(300)

    setTimeout(() => {
        $("#error").fadeOut(300)
    }, 5000); // 👈️ time in milliseconds


}


