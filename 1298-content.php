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

                        <label for="">Main Location</label><br>
                        <select class="select-hidden" name="" id="">
                            <option value="">Any</option>
                            <option value="">Any</option>
                            <option value="">Any</option>
                        </select>

                    </div>
                    <div class="select-custom">
                        <div class="selected-item">aaaa</div>
                        <div class="select-option">aaaa</div>
                    </div>
                </div>
                <div class="col-md-4">

                    <div class="form-group">

                        <label for="">Main Location</label><br>
                        <select class="select-hidden" name="" id="">
                            <option value="">Any</option>
                            <option value="">Any</option>
                            <option value="">Any</option>
                        </select>
                    </div>

                </div>
                <div class="col-md-4">

                    <div class="form-group">

                        <label for="">Main Location</label>
                        <select class="select-hidden" name="" id="">
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

