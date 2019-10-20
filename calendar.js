<div class="col-md-1 hour">
11AM
</div>
<textarea class="col-md-10 description">
        </textarea>
<button class="btn saveBtn col-md-1">
<i class="fas fa-save"></i>
</button>
</div>


</div>

</div>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
crossorigin="anonymous" />
<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />   $(".saveBtn").on("click",function(){
var value = $(this).siblings(".description").val();
var time= $(this).parent().attr("id");
})
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
hourUpdater() 
function hourUpdater() {

var currentHour = moment().hours();

$(".time-block").each(function() {
var blockHour = parseInt($(this).attr("id").split("-")[1]);

if (blockHour < thisHour) {
$(this).addClass("past");thisHour) {
$(this).removeClass("past");
$(this).addClass("present");
} 
else {
$(this).removeClass("past");
$(this).removeClass("present");
$(this).addClass("future");
}
}
