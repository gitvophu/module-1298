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
        <form id="search-form" method="get" action="#">
            <div class="col-md-9">
                <div class="col-md-4 select-box">
                    <div class="form-group" >
                        <select class="select-hidden" name="province" id="select-1">

                            <option value="1">HCM</option>
                            <option value="2">HN</option>
                            <option value="3">Da Nang</option>
                        </select>
                    </div>
                    <div class="select-custom" id="select-custom-1">
                        <div class="label" >Thanh Pho</div>
                        <div class="selected-item">selected</div>
                        <div class="select-options">
                            <input class="search-option" type="text" width="100%">
                            <div class="option-item">option 1</div>
                            <div class="option-item">option 2</div>
                            <div class="option-item">option 3</div>
                        </div>

                    </div>
                </div>
                <div class="col-md-4 select-box" id="select-box-2">
                    <div class="form-group" >

                        <select class="select-hidden" name="district" id="select-2">
                            <option value="1">Quan 1</option>
                            <option value="2">Quan 2</option>
                            <option value="3">Quan 3</option>
                        </select>

                    </div>
                    <div class="select-custom" id="select-custom-2">
                        <div class="label" >Quan Huyen</div>
                        <div class="selected-item">selected</div>
                        <div class="select-options" >
                            <div class="option-item">option 1</div>
                            <div class="option-item">option 2</div>
                            <div class="option-item">option 3</div>
                        </div>

                    </div>
                </div>
                <div class="col-md-4 select-box" id="select-box-3">
                    <div class="form-group" >

                        <select class="select-hidden" name="ward" id="select-3">
                            <option value="1">Tan thoi hiep</option>
                            <option value="2">Trung chanh</option>
                            <option value="3">Hiep thanh</option>
                        </select>

                    </div>
                    <div class="select-custom" id="select-custom-3">
                        <div class="label" >Phuong</div>
                        <div class="selected-item">selected</div>
                        <div class="select-options">
                            <div class="option-item">option 1</div>
                            <div class="option-item">option 2</div>
                            <div class="option-item">option 3</div>
                        </div>

                    </div>
                </div>
               <!-- <div class="col-md-3 select-box" id="select-box-3">
                    <div class="form-group" >

                        <select class="select-hidden" name="ward" id="select-3">
                            <option value="1">Tan thoi hiep</option>
                            <option value="2">Trung chanh</option>
                            <option value="3">Hiep thanh</option>
                        </select>

                    </div>
                    <div class="select-custom" id="select-custom-3">
                        <div class="label" >Phuong</div>
                        <div class="selected-item">selected</div>
                        <div class="select-options">
                            <div class="option-item">option 1</div>
                            <div class="option-item">option 2</div>
                            <div class="option-item">option 3</div>
                        </div>

                    </div>
                </div>-->
            </div>

            <div class="col-md-3">
                <div class="col-md-4">
                    <div class="advance-btn">
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </div>

                </div>
                <div class="col-md-8">
                    <div class="search-btn">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>

                </div>
            </div>

        </form>


    </div>
</div>

