<?php
$url_host = 'http://' . $_SERVER['HTTP_HOST'];
$pattern_document_root = addcslashes(realpath($_SERVER['DOCUMENT_ROOT']), '\\');
$pattern_uri = '/' . $pattern_document_root . '(.*)$/';

preg_match_all($pattern_uri, __DIR__, $matches);
$url_path = $url_host . $matches[1][0];
$url_path = str_replace('\\', '/', $url_path);
?>
<div class="type-1298">
    <div class="container">
        <form method="get" action="#">
            <div class="col-md-9">
                <div class="col-md-4">
                    <div class="form-group">
                        <div class="custom-select" style="width:100%;">
                            <label for="">Main Location</label><br>
                            <select>
                                <option value="0">Select car:</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                                <option value="5">Honda</option>
                                <option value="6">Jaguar</option>
                                <option value="7">Land Rover</option>
                                <option value="8">Mercedes</option>
                                <option value="9">Mini</option>
                                <option value="10">Nissan</option>
                                <option value="11">Toyota</option>
                                <option value="12">Volvo</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">

                    <div class="form-group">

                        <label for="">Main Location</label><br>
                        <select class="" name="" id="">
                            <option value="">Any</option>
                            <option value="">Any</option>
                            <option value="">Any</option>
                        </select>
                    </div>

                </div>
                <div class="col-md-4">

                    <div class="form-group">

                        <label for="">Main Location</label>
                        <select class="" name="" id="">
                            <option value="">Any</option>
                            <option value="">Any</option>
                            <option value="">Any</option>
                        </select>
                    </div>

                </div>
            </div>
            <div class="col-md-3">
                <div class="col-md-4">
                    <button>
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </button>

                </div>
                <div class="col-md-8">
                    <button>
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>

                </div>
            </div>

        </form>


    </div>
</div>

