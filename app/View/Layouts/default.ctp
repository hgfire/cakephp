<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

//$cakeDescription = __d('cake_dev', 'CakePHP: the rapid development php framework');
$cakeDescription = __d('Easy Workflow','Easy Workflow');
$cakeVersion = __d('cake_dev', 'CakePHP %s', Configure::version())
?>
<!DOCTYPE html>
<html>
<head>
	<?php echo $this->Html->charset(); ?>
	<title>
		<?php echo $cakeDescription ?>:
		<?php echo $this->fetch('title'); ?>
	</title>
	<?php
		echo $this->Html->meta('icon');

		echo $this->Html->css('bootstrap');
		echo $this->Html->css('bootstrap-responsive');
		echo $this->Html->css('jquery-ui');
		echo $this->Html->css('myStyle');
		echo $this->fetch('meta');
		echo $this->fetch('docs.min');
		echo $this->fetch('bootstrap-datetimepicker.min');


	?>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" language="fr" />
        <title><?php echo $title_for_layout; ?></title>
</head>
<body>
    <!-- Fixed navbar -->
    <div class="navbar navbar-inverse navbar-fixed-top bg-green" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                 <div class="navbar-collapse collapse pull-left">
                                <ul class="nav navbar-nav">
                                    <li><img   style=" height: auto;width:320px;" ></li>
                                 </ul>
                 </div>

            </div>

            <div class="navbar-collapse collapse pull-right">
            <a class="navbar-brand apliname" href="#"></li></a>
                <ul class="nav navbar-nav">

                </ul>
            </div><!--/.nav-collapse -->

        </div><!--/.container -->
    </div></br></br></br>
<div class="container " role="main">
    <div class="page-header">
        <?php //debug($this->Session->read()); ?>
        <?php echo $this->Session->flash(); ?>
    </div>
    <?php  echo $this->element('navbar'); ?>
    <div class="row ">
       <?php echo $this->element('sidebar',array("students" => $nbre_students,"marks" => $nbre_marks)); ?>
       <div class="col-sm-9">
            <div class="panel panel-default content">
			<?php echo $this->fetch('content'); ?>
                    </div>
                </div>
            </div><!-- /.col-sm-9 -->
        </div>
    <?php
        echo $this->Html->script('jquery-1.11.0');
        echo $this->Html->script('bootstrap');
        echo $this->Html->script('jquery');
        echo $this->Html->script('jquery-ui');
        echo $this->Html->script('jquery.form');
        echo $this->Html->script('myScript');
        echo $this->Html->script('ckeditor/ckeditor');
        echo $this->Html->script('bootstrap-datetimepicker.min');
        echo $this->Html->script('locales/bootstrap-datetimepicker.fr');

        echo $scripts_for_layout;
         echo $this->fetch('script');

    ?>
	<?php   //echo $this->element('sql_dump'); ?>



    <!-- overlayed element -->
    <div id="dialogModal">
         <!-- the external content is loaded inside this tag -->
         <div id="contentWrap"></div>
    </div>
     <?php echo $this->element('footer'); ?>
</body>
</html>
