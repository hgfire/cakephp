        <div class="col-sm-3"><!-- /.col-sm-3  debu du menu de gauche-->
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title text-center">Menu</h3>
                </div>
                <div class="panel-body">
                    <!--ul class="nav nav-pills nav-stacked" style="max-width: 300px;">
                        <li class="active"><a href="#">Créer un article</a></li>
                        <li><a href="#"> Brouillons <span class="badge pull-right"> 12</span></a></li>
                        <li><a href="#">Partagés avec moi<span class="badge pull-right">4</span></a></li>
                        <li><a href="#">Corbeille<span class="badge pull-right">1</span></a></li>
                    </ul-->
                    <div class="list-group">

                        <a href="" class="list-group-item active text-center" data-toggle="modal"><span class="glyphicon glyphicon-user"></span>&nbsp &nbsp -Students- </span></a>
                        <a href="/cakephp/students/add" class="list-group-item " data-toggle="modal"><span class="glyphicon glyphicon-plus-sign"></span>&nbsp &nbsp New</span></a>
                        <a href="/cakephp/students/index" class="list-group-item menuL" >
                            <span class="glyphicon glyphicon-edit" ></span>&nbsp &nbsp List <span class="badge pull-right"> <?php echo $students; ?></span>
                        </a>

                    </div>

                    <div class="list-group">

                        <a href="" class="list-group-item active text-center" data-toggle="modal"><span class="glyphicon glyphicon-list"></span>&nbsp &nbsp -Marks- </span></a>
                        <a href="/cakephp/marks/add" class="list-group-item " data-toggle="modal"><span class="glyphicon glyphicon-plus-sign"></span>&nbsp &nbsp New</span></a>
                        <a href="/cakephp/marks/index" class="list-group-item menuL" >
                            <span class="glyphicon glyphicon-edit" ></span>&nbsp &nbsp List <span class="badge pull-right"> <?php echo $marks; ?></span>
                        </a>

                    </div>
                </div>
            </div>
        </div><!-- /.col-sm-3  fin du menu de gauche-->