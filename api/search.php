<?php 

if(isset($_GET['begin']) and isset($_GET['end'])){
    // Only shows relevant info in between indicated begin and end times

} else if(isset($_GET['begin'])) {
    // Shows relevant info in between indicated begin time to end of video

} else if(isset($_GET['end'])){
    // Shows relevant info in between indicated beginning of video to end time

} else {
    // Shows all relevant information

}

function get_yuuvis_data(beginTime, endTime){
    // Returns all Yuuvis items in the timestamps
}

?>