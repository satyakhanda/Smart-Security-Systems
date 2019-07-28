<?php 

if(isset($_POST['video'])){
    // Put video through google video api

    // Put json file and the metadata file into yuuvis
} else {
    header("HTTP/1.0 404 Not Found");
    echo "Please insert a video file into the upload";
}

?>