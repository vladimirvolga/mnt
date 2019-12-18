<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\lib\Narodmon;

class GetDataController extends Controller
{

    public function test () {


        $nm = new Narodmon;
//
//        $text = $nm -> testPrint();
//        echo $text;
        $id = "7968";

        $responseData = $nm -> sensorsOnDevice($id);
        echo $responseData;

    }


}
