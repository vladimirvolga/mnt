<?php
/**
 * Created by PhpStorm.
 * User: Vaio-pc
 * Date: 25.11.2019
 * Time: 21:21
 */

namespace App\lib;

use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;


class Narodmon
{


    public function getConstants() {

        $constants['BASEURL']   = "http://narodmon.ru/api";
        $constants['UUID']      = "fcf07a5a8fce9149a066696936ccc5fb";
        $constants['APIKEY']    = "DDbuA7WkfDX4G";
        $constants['LANG']      = "ru";

        return $constants;

    }


    public function request($dataForRequest) {

        $constants = $this->getConstants();
        $baseUrl = $constants["BASEURL"];

        $client = new Client;

        try {
            $res = $client->post($baseUrl, [
                RequestOptions::JSON => $dataForRequest
            ]);
        }

        catch (GuzzleException $e) {
            echo "AGH!". $e->getMessage();
        }

        $responseStatusCode = $res->getStatusCode();

        if ($responseStatusCode == 200) {

            $responseBody = $res->getBody();
            return $responseBody;

        }

    }


    public function sensorsOnDevice($id) {

        $constants = $this->getConstants();

        $dataForRequest["cmd"] = "sensorsOnDevice";
//        $dataForRequest["id"] = "7968";
        $dataForRequest["id"] = $id;
        $dataForRequest["uuid"] = $constants['UUID'];
        $dataForRequest["api_key"] = $constants['APIKEY'];
        $dataForRequest["lang"] = $constants['LANG'];

        $responseBody= $this->request($dataForRequest);
        $responseBodyDk = json_decode($responseBody,true);
        $responseBodyEk = json_encode($responseBodyDk,JSON_UNESCAPED_UNICODE);

        return $responseBodyEk;

    }





    public function testPrint() {
//        echo 'тестовый принт из пользовательского класса';
        $textForPrint = 'тестовый принт из пользовательского класса';
        return $textForPrint;
    }


    public function testPrint2($textForPrint) {
        echo $textForPrint;
    }


}