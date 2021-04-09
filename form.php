<?php
    $name = null;
    $detail = null;
    $error = false;

    $time = date("Y/m/d");

    $name = $_POST["name"];
    $detail = $_POST["detail"];

    if($name == null) {
        $name = "名無しのUser";
    }
    if($detail == null) {
        $error = true;
    }

